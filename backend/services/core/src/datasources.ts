import { knex } from './shared';
import MemberAPI from './datasources/Member';
import PositionAPI from './datasources/Position';
import CommitteeAPI from './datasources/Committee';
import MandateAPI from './datasources/Mandate';
import AccessAPI from './datasources/Access';
import MailAPI from './datasources/MailAPI';
import FilesApi from './datasources/Files';
import TagsAPI from './datasources/Tags';
import NewsAPI from './datasources/News';
import MarkdownsAPI from './datasources/Markdowns';
import NotificationsAPI from './datasources/Notifications';
import EventAPI from './datasources/Events';
// eslint-disable-next-line import/no-cycle
import BookingRequestAPI from './datasources/BookingRequest';
import SongAPI from './datasources/SongAPI';
import AdminAPI from './datasources/AdminAPI';
import WebshopAPI from './datasources/WebshopAPI';
import GoverningDocumentsAPI from './datasources/GoverningDocumentsAPI';
import AuthorAPI from './datasources/Author';

export interface DataSources {
  memberAPI: MemberAPI,
  positionAPI: PositionAPI,
  committeeAPI: CommitteeAPI,
  mandateAPI: MandateAPI,
  accessAPI: AccessAPI,
  mailAPI: MailAPI,
  filesAPI: FilesApi,
  newsAPI: NewsAPI,
  authorAPI: AuthorAPI,
  markdownsAPI: MarkdownsAPI,
  notificationsAPI: NotificationsAPI,
  tagsAPI: TagsAPI,
  eventAPI: EventAPI
  bookingRequestAPI: BookingRequestAPI,
  songAPI: SongAPI,
  adminAPI: AdminAPI,
  webshopAPI: WebshopAPI,
  governingDocumentsAPI: GoverningDocumentsAPI,
}

const dataSources: () => DataSources = () => ({
  memberAPI: new MemberAPI(knex),
  positionAPI: new PositionAPI(knex),
  committeeAPI: new CommitteeAPI(knex),
  mandateAPI: new MandateAPI(knex),
  accessAPI: new AccessAPI(knex),
  mailAPI: new MailAPI(knex),
  filesAPI: new FilesApi(knex),
  newsAPI: new NewsAPI(knex),
  authorAPI: new AuthorAPI(knex),
  markdownsAPI: new MarkdownsAPI(knex),
  notificationsAPI: new NotificationsAPI(knex),
  tagsAPI: new TagsAPI(knex),
  eventAPI: new EventAPI(knex),
  bookingRequestAPI: new BookingRequestAPI(knex),
  songAPI: new SongAPI(knex),
  adminAPI: new AdminAPI(knex),
  webshopAPI: new WebshopAPI(knex),
  governingDocumentsAPI: new GoverningDocumentsAPI(knex),
});

export default dataSources;
