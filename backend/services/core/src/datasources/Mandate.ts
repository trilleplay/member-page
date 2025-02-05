/* eslint-disable max-len */
import { UserInputError } from 'apollo-server';
import kcClient from '../keycloak';
import
{
  context, createLogger, dbUtils, UUID,
} from '../shared';
import
{
  convertMandate, populateMandates, todayInInterval,
} from '../shared/converters';
import { STAB_IDS } from '../shared/database';
import * as sql from '../types/database';
import * as gql from '../types/graphql';
import { convertMember } from './Member';
import { getFullName } from '../shared/utils';

import { NotificationType } from '../shared/notifications';

const logger = createLogger('core-service');

export default class MandateAPI extends dbUtils.KnexDataSource {
  getMandate(ctx: context.UserContext, id: UUID): Promise<gql.Maybe<gql.Mandate>> {
    return this.withAccess('core:mandate:read', ctx, async () => {
      const res = (await this.knex<sql.Mandate>('mandates').select('*').where({ id }))[0];

      if (!res) { return undefined; }
      // Returns undefined for stab mandates during the nollning.
      if (await this.isStabHiddenForUser(ctx, res.member_id) && STAB_IDS.includes(res.position_id)) {
        return undefined;
      }
      return convertMandate(res);
    });
  }

  getMandates(
    ctx: context.UserContext,
    page: number,
    perPage: number,
    filter?: gql.MandateFilter,
  ): Promise<gql.MandatePagination> {
    return this.withAccess('core:mandate:read', ctx, async () => {
      let filtered = this.knex<sql.Mandate>('mandates');

      if (filter) {
        if (filter.id) {
          filtered = filtered.where({ id: filter.id });
        }

        if (filter.position_id) {
          filtered = filtered.where({ position_id: filter.position_id });
        }

        if (filter.position_ids) {
          filtered = filtered.whereIn('position_id', filter.position_ids);
        }

        if (filter.member_id) {
          filtered = filtered.where({ member_id: filter.member_id });
        }

        if (filter.start_date || filter.end_date) {
          if (!filter.end_date) {
            filtered = filtered.where('start_date', '>=', filter.start_date);
          } else if (!filter.start_date) {
            filtered = filtered.where('start_date', '<=', filter.end_date);
          } else {
            filtered = filtered.whereBetween('start_date', [filter.start_date, filter.end_date]);
          }
        }
      }
      // Removes all mandates that are stab mandates, during the nollning.
      if (await this.isStabHiddenForUser(ctx)) {
        filtered = filtered.whereNotIn('position_id', STAB_IDS); // hide ALL stab mandates (even old ones)
        // Remove active stab members from the list, even their other/old mandates
        filtered = filtered
          .whereNotIn('member_id', (knex) => {
            knex.select('member_id')
              .from('mandates')
              .whereIn('position_id', STAB_IDS)
              .andWhereRaw('CURRENT_DATE BETWEEN start_date AND end_date');
          });
      }

      const res = await filtered
        .clone()
        .offset(page * perPage)
        .orderBy('start_date', 'desc')
        .limit(perPage);

      const members = (await this.knex<sql.Member>('members').whereIn(
        'id',
        res.map((m) => m.member_id),
      ));
      const positions = await this.knex<sql.Position>('positions').whereIn('id', res.map((m) => m.position_id));
      let mandates = res.map((m) => convertMandate(m));
      if (filter?.onlyActive) {
        mandates = mandates.filter((m) => todayInInterval(new Date(m.start_date), new Date(m.end_date)));
      }
      const totalMandates = Number((await filtered.clone().count({ count: '*' }))[0].count?.toString() || '0');
      const pageInfo = dbUtils.createPageInfo(<number>totalMandates, page, perPage);
      return {
        mandates: populateMandates(mandates, members.map((m) => convertMember(m, ctx)), positions),
        pageInfo,
      };
    });
  }

  getMandatesForMember(
    ctx: context.UserContext,
    memberId: UUID,
    onlyActive: boolean,
  ): Promise<gql.Mandate[]> {
    return this.withAccess('core:mandate:read', ctx, async () => {
      let query = this.knex<sql.Mandate>('mandates').select('*').where({ member_id: memberId });
      if (onlyActive) {
        query = query.andWhereRaw('CURRENT_DATE BETWEEN start_date AND end_date');
      }
      const res = await query;
      // Remove stab info
      if (await this.isStabHiddenForUser(ctx, memberId)) {
        // if user has an active stab mandate, hide all other mandates
        if (res.some((m) => m.end_date > new Date() && STAB_IDS.includes(m.position_id))) {
          return [];
        }
        // otherwise just filter out their old stab mandates
        return res.filter((m) => !STAB_IDS.includes(m.position_id)).map(convertMandate);
      }
      return res.map(convertMandate);
    });
  }

