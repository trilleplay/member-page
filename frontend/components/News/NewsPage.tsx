import AddIcon from '@mui/icons-material/Add';
import
{
  Badge,
  Button,
  Pagination,
  Stack,
} from '@mui/material';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { useState } from 'react';
import TagSelector from '~/components/ArticleEditor/TagSelector';
import ArticleSet from '~/components/News/articleSet';
import PageHeader from '~/components/PageHeader';
import { useArticleRequestsQuery, useNewsPageQuery } from '~/generated/graphql';
import { hasAccess, useApiAccess } from '~/providers/ApiAccessProvider';
import routes from '~/routes';
import ArticleSearchInput from './ArticleSearchInput';

export const articlesPerPage = 10;

export default function NewsPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { t } = useTranslation('common');
  const currentPage = parseInt(router.query.page as string, 10) || 1;
  const currentTags = router.query.tags ? (router.query.tags as string).split(',') : [];
  const { data } = useNewsPageQuery({
    variables: { page_number: currentPage, per_page: articlesPerPage, tagIds: currentTags },
  });
  const { data: requests } = useArticleRequestsQuery({

  });
  const apiContext = useApiAccess();

  const totalPages = data?.news?.pageInfo?.totalPages || 1;

  return (
    <Stack gap={{ xs: 1, sm: 2 }}>
      <Stack
        direction="row"
        columnGap={2}
        rowGap={1}
        alignItems="baseline"
        sx={{ flexWrap: 'wrap' }}
      >
        <PageHeader noMargin>{t('news')}</PageHeader>
        <Stack
          direction="row"
          gap={1}
          sx={{
            maxWidth: 'calc(100% + 4rem)',
            overflowX: 'auto',
            mt: -2,
            pt: 2,
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            mx: -2,
            px: 2,
            '& *': {
              whiteSpace: 'nowrap',
              flexShrink: 0,
            },
          }}
        >
          {hasAccess(apiContext, 'news:article:create') && (
          <Button
            onClick={() => router.push(routes.createArticle)}
            variant="outlined"
          >
            {t('news:new_article')}
            <AddIcon style={{ marginLeft: '0.25rem' }} />
          </Button>
          )}
          {(hasAccess(apiContext, 'news:article:manage') || requests?.articleRequests?.length > 0) && (
          <Badge
            badgeContent={(requests?.articleRequests?.length ?? 0) === 0
              ? undefined
              : requests?.articleRequests?.length}
            color="primary"
          >
            <Button
              onClick={() => router.push(routes.articleRequests)}
              variant="outlined"
            >
              {t('news:requests')}
            </Button>
          </Badge>
          )}
          {hasAccess(apiContext, 'tags:update') && hasAccess(apiContext, 'tags:create') && (
          <Button
            onClick={() => router.push(routes.tags)}
            variant="outlined"
          >
            {t('news:tags')}
          </Button>
          )}
        </Stack>
      </Stack>
      <ArticleSearchInput onSelect={(slug, id) => router.push(routes.article(slug || id))} />
      <TagSelector
        currentlySelected={currentTags}
        onChange={(newTags) => {
          setLoading(true);
          router.push(`?tags=${newTags}`);
        }}
      />
      <ArticleSet
        articlesPerPage={articlesPerPage}
        pageIndex={currentPage}
        tagIds={currentTags}
        loading={loading}
        setLoading={setLoading}
      />
      <Pagination
        page={currentPage}
        count={totalPages}
        onChange={(_, page) => {
          setLoading(true);
          router.push(`?page=${page}&tags=${currentTags}`);
        }}
      />
    </Stack>
  );
}
