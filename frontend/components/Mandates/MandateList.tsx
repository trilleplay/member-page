import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import React from 'react';
import groupBy from '~/functions/groupBy';
import {
  GetMandatesByPeriodQuery,
  Maybe,
  Member,
  Position,
} from '~/generated/graphql';
import useMandatesByYear from '~/hooks/useMandatesByYear';
import { hasAccess, useApiAccess } from '~/providers/ApiAccessProvider';
import MandateSet from './MandateSet';
import MandateSkeleton from './MandateSkeleton';
import mandateStyles from './mandateStyles';
import Link from '~/components/Link';
import routes from '~/routes';

type PartialMandate = {
  position?: Partial<Position>;
  member?: Partial<Member>;
};

const getPositionIdFromName = (mandateList: GetMandatesByPeriodQuery['mandatePagination']['mandates'], positionName: string, isEnglish: boolean) => {
  const translatedPositionName = (m: GetMandatesByPeriodQuery['mandatePagination']['mandates'][number]) =>
    (isEnglish && m.position.nameEn ? m.position.nameEn : m.position.name);
  const posId = mandateList.find((m) => translatedPositionName(m) === positionName)?.position?.id;
  return posId;
};

export default function MandateList({ year }: { year: number }) {
  const { t, i18n } = useTranslation('mandate');
  const apiContext = useApiAccess();

  const { data, loading, error } = useMandatesByYear(year);

  const classes = mandateStyles();

  if (loading) {
    return <MandateSkeleton />;
  }

  if (error) {
    return <h2>Error</h2>;
  }

  const isEnglish = i18n.language === 'en';

  const mandateList = data.mandatePagination.mandates;
  const mandatesByPosition = groupBy<string, Member, Maybe<PartialMandate>>(
    mandateList,
    (e) =>
      (isEnglish && e.position.nameEn ? e.position.nameEn : e.position.name),
    (e) => e.member,
  );
  const positions = Array.from(mandatesByPosition.keys()).sort((a, b) =>
    a.localeCompare(b));
  if (!hasAccess(apiContext, 'core:mandate:read')) return null;

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell>{t('positions')}</TableCell>
            <TableCell>{t('mandates')}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {positions.map((p, i) => {
            const posId = getPositionIdFromName(mandateList, p, isEnglish);
            return (mandatesByPosition.has(p) ? (
              <TableRow
                className={i % 2 === 1 ? classes.rowOdd : classes.rowEven}
                key={p}
              >
                <TableCell>
                  {posId ? (
                    <Link href={routes.position(posId)}>
                      {p}
                    </Link>
                  ) : p}

                </TableCell>
                <MandateSet members={mandatesByPosition.get(p)} />
              </TableRow>
            ) : (
              <TableRow>
                <TableCell>{p}</TableCell>
                <TableCell>{t('vakant')}</TableCell>
              </TableRow>
            ));
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
