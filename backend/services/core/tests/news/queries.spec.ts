/* eslint-disable @typescript-eslint/no-unused-expressions */
import 'mocha';
import chai, { expect } from 'chai';
import spies from 'chai-spies';
import { ApolloServer, gql } from 'apollo-server';
import { ApolloServerTestClient, createTestClient } from 'apollo-server-testing';

import constructTestServer from '../util';
import {
  ArticlePagination,
  Article,
  PaginationInfo,
  Markdown,
  Token,
  Tag,
  ArticleRequestStatus,
  Author,
  Mandate,
  CustomAuthor,
} from '~/src/types/graphql';
import { DataSources } from '~/src/datasources';
import { slugify } from '~/src/shared/utils';

chai.use(spies);
const sandbox = chai.spy.sandbox();

const GET_MARKDOWNS = gql`
  query GetMarkdowns {
    markdowns {
      name
      markdown
      markdown_en
    }
  }
`;

const GET_MARKDOWN = gql`
  query GetMarkdown($name: String!) {
    markdown(name: $name) {
      name
      markdown
      markdown_en
    }
  }
`;

const GET_NEWS = gql`
query {
  news {
    articles {
      id
      header
      body
      slug
      headerEn
      bodyEn
      author {
        id
        member {
          id
        }
        mandate {
          id
          start_date
          end_date
        }
        customAuthor {
          id
          name
          nameEn
        }
        type
      }
      publishedDatetime
      createdDatetime
      status
      isLikedByMe
      likes
      comments {
      id
      }
      likers {
        id
      }
      tags {
        id
        name
        nameEn
        color
        isDefault
      }
    }
    pageInfo {
      totalPages
      totalItems
      page
      perPage
      hasNextPage
      hasPreviousPage
    }
  }
}
`;

const GET_ARTICLE = gql`
query getArticle($id: UUID!) {
  article(id: $id) {
    id
    header
    body
    slug
    headerEn
    bodyEn
    author {
      id
      member {
        id
      }
      mandate {
        id
        start_date
        end_date
      }
      customAuthor {
        id
        name
        nameEn
      }
      type
    }
    publishedDatetime
    createdDatetime
    status
    isLikedByMe
    likes
    comments {
      id
    }
    likers {
      id
    }
    tags {
      id
      name
      nameEn
      color
      isDefault
    }
  }
}
`;

const GET_TAGS = gql`
  query getTags {
    tags {
      id
      name
      nameEn
      color
      isDefault
    }
  }
`;

const GET_TOKEN = gql`
  query getToken($expo_token: String!) {
    token(expo_token: $expo_token) {
      id
      expo_token
      memberId
    }
  }
`;

const markdowns: Markdown[] = [
  {
    name: 'cafe',
    markdown: 'Här finns det information om kaféet',
    markdown_en: 'Here you can find information about the café',
  },
  {
    name: 'dsek.infu',
    markdown: 'information om oss på infU',
    markdown_en: '',
  },
  {
    name: 'dsek.aktu',
    markdown: 'information om oss på aktu',
    markdown_en: '',
  },
];

const tags: Tag[] = [
  {
    id: '101010',
    name: 'tagg1',
    nameEn: 'tag1',
    color: '#ff0000',
    isDefault: true,
  },
  {
    id: '202020',
    name: 'tagg2',
    nameEn: 'tagg2',
    color: '#ff0000',
    isDefault: false,
  },
];

const mandates: Mandate[] = [{ id: 'ffffffff-0247-4a48-a493-c0184af0fecd', start_date: new Date(), end_date: new Date() }];
const customAuthors: CustomAuthor[] = [{ id: 'cccccccc-0247-4a48-a493-c0184af0fecd', name: 'custom', nameEn: 'custom' }];
const authors: Author[] = [
  {
    id: 'aaaaaaaa-0247-4a48-a493-c0184af0fecd',
    member: { id: 'd6e39f18-0247-4a48-a493-c0184af0fecd' },
    // @ts-ignore
    customAuthor: null,
    // @ts-ignore
    mandate: null,
    type: 'Member',
  },
  {
    id: 'bbbbbbbb-0247-4a48-a493-c0184af0fecd',
    member: { id: 'd6e39f18-0247-4a48-a493-c0184af0fecd' },
    // @ts-ignore
    customAuthor: null,
    // @ts-ignore
    mandate: null,
    type: 'Member',
  },
  {
    id: 'cccccccc-0247-4a48-a493-c0184af0fecd',
    member: { id: 'd6e39f18-0247-4a48-a493-c0184af0fecd' },
    // @ts-ignore
    customAuthor: null,
    // @ts-ignore
    mandate: null,
    type: 'Member',
  },
  {
    id: 'dddddddd-0247-4a48-a493-c0184af0fecd',
    member: { id: 'd6e39f18-0247-4a48-a493-c0184af0fecd' },
    // @ts-ignore
    customAuthor: null,
    mandate: mandates[0],
    type: 'Mandate',
  },
  {
    id: 'eeeeeeee-0247-4a48-a493-c0184af0fecd',
    member: { id: 'd6e39f18-0247-4a48-a493-c0184af0fecd' },
    customAuthor: customAuthors[0],
    // @ts-ignore
    mandate: null,
    type: 'Custom',
  },
];

