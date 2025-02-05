import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useTranslation } from 'next-i18next';
import MasonryCard from '~/components/Nolla/Card';
import PostItNote from '~/components/Nolla/PostItNote';
import { DESKTOP_MQ } from '~/components/Nolla/constants';
import PACKINGLIST_COPY from '~/components/Nolla/copy/packinglist';
import NollaLayout from '~/components/Nolla/layout';
import theme from '~/components/Nolla/theme';
import genGetProps from '~/functions/genGetServerSideProps';

const Main = styled('div')`
  display: flex;
  flex-direction: column;
  ul {
    padding-left: 1rem;
  }
`;

const BikeDiv = styled('div')`
  margin: 1rem 0;
  flex-direction: column;
  ${DESKTOP_MQ} {
    margin: 2rem 0;
    flex-direction: row;
  }
  display: flex;
`;

const BikePostIt = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 60px;
  transform: rotate(-20deg);
  font-weight: 700;
  margin-top: 6rem;
`;

const Divider = styled('div')`
  margin-top: 3rem;
  ${DESKTOP_MQ} {
    margin-right: 5rem;
  }
`;

const Paragraph = styled('p')`
  ${DESKTOP_MQ} {
    font-size: 1.25rem;
  }
`;

const DressCodeWrapper = styled('div')``;

const PostItsContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const PostItRow = styled('div')`
  display: flex;
  flex-direction: column;
  ${DESKTOP_MQ} {
    flex-direction: row;
    justify-content: space-around;
  }
  margin: 2rem 0;
`;

const DressCodeTitle = styled('p')`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 1rem 0;
`;

const DressCodeBody = styled('p')`
  margin: 0;
  font-size: 1.3rem;
`;

export const getStaticProps = genGetProps(['nolla']);

function PackingListPage() {
  const { i18n } = useTranslation();
  const copy = i18n.language === 'en' ? PACKINGLIST_COPY.en : PACKINGLIST_COPY.sv;
  return (
    <Main>
      <Box sx={{ margin: 'auto' }}>
        <MasonryCard>
          <Typography variant="h5">{copy.what_to_bring}</Typography>
          <BikeDiv>
            <PostItNote>
              <BikePostIt>{copy.bike}</BikePostIt>
            </PostItNote>
            <Divider />
            <Paragraph>{copy.bike_copy}</Paragraph>
          </BikeDiv>
        </MasonryCard>
      </Box>
      <Box sx={{ margin: 'auto', mt: 4 }}>
        <MasonryCard>
          <Typography variant="h5">{copy.dresscode}</Typography>
          <>
            <Paragraph>{copy.dresscodes_copy}</Paragraph>
            <DressCodeWrapper>
              <PostItsContainer>
                <PostItRow>
                  <PostItNote>
                    <DressCodeTitle>{copy.formal.title}</DressCodeTitle>
                    <DressCodeBody>{copy.formal.description}</DressCodeBody>
                  </PostItNote>
                  <Divider />
                  <PostItNote purple>
                    <DressCodeTitle>{copy.black_tie.title}</DressCodeTitle>
                    <DressCodeBody>{copy.black_tie.description}</DressCodeBody>
                  </PostItNote>
                </PostItRow>
                <PostItRow>
                  <PostItNote purple>
                    <DressCodeTitle>{copy.themes.title}</DressCodeTitle>
                    <DressCodeBody>{copy.themes.description}</DressCodeBody>
                  </PostItNote>
                  <Divider />
                  <PostItNote>
                    <DressCodeTitle>{copy.semi_formal.title}</DressCodeTitle>
                    <DressCodeBody>{copy.semi_formal.description}</DressCodeBody>
                  </PostItNote>
                </PostItRow>
              </PostItsContainer>
            </DressCodeWrapper>
          </>
        </MasonryCard>
      </Box>
    </Main>
  );
}

PackingListPage.getLayout = function getLayout({ children }) {
  return <NollaLayout>{children}</NollaLayout>;
};

PackingListPage.theme = theme;

export default PackingListPage;
