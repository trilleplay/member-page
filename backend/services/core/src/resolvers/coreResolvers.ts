/* eslint-disable no-underscore-dangle */
import { context } from '../shared';
import { DataSources } from '../datasources';
import { Resolvers } from '../types/graphql';

interface DataSourceContext {
  dataSources: DataSources;
}

const coreResolvers: Resolvers<context.UserContext & DataSourceContext> = {
  Query: {
    me(_, __, { user, dataSources }) {
      if (!user) return undefined;
      return dataSources.memberAPI.getCurrentMember({ user });
    },
    members(_, { page, perPage, filter }, { user, roles, dataSources }) {
      return dataSources.memberAPI.getMembers(
        { user, roles },
        page,
        perPage,
        filter,
      );
    },
    member(_, { id, student_id }, { user, roles, dataSources }) {
      return dataSources.memberAPI.getMember({ user, roles }, { id, student_id });
    },
    // Used in App
    memberById(_, { id }, { user, roles, dataSources }) {
      return dataSources.memberAPI.getMember({ user, roles }, { id });
    },
    pings(_, __, { user, roles, dataSources }) {
      return dataSources.memberAPI.getPings({ user, roles });
    },
    positions(_, { page, perPage, filter }, { user, roles, dataSources }) {
      return dataSources.positionAPI.getPositions(
        { user, roles },
        page,
        perPage,
        filter,
      );
    },
    committees(_, { page, perPage, filter }, { user, roles, dataSources }) {
      return dataSources.committeeAPI.getCommittees(
        { user, roles },
        page,
        perPage,
        filter,
      );
    },
    mandatePagination(_, { page, perPage, filter }, { user, roles, dataSources }) {
      return dataSources.mandateAPI.getMandates(
        { user, roles },
        page,
        perPage,
        filter,
      );
    },
    door(_, { name }, { user, roles, dataSources }) {
      return dataSources.accessAPI.getDoor({ user, roles }, name);
    },
    doors(_, __, { user, roles, dataSources }) {
      return dataSources.accessAPI.getDoors({ user, roles });
    },
    api(_, { name }, { user, roles, dataSources }) {
      return dataSources.accessAPI.getApi({ user, roles }, name);
    },
    apis(_, __, { user, roles, dataSources }) {
      return dataSources.accessAPI.getApis({ user, roles });
    },
    apiAccess(_, __, { user, roles, dataSources }) {
      return dataSources.accessAPI.getUserApis({ user, roles });
    },
    songs(_, __, { user, roles, dataSources }) {
      return dataSources.songAPI.songs({ user, roles });
    },
    songById(_, { id }, { user, roles, dataSources }) {
      return dataSources.songAPI.songById(id, { user, roles });
    },
    songByTitle(_, { title }, { user, roles, dataSources }) {
      return dataSources.songAPI.songByTitle(title, { user, roles });
    },
    adminSettings(_, __, { user, roles, dataSources }) {
      return dataSources.adminAPI.getAdminSettings({ user, roles });
    },
  },
  Member: {
    __resolveReference(member, { user, roles, dataSources }) {
      return dataSources.memberAPI.getMember(
        { user, roles },
        { id: member.id },
      );
    },
    mandates(member, { onlyActive }, { user, roles, dataSources }) {
      return dataSources.mandateAPI.getMandatesForMember(
        { user, roles },
        member.id,
        onlyActive,
      );
    },
    customAuthorOptions(member, _, { user, roles, dataSources }) {
      return dataSources.authorAPI.getCustomAuthorOptionsForUser({ user, roles }, member.id);
    },
    canPing(member, _, { user, roles, dataSources }) {
      return dataSources.memberAPI.canPing({ user, roles }, member.id);
    },
  },
  Author: {
    __resolveReference(author, { user, roles, dataSources }) {
      return dataSources.authorAPI.getAuthor({ user, roles }, author.id);
    },
    mandate(parent, _, { user, roles, dataSources }) {
      if (parent.mandate?.id) {
        return dataSources.mandateAPI.getMandate({ user, roles }, parent.mandate.id);
      }
      return undefined;
    },
    customAuthor(parent, _, { user, roles, dataSources }) {
      if (parent.customAuthor?.id) {
        return dataSources.authorAPI.getCustomAuthor({ user, roles }, parent.customAuthor.id);
      }
      return undefined;
    },
  },
  CustomAuthor: {
    __resolveReference(author, { user, roles, dataSources }) {
      return dataSources.authorAPI.getCustomAuthor({ user, roles }, author.id);
    },
  },
  Committee: {
    __resolveReference(committee, { user, roles, dataSources }) {
      return dataSources.committeeAPI.getCommittee({ user, roles }, committee);
    },
  },
  Position: {
    __resolveReference(position, { user, roles, dataSources }) {
      return dataSources.positionAPI.getPosition({ user, roles }, position);
    },
    committee(parent, _, { user, roles, dataSources }) {
      return dataSources.committeeAPI.getCommittee(
        { user, roles },
        { id: parent.committee?.id },
      );
    },
    emailAliases(parent, _, { user, roles, dataSources }) {
      return dataSources.positionAPI.getEmailAliases(
        { user, roles },
        parent.id,
      );
    },
    activeMandates(parent, _, { user, roles, dataSources }) {
      return dataSources.mandateAPI.getMandates(
        { user, roles },
        0,
        10,
        {
          position_id: parent.id,
          onlyActive: true,
        },
      ).then((pagination) => pagination.mandates);
    },
  },
  Mandate: {
    __resolveReference(mandate, { user, roles, dataSources }) {
      return dataSources.mandateAPI.getMandate({ user, roles }, mandate.id);
    },
    position(parent, _, { user, roles, dataSources }) {
      if (parent.position?.id !== undefined) {
        return dataSources.positionAPI.getPosition(
          { user, roles },
          { id: parent.position.id },
        );
      }
      return dataSources.positionAPI.getPositionByMandateId(
        { user, roles },
        parent.id,
      );
    },
    member(parent, _, { user, roles, dataSources }) {
      if (parent.member?.id !== undefined) {
        return dataSources.memberAPI.getMember(
          { user, roles },
          { id: parent.member?.id },
        );
      }
      return dataSources.memberAPI.getMember(
        { user, roles },
        {
          mandate_id: parent.id,
        },
      );
    },
  },
  Door: {
    __resolveReference(door, { user, roles, dataSources }) {
      return dataSources.accessAPI.getDoor({ user, roles }, door.name);
    },
  },
  Mutation: {
    member: () => ({}),
    committee: () => ({}),
    position: () => ({}),
    mandate: () => ({}),
    access: () => ({}),
    admin: () => ({}),
  },
  MemberMutations: {
    create(_, { input }, { user, roles, dataSources }) {
      return dataSources.memberAPI.createMember({ user, roles }, input, dataSources);
    },
    update(_, { id, input }, { user, roles, dataSources }) {
      return dataSources.memberAPI.updateMember({ user, roles }, id, input);
    },
    updateFoodPreference(_, { id, foodPreference }, { user, roles, dataSources }) {
      return dataSources.memberAPI.updateFoodPreference({ user, roles }, id, foodPreference);
    },
    remove(_, { id }, { user, roles, dataSources }) {
      return dataSources.memberAPI.removeMember({ user, roles }, id);
    },
    async ping(_, { id }, { user, roles, dataSources }) {
      await dataSources.memberAPI.pingMember({ user, roles }, id);
      return true;
    },
  },
  CommitteeMutations: {
    create(_, { input }, { user, roles, dataSources }) {
      return dataSources.committeeAPI.createCommittee({ user, roles }, input);
    },
    update(_, { id, input }, { user, roles, dataSources }) {
      return dataSources.committeeAPI.updateCommittee(
        { user, roles },
        id,
        input,
      );
    },
    remove(_, { id }, { user, roles, dataSources }) {
      return dataSources.committeeAPI.removeCommittee({ user, roles }, id);
    },
  },
  PositionMutations: {
    create(_, { input }, { user, roles, dataSources }) {
      return dataSources.positionAPI.createPosition({ user, roles }, input);
    },
    update(_, { id, input }, { user, roles, dataSources }) {
      return dataSources.positionAPI.updatePosition({ user, roles }, id, input);
    },
    remove(_, { id }, { user, roles, dataSources }) {
      return dataSources.positionAPI.removePosition({ user, roles }, id);
    },
  },
  MandateMutations: {
    create(_, { input }, { user, roles, dataSources }) {
      return dataSources.mandateAPI.createMandate({ user, roles }, input);
    },
    update(_, { id, input }, { user, roles, dataSources }) {
      return dataSources.mandateAPI.updateMandate({ user, roles }, id, input);
    },
    remove(_, { id }, { user, roles, dataSources }) {
      return dataSources.mandateAPI.removeMandate({ user, roles }, id);
    },
  },
  AccessMutations: {
    door: () => ({}),
    policy: () => ({}),
  },
  DoorMutations: {
    create(_, { input }, { user, roles, dataSources }) {
      return dataSources.accessAPI.createDoor({ user, roles }, input);
    },
    remove(_, { name }, { user, roles, dataSources }) {
      return dataSources.accessAPI.removeDoor({ user, roles }, name);
    },
  },
  PolicyMutations: {
    createDoorAccessPolicy(_, { input }, { user, roles, dataSources }) {
      return dataSources.accessAPI.createDoorAccessPolicy(
        { user, roles },
        input,
      );
    },
    createApiAccessPolicy(_, { input }, { user, roles, dataSources }) {
      return dataSources.accessAPI.createApiAccessPolicy(
        { user, roles },
        input,
      );
    },
    remove(_, { id }, { user, roles, dataSources }) {
      return dataSources.accessAPI.removeAccessPolicy({ user, roles }, id);
    },
  },
  AdminMutations: {
    updateSearchIndex(_, __, { user, roles, dataSources }) {
      return dataSources.adminAPI.updateSearchIndex({ user, roles });
    },
    syncMandatesWithKeycloak(_, __, { user, roles, dataSources }) {
      return dataSources.adminAPI.syncMandatesWithKeycloak({ user, roles });
    },
    seed(_, __, { user, roles, dataSources }) {
      return dataSources.adminAPI.seed({ user, roles });
    },
    createSetting(_, { key, value }, { user, roles, dataSources }) {
      return dataSources.adminAPI.createAdminSetting({ user, roles }, key, value);
    },
    updateSetting(_, { key, value }, { user, roles, dataSources }) {
      return dataSources.adminAPI.updateAdminSetting({ user, roles }, key, value);
    },
    deleteSetting(_, { key }, { user, roles, dataSources }) {
      return dataSources.adminAPI.deleteAdminSetting({ user, roles }, key);
    },
    setStabHiddenPeriod(_, { start, end }, { user, roles, dataSources }) {
      return dataSources.adminAPI.setStabHiddenPeriod({ user, roles }, start, end);
    },
  },
};

export default coreResolvers;