const articles: Article[] = [
  {
    id: '059bb6e4-2d45-4055-af77-433610a2ad00',
    header: 'H1',
    body: 'B1',
    slug: slugify('B1'),
    author: authors[0],
    publishedDatetime: new Date(),
    headerEn: 'H1_en',
    bodyEn: 'B1_en',
    likes: 0,
    isLikedByMe: false,
    tags: [tags[0]],
    comments: [],
    likers: [],
    status: ArticleRequestStatus.Approved,
    createdDatetime: new Date(),
  },
  {
    id: '059bb6e4-2d45-4055-af77-433610a2ad01',
    header: 'H2',
    body: 'B2',
    slug: slugify('B2'),
    author: authors[1],
    publishedDatetime: new Date(),
    headerEn: 'H2_en',
    bodyEn: 'B2_en',
    likes: 0,
    isLikedByMe: false,
    tags: [tags[0], tags[1]],
    comments: [],
    likers: [],
    status: ArticleRequestStatus.Approved,
    createdDatetime: new Date(),
  },
  {
    id: '059bb6e4-2d45-4055-af77-433610a2ad02',
    header: 'H3',
    body: 'B3',
    slug: slugify('B3'),
    author: authors[2],
    publishedDatetime: new Date(),
    likes: 0,
    isLikedByMe: false,
    tags: [tags[1]],
    // @ts-ignore
    bodyEn: null,
    // @ts-ignore
    headerEn: null,
    likers: [],
    comments: [],
    status: ArticleRequestStatus.Approved,
    createdDatetime: new Date(),
  },
  {
    id: '059bb6e4-2d45-4055-af77-433610a2ad03',
    header: 'H4',
    body: 'B4',
    slug: slugify('B3'),
    // @ts-ignore
    author: authors[3],
    publishedDatetime: new Date(),
    likes: 0,
    isLikedByMe: false,
    tags: [],
    // @ts-ignore
    bodyEn: null,
    // @ts-ignore
    headerEn: null,
    likers: [],
    comments: [],
    status: ArticleRequestStatus.Approved,
    createdDatetime: new Date(),
  },
  {
    id: '059bb6e4-2d45-4055-af77-433610a2ad04',
    header: 'H4',
    body: 'B4',
    slug: slugify('B3'),
    // @ts-ignore
    author: authors[4],
    publishedDatetime: new Date(),
    likes: 0,
    isLikedByMe: false,
    tags: [],
    // @ts-ignore
    bodyEn: null,
    // @ts-ignore
    headerEn: null,
    likers: [],
    comments: [],
    status: ArticleRequestStatus.Approved,
    createdDatetime: new Date(),
  },
];

const tokens: Token[] = [
  {
    id: '131313',
    expo_token: 'Token1',
    memberId: 'member1',
  },
  {
    id: '232323',
    expo_token: 'Token2',
    // @ts-ignore
    memberId: null,
  },
  {
    id: '333333',
    expo_token: 'Token3',
    // @ts-ignore
    memberId: null,
  },
];

const pageInfo: PaginationInfo = {
  totalPages: 1,
  totalItems: 4,
  page: 1,
  perPage: 4,
  hasNextPage: false,
  hasPreviousPage: false,
};

const pagination: ArticlePagination = {
  articles,
  pageInfo,
};