  private async getKeycloakId(memberId: UUID): Promise<string> {
    return (await this.knex<sql.Member & sql.Keycloak>('members').join('keycloak', 'members.id', 'keycloak.member_id').select('keycloak_id').where({ id: memberId }))[0]?.keycloak_id;
  }

  async sendNotificationToNewMandateMember(member_id: UUID, mandate: sql.Mandate, fromMember: gql.Member) {
    const position = await this.knex<sql.Position>('positions').select('*').where({ id: mandate.position_id }).first();
    if (!position) throw new Error('Position not found');
    await this.addNotification({
      title: `Du har nu posten "${position.name}"`,
      message: `${getFullName(fromMember)} har gett dig posten "${position.name}`,
      link: `/members/${member_id}`,
      type: NotificationType.CREATE_MANDATE,
      memberIds: [member_id],
      fromMemberId: fromMember.id,
    });
  }

  createMandate(
    ctx: context.UserContext,
    input: gql.CreateMandate,
  ): Promise<gql.Maybe<gql.Mandate>> {
    return this.withAccess('core:mandate:create', ctx, async () => {
      const me = await this.getCurrentMember(ctx);
      const position = await this.knex<sql.Position>('positions')
        .select('*')
        .where({ id: input.position_id }).first();
      if (!position) throw new Error('Position not found');
      const mandate = (await this.knex<sql.Mandate>('mandates').insert(input).returning('*'))[0];
      if (todayInInterval(mandate.start_date, mandate.end_date)) {
        const keycloakId = await this.getKeycloakId(mandate.member_id);
        try {
          await kcClient.createMandate(keycloakId, mandate.position_id);
          await this.knex('mandates').where({ id: mandate.id }).update({ in_keycloak: true });
        } catch (err) {
          logger.error(JSON.stringify(err));
        }
        if (position.board_member) {
          try {
            await kcClient.createMandate(keycloakId, 'dsek.styr');
            await this.knex('mandates').where({ id: mandate.id }).update({ in_keycloak: true });
          } catch (err) {
            logger.error(JSON.stringify(err));
          }
        }
      }

      this.sendNotificationToNewMandateMember(mandate.member_id, mandate, me);

      return convertMandate(mandate);
    });
  }

  updateMandate(
    ctx: context.UserContext,
    id: UUID,
    input: gql.UpdateMandate,
  ): Promise<gql.Maybe<gql.Mandate>> {
    return this.withAccess('core:mandate:update', ctx, async () => {
      const res = (await this.knex<sql.Mandate>('mandates').select('*').where({ id }).update(input)
        .returning('*'))[0];

      if (!res) { throw new UserInputError('id did not exist'); }

      const keycloakId = await this.getKeycloakId(res.member_id);
      if (todayInInterval(res.start_date, res.end_date)) {
        try {
          await kcClient.createMandate(keycloakId, res.position_id);
        } catch (err) {
          logger.error(JSON.stringify(err));
        }
        await this.knex('mandates').where({ id: res.id }).update({ in_keycloak: true });
      } else {
        try {
          await kcClient.deleteMandate(keycloakId, res.position_id);
        } catch (err) {
          logger.error(JSON.stringify(err));
        }
        await this.knex('mandates').where({ id: res.id }).update({ in_keycloak: false });
      }

      return convertMandate(res);
    });
  }

  removeMandate(ctx: context.UserContext, id: UUID): Promise<gql.Maybe<gql.Mandate>> {
    return this.withAccess('core:mandate:delete', ctx, async () => {
      const mandate = (await this.knex<sql.Mandate>('mandates').select('*').where({ id }).first());

      if (!mandate) { throw new UserInputError('mandate did not exist'); }

      const similarMandates = (await this.knex<sql.Mandate>('mandates')
        .where({ member_id: mandate.member_id, position_id: mandate.position_id }))
        .filter((m) => todayInInterval(m.start_date, m.end_date));

      // There are no similar mandates
      if (similarMandates.length <= 1) {
        logger.info('Removing mandate from keycloak');
        const keycloakId = await this.getKeycloakId(mandate.member_id);
        try {
          await kcClient.deleteMandate(keycloakId, mandate.position_id);
        } catch (err) {
          logger.error(JSON.stringify(err));
        }
      } else {
        logger.info(`Not removing mandate from keycloak since there are ${similarMandates.length} duplicates: ${JSON.stringify(similarMandates)}`);
      }
      await this.knex('mandates').where({ id }).del();
      return convertMandate(mandate);
    });
  }
}
