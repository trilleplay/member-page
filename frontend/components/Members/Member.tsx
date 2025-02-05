import SchoolIcon from '@mui/icons-material/School';
import { Stack, Tooltip } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';
import CommitteeIcon from '~/components/Committees/CommitteeIcon';
import Link from '~/components/Link';
import { getClassYear, getFullName } from '~/functions/memberFunctions';
import selectTranslation from '~/functions/selectTranslation';
import { MemberPageQueryResult } from '~/generated/graphql';
import routes from '~/routes';
import UserAvatar from '../UserAvatar';

type MandateType = MemberPageQueryResult['data']['member']['mandates'][number];

type StructuredMandates = {
  year: string;
  mandates: MandateType[];
}[];
export default function Member({
  member,
}: {
  member: MemberPageQueryResult['data']['member'];
}) {
  const { i18n } = useTranslation();

  // Format mandates as an ordered array
  const mandatesByYear: StructuredMandates = useMemo(
    () => member.mandates.reduce((acc: StructuredMandates, mandate: MandateType) => {
      const startYear = new Date(mandate.start_date).getFullYear();
      const endYear = new Date(mandate.end_date).getFullYear();
      const year: string = startYear === endYear ? startYear.toString() : `${startYear}-${endYear}`;
      const existing = acc.find((m) => m.year === year);
      if (existing) {
        existing.mandates.push(mandate);
      } else {
        // add in correct position in ascending order
        const index = acc.findIndex((m) => m.year < year);
        if (index === -1) {
          acc.push({ year, mandates: [mandate] });
        } else {
          acc.splice(index, 0, { year, mandates: [mandate] });
        }
      }
      return acc;
    }, [] as StructuredMandates),
    [member.mandates],
  );
  const activePositions = member.activeMandates
    ?.map((mandate) => (mandate.position))
    ?.filter((pos) => pos.email) ?? [];
  return (
    <Stack direction="column-reverse" sx={{ display: { xs: 'flex', md: 'grid' }, gridTemplateColumns: '2fr 1fr' }}>
      <Box>
        <Typography variant="h4" style={{ wordBreak: 'break-word' }}>{getFullName(member, true, true)}</Typography>
        <Typography variant="subtitle1" gutterBottom>
          {member.student_id}
        </Typography>
        <List>
          <ListItem style={{ paddingLeft: 0 }}>
            <Stack direction="row" spacing={2}>
              <SchoolIcon />
              <ListItemText primary={getClassYear(member)} />
            </Stack>
          </ListItem>
          {activePositions.length > 0 && (
          <Box
            display="grid"
            sx={{
              gridTemplateColumns: {
                xs: '1fr',
                md: 'auto 1fr',
              },
              maxWidth: '100%',
              overflow: 'hidden',
            }}
            columnGap={2}
          >
            {activePositions.map((position) => (
              <>
                <Box
                  gridColumn="span 1"
                >
                  <Link href={`mailto:${position.email}`}>
                    {position.email}
                  </Link>
                </Box>
                <Box
                  gridColumn="span 1"
                >
                  {selectTranslation(
                    i18n,
                    position.name,
                    position.nameEn,
                  )}
                </Box>
              </>
            ))}
          </Box>
          )}
          {mandatesByYear.map((mandateCategory) => (
            <Stack
              key={`mandate-categegory${mandateCategory.year}`}
              style={{ marginTop: '1rem' }}
              alignItems="flex-start"
            >
              <Typography variant="h5">{mandateCategory.year}</Typography>
              {mandateCategory.mandates.map((mandate) => (
                <Link
                  key={mandate.id}
                  href={routes.position(mandate.position.id)}
                >
                  <Stack direction="row" alignItems="center">
                    <CommitteeIcon name={mandate.position?.committee?.name} />
                    <Tooltip
                      title={`${mandate.start_date}-${mandate.end_date}`}
                      placement="right"
                    >
                      <Typography sx={{ marginTop: '0.5rem', marginLeft: '0.5rem' }}>
                        {selectTranslation(
                          i18n,
                          mandate?.position?.name,
                          mandate?.position?.nameEn,
                        )}
                      </Typography>
                    </Tooltip>
                  </Stack>
                </Link>
              ))}
            </Stack>
          ))}
        </List>
      </Box>
      <Box>
        <UserAvatar centered src={member.picture_path} size={36} />
      </Box>
    </Stack>
  );
}