describe('[Queries]', () => {
  let server: ApolloServer;
  let dataSources: DataSources;
  let client: ApolloServerTestClient;

  before(() => {
    const testServer = constructTestServer();
    server = testServer.server;
    dataSources = testServer.dataSources;

    const c = createTestClient(server);
    client = c;
  });

  beforeEach(() => {
    sandbox.on(dataSources.markdownsAPI, 'getMarkdowns', () => Promise.resolve(markdowns));
    sandbox.on(dataSources.markdownsAPI, 'getMarkdown', (_, name) => Promise.resolve(markdowns.find((markdown) => markdown.name === name)));
    sandbox.on(dataSources.newsAPI, 'getArticles', () => Promise.resolve(pagination));
    sandbox.on(dataSources.newsAPI, 'getArticle', (_, __, id) => Promise.resolve(articles.find((a) => a.id === id)));
    sandbox.on(dataSources.newsAPI, 'getTags', (id) => Promise.resolve(articles.find((a) => a.id === id)?.tags));
    sandbox.on(dataSources.tagsAPI, 'getTags', () => Promise.resolve(tags));
    sandbox.on(dataSources.notificationsAPI, 'getToken', (expo_token) => Promise.resolve(tokens.find((t) => t.expo_token === expo_token)));
    sandbox.on(dataSources.memberAPI, 'getMember', (ctx, { id }) => Promise.resolve(authors.find((author) => author.member.id === id)?.member));
    sandbox.on(dataSources.mandateAPI, 'getMandate', (ctx, id) => Promise.resolve(mandates.find((mandate) => mandate.id === id)));
    sandbox.on(dataSources.authorAPI, 'getCustomAuthor', (ctx, id) => Promise.resolve(customAuthors.find((customAuthor) => customAuthor.id === id)));
    sandbox.on(dataSources.authorAPI, 'getAuthor', (ctx, id) => Promise.resolve(authors.find((author) => author.id === id)));
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('[markdowns]', () => {
    it('returns all markdowns', async () => {
      const { data, errors } = await client.query({ query: GET_MARKDOWNS });
      expect(errors, `GRAPHQL Errors: ${JSON.stringify(errors)}`).to.be.undefined;
      expect(dataSources.markdownsAPI.getMarkdowns).to.have.been.called();
      expect(data).to.deep.equal({ markdowns });
    });
  });

  describe('[markdown]', () => {
    it('returns one markdown', async () => {
      const { data, errors } = await client.query({ query: GET_MARKDOWN, variables: { name: 'cafe' } });
      expect(errors, `GRAPHQL Errors: ${JSON.stringify(errors)}`).to.be.undefined;
      expect(dataSources.markdownsAPI.getMarkdown).to.have.been.called();
      expect(data).to.deep.equal({ markdown: markdowns[0] });
    });
  });

  describe('[news]', () => {
    it('returns pagination of news', async () => {
      const variables = { page: 1, perPage: 3 };
      const { data, errors } = await client.query({ query: GET_NEWS, variables });
      expect(errors, `GRAPHQL Errors: ${JSON.stringify(errors)}`).to.be.undefined;
      expect(dataSources.newsAPI.getArticles).to.have.been.called();
      expect(data).to.deep.equal({ news: pagination });
    });
  });

  describe('[article]', () => {
    it('returns an article based on id', async () => {
      const { data, errors } = await client.query({ query: GET_ARTICLE, variables: { id: '059bb6e4-2d45-4055-af77-433610a2ad00' } });
      expect(errors, `GRAPHQL Errors: ${JSON.stringify(errors)}`).to.be.undefined;
      expect(dataSources.newsAPI.getArticle).to.have.been.called();
      expect(data).to.deep.equal({ article: articles[0] });
    });
  });

  describe('[tags]', () => {
    it('returns all tags', async () => {
      const { data, errors } = await client.query({ query: GET_TAGS });
      expect(errors, `GRAPHQL Errors: ${JSON.stringify(errors)}`).to.be.undefined;
      expect(dataSources.tagsAPI.getTags).to.have.been.called();
      expect(data).to.deep.equal({ tags });
    });
  });

  describe('[tokens]', () => {
    it('returns token given expo token', async () => {
      const promises = tokens.map(async (token) => {
        const { data, errors } = await client.query({
          query: GET_TOKEN,
          variables: { expo_token: token.expo_token },
        });
        expect(errors, `GRAPHQL Errors: ${JSON.stringify(errors)}`).to.be.undefined;
        expect(dataSources.notificationsAPI.getToken).to.have.been.called();
        expect(data).to.deep.equal({ token });
      });
      await Promise.all(promises);
    });
  });
});
