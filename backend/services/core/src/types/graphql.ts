import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: any; output: any; }
  Datetime: { input: any; output: any; }
  UUID: { input: string; output: string; }
  Url: { input: any; output: any; }
  _FieldSet: { input: any; output: any; }
};

export type AccessMutations = {
  __typename?: 'AccessMutations';
  door?: Maybe<DoorMutations>;
  policy?: Maybe<PolicyMutations>;
};

export type AccessPolicy = {
  __typename?: 'AccessPolicy';
  accessor: Scalars['String']['output'];
  end_datetime?: Maybe<Scalars['Date']['output']>;
  id: Scalars['UUID']['output'];
  start_datetime?: Maybe<Scalars['Date']['output']>;
};

export type AdminMutations = {
  __typename?: 'AdminMutations';
  createSetting?: Maybe<AdminSetting>;
  deleteSetting?: Maybe<AdminSetting>;
  seed?: Maybe<Scalars['Boolean']['output']>;
  setStabHiddenPeriod?: Maybe<Array<Maybe<AdminSetting>>>;
  syncMandatesWithKeycloak?: Maybe<Scalars['Boolean']['output']>;
  updateSearchIndex?: Maybe<Scalars['Boolean']['output']>;
  updateSetting?: Maybe<AdminSetting>;
};


export type AdminMutationsCreateSettingArgs = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};


export type AdminMutationsDeleteSettingArgs = {
  key: Scalars['String']['input'];
};


export type AdminMutationsSetStabHiddenPeriodArgs = {
  end: Scalars['Date']['input'];
  start: Scalars['Date']['input'];
};


export type AdminMutationsUpdateSettingArgs = {
  key: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export type AdminSetting = {
  __typename?: 'AdminSetting';
  key: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type Alert = {
  __typename?: 'Alert';
  id: Scalars['UUID']['output'];
  message: Scalars['String']['output'];
  messageEn: Scalars['String']['output'];
  severity: AlertColor;
};

export enum AlertColor {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning'
}

export type AlertMutations = {
  __typename?: 'AlertMutations';
  create?: Maybe<Alert>;
  remove?: Maybe<Alert>;
};


export type AlertMutationsCreateArgs = {
  message: Scalars['String']['input'];
  messageEn: Scalars['String']['input'];
  severity: AlertColor;
};


export type AlertMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};

export type Api = {
  __typename?: 'Api';
  accessPolicies?: Maybe<Array<AccessPolicy>>;
  name: Scalars['String']['output'];
};

export type Article = {
  __typename?: 'Article';
  author: Author;
  body: Scalars['String']['output'];
  bodyEn?: Maybe<Scalars['String']['output']>;
  comments: Array<Maybe<Comment>>;
  createdDatetime: Scalars['Datetime']['output'];
  handledBy?: Maybe<Member>;
  header: Scalars['String']['output'];
  headerEn?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  imageUrl?: Maybe<Scalars['Url']['output']>;
  isLikedByMe: Scalars['Boolean']['output'];
  latestEditDatetime?: Maybe<Scalars['Datetime']['output']>;
  likers: Array<Maybe<Member>>;
  likes: Scalars['Int']['output'];
  publishedDatetime?: Maybe<Scalars['Datetime']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status: ArticleRequestStatus;
  tags: Array<Tag>;
};

export type ArticleMutations = {
  __typename?: 'ArticleMutations';
  comment?: Maybe<ArticlePayload>;
  create?: Maybe<CreateArticlePayload>;
  getUploadData?: Maybe<UploadData>;
  like?: Maybe<ArticlePayload>;
  remove?: Maybe<ArticlePayload>;
  removeComment?: Maybe<ArticlePayload>;
  unlike?: Maybe<ArticlePayload>;
  update?: Maybe<UpdateArticlePayload>;
};


export type ArticleMutationsCommentArgs = {
  content: Scalars['String']['input'];
  id: Scalars['UUID']['input'];
};


export type ArticleMutationsCreateArgs = {
  input: CreateArticle;
};


export type ArticleMutationsGetUploadDataArgs = {
  fileName: Scalars['String']['input'];
  header: Scalars['String']['input'];
};


export type ArticleMutationsLikeArgs = {
  id: Scalars['UUID']['input'];
};


export type ArticleMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};


export type ArticleMutationsRemoveCommentArgs = {
  commentId: Scalars['UUID']['input'];
};


export type ArticleMutationsUnlikeArgs = {
  id: Scalars['UUID']['input'];
};


export type ArticleMutationsUpdateArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateArticle;
};

export type ArticlePagination = {
  __typename?: 'ArticlePagination';
  articles: Array<Maybe<Article>>;
  pageInfo: PaginationInfo;
};

export type ArticlePayload = {
  __typename?: 'ArticlePayload';
  article: Article;
};

export type ArticleRequest = {
  __typename?: 'ArticleRequest';
  author: Author;
  body: Scalars['String']['output'];
  bodyEn?: Maybe<Scalars['String']['output']>;
  createdDatetime: Scalars['Datetime']['output'];
  handledBy?: Maybe<Member>;
  header: Scalars['String']['output'];
  headerEn?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  imageUrl?: Maybe<Scalars['Url']['output']>;
  latestEditDatetime?: Maybe<Scalars['Datetime']['output']>;
  publishedDatetime?: Maybe<Scalars['Datetime']['output']>;
  rejectedDatetime?: Maybe<Scalars['Datetime']['output']>;
  rejectionReason?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status: ArticleRequestStatus;
  tags: Array<Tag>;
};

export type ArticleRequestPagination = {
  __typename?: 'ArticleRequestPagination';
  articles: Array<Maybe<ArticleRequest>>;
  pageInfo: PaginationInfo;
};

export enum ArticleRequestStatus {
  Approved = 'approved',
  Draft = 'draft',
  Rejected = 'rejected'
}

export type Author = {
  __typename?: 'Author';
  customAuthor?: Maybe<CustomAuthor>;
  id: Scalars['UUID']['output'];
  mandate?: Maybe<Mandate>;
  member: Member;
  type: Scalars['String']['output'];
};

export type Bookable = {
  __typename?: 'Bookable';
  category?: Maybe<BookableCategory>;
  door?: Maybe<Door>;
  id: Scalars['UUID']['output'];
  isDisabled: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  name_en: Scalars['String']['output'];
};

export type BookableCategory = {
  __typename?: 'BookableCategory';
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
  name_en: Scalars['String']['output'];
};

export type BookableMutations = {
  __typename?: 'BookableMutations';
  create?: Maybe<Bookable>;
  update?: Maybe<Bookable>;
};


export type BookableMutationsCreateArgs = {
  input: CreateBookable;
};


export type BookableMutationsUpdateArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateBookable;
};

export type BookingFilter = {
  from?: InputMaybe<Scalars['Datetime']['input']>;
  status?: InputMaybe<BookingStatus>;
  to?: InputMaybe<Scalars['Datetime']['input']>;
  what?: InputMaybe<Scalars['String']['input']>;
};

export type BookingRequest = {
  __typename?: 'BookingRequest';
  booker: Member;
  created: Scalars['Datetime']['output'];
  end: Scalars['Datetime']['output'];
  event: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  last_modified?: Maybe<Scalars['Datetime']['output']>;
  start: Scalars['Datetime']['output'];
  status: BookingStatus;
  what: Array<Bookable>;
};

export type BookingRequestMutations = {
  __typename?: 'BookingRequestMutations';
  accept?: Maybe<Scalars['Boolean']['output']>;
  create?: Maybe<BookingRequest>;
  deny?: Maybe<Scalars['Boolean']['output']>;
  remove?: Maybe<BookingRequest>;
  update?: Maybe<BookingRequest>;
};


export type BookingRequestMutationsAcceptArgs = {
  acceptWithAccess?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['UUID']['input'];
};


export type BookingRequestMutationsCreateArgs = {
  input: CreateBookingRequest;
};


export type BookingRequestMutationsDenyArgs = {
  id: Scalars['UUID']['input'];
};


export type BookingRequestMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};


export type BookingRequestMutationsUpdateArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateBookingRequest;
};

export enum BookingStatus {
  Accepted = 'ACCEPTED',
  Denied = 'DENIED',
  Pending = 'PENDING'
}

export type Cart = {
  __typename?: 'Cart';
  cartItems: Array<Maybe<CartItem>>;
  expiresAt: Scalars['Date']['output'];
  id: Scalars['UUID']['output'];
  totalPrice: Scalars['Float']['output'];
  totalQuantity: Scalars['Int']['output'];
};

export type CartInventory = {
  __typename?: 'CartInventory';
  discount?: Maybe<Discount>;
  id: Scalars['UUID']['output'];
  inventoryId: Scalars['UUID']['output'];
  quantity: Scalars['Int']['output'];
  variant?: Maybe<Scalars['String']['output']>;
};

export type CartItem = {
  __typename?: 'CartItem';
  category?: Maybe<ProductCategory>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  imageUrl: Scalars['String']['output'];
  inventory: Array<Maybe<CartInventory>>;
  maxPerUser: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  member: Member;
  published: Scalars['Datetime']['output'];
};

export type Committee = {
  __typename?: 'Committee';
  id: Scalars['UUID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  name_en?: Maybe<Scalars['String']['output']>;
  shortName: Scalars['String']['output'];
};

export type CommitteeFilter = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  short_name?: InputMaybe<Scalars['String']['input']>;
};

export type CommitteeMutations = {
  __typename?: 'CommitteeMutations';
  create?: Maybe<Committee>;
  remove?: Maybe<Committee>;
  update?: Maybe<Committee>;
};


export type CommitteeMutationsCreateArgs = {
  input: CreateCommittee;
};


export type CommitteeMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};


export type CommitteeMutationsUpdateArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateCommittee;
};

export type CommitteePagination = {
  __typename?: 'CommitteePagination';
  committees: Array<Maybe<Committee>>;
  pageInfo: PaginationInfo;
};

export type CreateApiAccessPolicy = {
  apiName: Scalars['String']['input'];
  who: Scalars['String']['input'];
};

export type CreateArticle = {
  author?: InputMaybe<CreateAuthor>;
  body: Scalars['String']['input'];
  bodyEn?: InputMaybe<Scalars['String']['input']>;
  header: Scalars['String']['input'];
  headerEn?: InputMaybe<Scalars['String']['input']>;
  imageName?: InputMaybe<Scalars['String']['input']>;
  notificationBody?: InputMaybe<Scalars['String']['input']>;
  notificationBodyEn?: InputMaybe<Scalars['String']['input']>;
  sendNotification?: InputMaybe<Scalars['Boolean']['input']>;
  tagIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type CreateArticlePayload = {
  __typename?: 'CreateArticlePayload';
  article: Article;
  uploadUrl?: Maybe<Scalars['Url']['output']>;
};

export type CreateAuthor = {
  customAuthorId?: InputMaybe<Scalars['UUID']['input']>;
  mandateId?: InputMaybe<Scalars['UUID']['input']>;
};

export type CreateBookable = {
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  door?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  name_en?: InputMaybe<Scalars['String']['input']>;
};

export type CreateBookingRequest = {
  booker_id: Scalars['UUID']['input'];
  end: Scalars['Datetime']['input'];
  event: Scalars['String']['input'];
  start: Scalars['Datetime']['input'];
  what: Array<Scalars['String']['input']>;
};

export type CreateCommittee = {
  name: Scalars['String']['input'];
  name_en: Scalars['String']['input'];
  short_name: Scalars['String']['input'];
};

export type CreateDoor = {
  id?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateDoorAccessPolicy = {
  doorName: Scalars['String']['input'];
  endDatetime?: InputMaybe<Scalars['Date']['input']>;
  startDatetime?: InputMaybe<Scalars['Date']['input']>;
  who: Scalars['String']['input'];
};

export type CreateEvent = {
  alarm_active?: InputMaybe<Scalars['Boolean']['input']>;
  description: Scalars['String']['input'];
  description_en?: InputMaybe<Scalars['String']['input']>;
  end_datetime: Scalars['Datetime']['input'];
  link?: InputMaybe<Scalars['String']['input']>;
  location: Scalars['String']['input'];
  organizer: Scalars['String']['input'];
  short_description: Scalars['String']['input'];
  short_description_en?: InputMaybe<Scalars['String']['input']>;
  start_datetime: Scalars['Datetime']['input'];
  tagIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
  title: Scalars['String']['input'];
  title_en?: InputMaybe<Scalars['String']['input']>;
};

export type CreateGoverningDocument = {
  title: Scalars['String']['input'];
  type: GoverningDocumentType;
  url: Scalars['String']['input'];
};

export type CreateInventoryInput = {
  discountId?: InputMaybe<Scalars['UUID']['input']>;
  productId: Scalars['UUID']['input'];
  quantity: Scalars['Int']['input'];
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type CreateMailAlias = {
  email: Scalars['String']['input'];
  position_id: Scalars['String']['input'];
};

export type CreateMandate = {
  end_date: Scalars['Date']['input'];
  member_id: Scalars['UUID']['input'];
  position_id: Scalars['String']['input'];
  start_date: Scalars['Date']['input'];
};

export type CreateMarkdown = {
  markdown?: InputMaybe<Scalars['String']['input']>;
  markdown_en?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
};

export type CreateMember = {
  class_programme: Scalars['String']['input'];
  class_year: Scalars['Int']['input'];
  first_name: Scalars['String']['input'];
  food_preference?: InputMaybe<Scalars['String']['input']>;
  last_name: Scalars['String']['input'];
  nickname?: InputMaybe<Scalars['String']['input']>;
  picture_path?: InputMaybe<Scalars['String']['input']>;
  student_id: Scalars['String']['input'];
};

export type CreatePosition = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  boardMember?: InputMaybe<Scalars['Boolean']['input']>;
  committee_id?: InputMaybe<Scalars['UUID']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  name: Scalars['String']['input'];
};

export type CreateProductInput = {
  categoryId: Scalars['UUID']['input'];
  description: Scalars['String']['input'];
  imageUrl: Scalars['String']['input'];
  maxPerUser: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  price: Scalars['Float']['input'];
  releaseDate: Scalars['Date']['input'];
};

export type CreateSpecialReceiver = {
  alias: Scalars['String']['input'];
  targetEmail: Scalars['String']['input'];
};

export type CreateSpecialSender = {
  alias: Scalars['String']['input'];
  keycloakId: Scalars['String']['input'];
  studentId: Scalars['String']['input'];
};

export type CreateTag = {
  color?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name: Scalars['String']['input'];
  nameEn?: InputMaybe<Scalars['String']['input']>;
};

export type CustomAuthor = {
  __typename?: 'CustomAuthor';
  id: Scalars['UUID']['output'];
  imageUrl?: Maybe<Scalars['Url']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
};

export type Discount = {
  __typename?: 'Discount';
  description: Scalars['String']['output'];
  discountPercentage: Scalars['Float']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type Door = {
  __typename?: 'Door';
  accessPolicies?: Maybe<Array<AccessPolicy>>;
  id?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  /** returns all stundet ids that have active policies for this door. */
  studentIds?: Maybe<Array<Scalars['String']['output']>>;
};

export type DoorMutations = {
  __typename?: 'DoorMutations';
  create?: Maybe<Door>;
  remove?: Maybe<Door>;
};


export type DoorMutationsCreateArgs = {
  input: CreateDoor;
};


export type DoorMutationsRemoveArgs = {
  name: Scalars['String']['input'];
};

export type EmailUser = {
  __typename?: 'EmailUser';
  email?: Maybe<Scalars['String']['output']>;
  keycloakId?: Maybe<Scalars['String']['output']>;
  studentId?: Maybe<Scalars['String']['output']>;
};

export type Event = {
  __typename?: 'Event';
  alarm_active?: Maybe<Scalars['Boolean']['output']>;
  author: Member;
  comments: Array<Maybe<Comment>>;
  description: Scalars['String']['output'];
  description_en?: Maybe<Scalars['String']['output']>;
  end_datetime: Scalars['Datetime']['output'];
  iAmGoing: Scalars['Boolean']['output'];
  iAmInterested: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  link?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  number_of_updates: Scalars['Int']['output'];
  organizer: Scalars['String']['output'];
  peopleGoing: Array<Maybe<Member>>;
  peopleInterested: Array<Maybe<Member>>;
  short_description: Scalars['String']['output'];
  short_description_en?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  start_datetime: Scalars['Datetime']['output'];
  tags: Array<Tag>;
  title: Scalars['String']['output'];
  title_en?: Maybe<Scalars['String']['output']>;
};

export type EventFilter = {
  end_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  nollning?: InputMaybe<Scalars['Boolean']['input']>;
  start_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type EventMutations = {
  __typename?: 'EventMutations';
  comment?: Maybe<Event>;
  create?: Maybe<Event>;
  remove?: Maybe<Event>;
  removeComment?: Maybe<Event>;
  setGoing?: Maybe<Event>;
  setInterested?: Maybe<Event>;
  unsetGoing?: Maybe<Event>;
  unsetInterested?: Maybe<Event>;
  update?: Maybe<Event>;
};


export type EventMutationsCommentArgs = {
  content: Scalars['String']['input'];
  id: Scalars['UUID']['input'];
};


export type EventMutationsCreateArgs = {
  input: CreateEvent;
};


export type EventMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};


export type EventMutationsRemoveCommentArgs = {
  commentId: Scalars['UUID']['input'];
};


export type EventMutationsSetGoingArgs = {
  id: Scalars['UUID']['input'];
};


export type EventMutationsSetInterestedArgs = {
  id: Scalars['UUID']['input'];
};


export type EventMutationsUnsetGoingArgs = {
  id: Scalars['UUID']['input'];
};


export type EventMutationsUnsetInterestedArgs = {
  id: Scalars['UUID']['input'];
};


export type EventMutationsUpdateArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateEvent;
};

export type EventPagination = {
  __typename?: 'EventPagination';
  events: Array<Maybe<Event>>;
  pageInfo?: Maybe<PaginationInfo>;
};

export type FileData = {
  __typename?: 'FileData';
  childrenCount?: Maybe<Scalars['Int']['output']>;
  color?: Maybe<Scalars['String']['output']>;
  dndOpenable?: Maybe<Scalars['Boolean']['output']>;
  draggable?: Maybe<Scalars['Boolean']['output']>;
  droppable?: Maybe<Scalars['Boolean']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  icon?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  isDir?: Maybe<Scalars['Boolean']['output']>;
  isEncrypted?: Maybe<Scalars['Boolean']['output']>;
  isHidden?: Maybe<Scalars['Boolean']['output']>;
  isSymlink?: Maybe<Scalars['Boolean']['output']>;
  modDate?: Maybe<Scalars['Date']['output']>;
  name: Scalars['String']['output'];
  openable?: Maybe<Scalars['Boolean']['output']>;
  selectable?: Maybe<Scalars['Boolean']['output']>;
  size?: Maybe<Scalars['Int']['output']>;
  thumbnailUrl?: Maybe<Scalars['String']['output']>;
};

export type FileMutations = {
  __typename?: 'FileMutations';
  move?: Maybe<Array<Maybe<FileChange>>>;
  remove?: Maybe<Array<Maybe<FileData>>>;
  removeMyProfilePicture?: Maybe<Array<Maybe<FileData>>>;
  rename?: Maybe<FileChange>;
};


export type FileMutationsMoveArgs = {
  bucket: Scalars['String']['input'];
  fileNames: Array<Scalars['String']['input']>;
  newFolder: Scalars['String']['input'];
};


export type FileMutationsRemoveArgs = {
  bucket: Scalars['String']['input'];
  fileNames: Array<Scalars['String']['input']>;
};


export type FileMutationsRemoveMyProfilePictureArgs = {
  fileName: Scalars['String']['input'];
};


export type FileMutationsRenameArgs = {
  bucket: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
  newFileName: Scalars['String']['input'];
};

export type GoverningDocument = {
  __typename?: 'GoverningDocument';
  id: Scalars['UUID']['output'];
  title: Scalars['String']['output'];
  type: GoverningDocumentType;
  url: Scalars['String']['output'];
};

export type GoverningDocumentMutations = {
  __typename?: 'GoverningDocumentMutations';
  create?: Maybe<GoverningDocument>;
  delete?: Maybe<Scalars['Boolean']['output']>;
  update?: Maybe<GoverningDocument>;
};


export type GoverningDocumentMutationsCreateArgs = {
  input: CreateGoverningDocument;
};


export type GoverningDocumentMutationsDeleteArgs = {
  id: Scalars['UUID']['input'];
};


export type GoverningDocumentMutationsUpdateArgs = {
  input: UpdateGoverningDocument;
};

export enum GoverningDocumentType {
  Guideline = 'GUIDELINE',
  Policy = 'POLICY'
}

export type MailAlias = {
  __typename?: 'MailAlias';
  email: Scalars['String']['output'];
  policies: Array<Maybe<MailAliasPolicy>>;
};

export type MailAliasMutations = {
  __typename?: 'MailAliasMutations';
  create?: Maybe<MailAlias>;
  remove?: Maybe<MailAlias>;
  updateSenderStatus?: Maybe<Scalars['Boolean']['output']>;
};


export type MailAliasMutationsCreateArgs = {
  input: CreateMailAlias;
};


export type MailAliasMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};


export type MailAliasMutationsUpdateSenderStatusArgs = {
  input: Array<MailAliasStatus>;
};

export type MailAliasPolicy = {
  __typename?: 'MailAliasPolicy';
  canSend: Scalars['Boolean']['output'];
  id: Scalars['UUID']['output'];
  position: Position;
};

export type MailAliasStatus = {
  canSend: Scalars['Boolean']['input'];
  id: Scalars['UUID']['input'];
};

export type MailRecipient = {
  __typename?: 'MailRecipient';
  alias: Scalars['String']['output'];
  emailUsers: Array<EmailUser>;
};

export type Mandate = {
  __typename?: 'Mandate';
  end_date?: Maybe<Scalars['Date']['output']>;
  id: Scalars['UUID']['output'];
  member?: Maybe<Member>;
  position?: Maybe<Position>;
  start_date?: Maybe<Scalars['Date']['output']>;
};

export type MandateFilter = {
  end_date?: InputMaybe<Scalars['Date']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  member_id?: InputMaybe<Scalars['UUID']['input']>;
  onlyActive?: InputMaybe<Scalars['Boolean']['input']>;
  position_id?: InputMaybe<Scalars['String']['input']>;
  position_ids?: InputMaybe<Array<Scalars['String']['input']>>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
};

export type MandateMutations = {
  __typename?: 'MandateMutations';
  create?: Maybe<Mandate>;
  remove?: Maybe<Mandate>;
  update?: Maybe<Mandate>;
};


export type MandateMutationsCreateArgs = {
  input: CreateMandate;
};


export type MandateMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};


export type MandateMutationsUpdateArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateMandate;
};

export type MandatePagination = {
  __typename?: 'MandatePagination';
  mandates: Array<Mandate>;
  pageInfo: PaginationInfo;
};

export type Markdown = {
  __typename?: 'Markdown';
  markdown: Scalars['String']['output'];
  markdown_en?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
};

export type MarkdownMutations = {
  __typename?: 'MarkdownMutations';
  create?: Maybe<Markdown>;
  update?: Maybe<Markdown>;
};


export type MarkdownMutationsCreateArgs = {
  input: CreateMarkdown;
};


export type MarkdownMutationsUpdateArgs = {
  input: UpdateMarkdown;
  name: Scalars['String']['input'];
};

export type MarkdownPayload = {
  __typename?: 'MarkdownPayload';
  markdown: Markdown;
};

export type Member = {
  __typename?: 'Member';
  canPing?: Maybe<Scalars['Boolean']['output']>;
  class_programme?: Maybe<Scalars['String']['output']>;
  class_year?: Maybe<Scalars['Int']['output']>;
  customAuthorOptions?: Maybe<Array<CustomAuthor>>;
  first_name?: Maybe<Scalars['String']['output']>;
  food_preference?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  last_name?: Maybe<Scalars['String']['output']>;
  mandates?: Maybe<Array<Mandate>>;
  nickname?: Maybe<Scalars['String']['output']>;
  picture_path?: Maybe<Scalars['String']['output']>;
  student_id?: Maybe<Scalars['String']['output']>;
};


export type MemberMandatesArgs = {
  onlyActive?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MemberByProduct = {
  __typename?: 'MemberByProduct';
  member: Member;
  userInventoryItem: UserInventoryItem;
};

export type MemberFilter = {
  class_programme?: InputMaybe<Scalars['String']['input']>;
  class_year?: InputMaybe<Scalars['Int']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['UUID']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  student_id?: InputMaybe<Scalars['String']['input']>;
};

export type MemberMutations = {
  __typename?: 'MemberMutations';
  create?: Maybe<Member>;
  ping?: Maybe<Scalars['Boolean']['output']>;
  remove?: Maybe<Member>;
  update?: Maybe<Member>;
  updateFoodPreference?: Maybe<Member>;
};


export type MemberMutationsCreateArgs = {
  input: CreateMember;
};


export type MemberMutationsPingArgs = {
  id: Scalars['UUID']['input'];
};


export type MemberMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};


export type MemberMutationsUpdateArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateMember;
};


export type MemberMutationsUpdateFoodPreferenceArgs = {
  foodPreference: Scalars['String']['input'];
  id: Scalars['UUID']['input'];
};

export type MemberPagination = {
  __typename?: 'MemberPagination';
  members: Array<Member>;
  pageInfo: PaginationInfo;
};

export type Mutation = {
  __typename?: 'Mutation';
  access?: Maybe<AccessMutations>;
  admin?: Maybe<AdminMutations>;
  alert?: Maybe<AlertMutations>;
  alias?: Maybe<MailAliasMutations>;
  article?: Maybe<ArticleMutations>;
  bookable?: Maybe<BookableMutations>;
  bookingRequest?: Maybe<BookingRequestMutations>;
  committee?: Maybe<CommitteeMutations>;
  deleteNotification: Array<Notification>;
  deleteNotifications: Array<Notification>;
  event?: Maybe<EventMutations>;
  files?: Maybe<FileMutations>;
  governingDocument?: Maybe<GoverningDocumentMutations>;
  mandate?: Maybe<MandateMutations>;
  markAsRead: Array<Notification>;
  markdown?: Maybe<MarkdownMutations>;
  member?: Maybe<MemberMutations>;
  position?: Maybe<PositionMutations>;
  requests?: Maybe<RequestMutations>;
  specialReceiver?: Maybe<SpecialReceiverMutations>;
  specialSender?: Maybe<SpecialSenderMutations>;
  subscriptionSettings: SubscriptionSettingsMutations;
  tagSubscriptions: TagSubscriptionsMutations;
  tags?: Maybe<TagMutations>;
  token: TokenMutations;
  webshop?: Maybe<WebshopMutations>;
};


export type MutationDeleteNotificationArgs = {
  id: Scalars['UUID']['input'];
};


export type MutationDeleteNotificationsArgs = {
  ids: Array<Scalars['UUID']['input']>;
};


export type MutationMarkAsReadArgs = {
  ids: Array<Scalars['UUID']['input']>;
};

export type Notification = {
  __typename?: 'Notification';
  authors: Array<Author>;
  createdAt: Scalars['Date']['output'];
  groupedIds?: Maybe<Array<Scalars['UUID']['output']>>;
  id: Scalars['ID']['output'];
  link: Scalars['String']['output'];
  message: Scalars['String']['output'];
  readAt?: Maybe<Scalars['Date']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export type Order = {
  __typename?: 'Order';
  createdAt: Scalars['Date']['output'];
  id: Scalars['UUID']['output'];
  payment?: Maybe<Payment>;
  products?: Maybe<Array<Maybe<Product>>>;
  total: Scalars['Float']['output'];
  updatedAt: Scalars['Date']['output'];
  user: Member;
};

export type PaginationInfo = {
  __typename?: 'PaginationInfo';
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  page: Scalars['Int']['output'];
  perPage: Scalars['Int']['output'];
  totalItems: Scalars['Int']['output'];
  totalPages: Scalars['Int']['output'];
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float']['output'];
  createdAt: Scalars['Date']['output'];
  currency: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  paymentMethod: Scalars['String']['output'];
  paymentStatus: Scalars['String']['output'];
  updatedAt: Scalars['Date']['output'];
};

export enum PaymentStatus {
  Cancelled = 'CANCELLED',
  Declined = 'DECLINED',
  Error = 'ERROR',
  Paid = 'PAID',
  Pending = 'PENDING'
}

export type Ping = {
  __typename?: 'Ping';
  counter: Scalars['Int']['output'];
  from: Member;
  lastPing: Scalars['Date']['output'];
};

export type PolicyMutations = {
  __typename?: 'PolicyMutations';
  createApiAccessPolicy?: Maybe<AccessPolicy>;
  createDoorAccessPolicy?: Maybe<AccessPolicy>;
  remove?: Maybe<AccessPolicy>;
};


export type PolicyMutationsCreateApiAccessPolicyArgs = {
  input: CreateApiAccessPolicy;
};


export type PolicyMutationsCreateDoorAccessPolicyArgs = {
  input: CreateDoorAccessPolicy;
};


export type PolicyMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};

export type Position = {
  __typename?: 'Position';
  active?: Maybe<Scalars['Boolean']['output']>;
  activeMandates?: Maybe<Array<Maybe<Mandate>>>;
  boardMember?: Maybe<Scalars['Boolean']['output']>;
  committee?: Maybe<Committee>;
  description?: Maybe<Scalars['String']['output']>;
  descriptionEn?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  emailAliases?: Maybe<Array<Scalars['String']['output']>>;
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  nameEn?: Maybe<Scalars['String']['output']>;
};

export type PositionFilter = {
  active?: InputMaybe<Scalars['Boolean']['input']>;
  committee_id?: InputMaybe<Scalars['UUID']['input']>;
  committee_short_name?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  year?: InputMaybe<Scalars['Int']['input']>;
};

export type PositionMutations = {
  __typename?: 'PositionMutations';
  create?: Maybe<Position>;
  remove?: Maybe<Position>;
  update?: Maybe<Position>;
};


export type PositionMutationsCreateArgs = {
  input: CreatePosition;
};


export type PositionMutationsRemoveArgs = {
  id: Scalars['String']['input'];
};


export type PositionMutationsUpdateArgs = {
  id: Scalars['String']['input'];
  input: UpdatePosition;
};

export type PositionPagination = {
  __typename?: 'PositionPagination';
  pageInfo: PaginationInfo;
  positions: Array<Position>;
};

export type Product = {
  __typename?: 'Product';
  category?: Maybe<ProductCategory>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  imageUrl: Scalars['String']['output'];
  inventory: Array<Maybe<ProductInventory>>;
  maxPerUser: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  releaseDate: Scalars['Date']['output'];
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  name: Scalars['String']['output'];
};

export type ProductInventory = {
  __typename?: 'ProductInventory';
  discount?: Maybe<Discount>;
  id: Scalars['UUID']['output'];
  quantity: Scalars['Int']['output'];
  variant?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adminSettings: Array<AdminSetting>;
  alarmShouldBeActive: Scalars['Boolean']['output'];
  alerts: Array<Alert>;
  alias?: Maybe<MailAlias>;
  aliases?: Maybe<Array<Maybe<MailAlias>>>;
  allEmails: Array<Scalars['String']['output']>;
  api?: Maybe<Api>;
  /** returns all apis the signed in member has access to. */
  apiAccess?: Maybe<Array<Api>>;
  apis?: Maybe<Array<Api>>;
  article?: Maybe<Article>;
  articleRequest?: Maybe<ArticleRequest>;
  articleRequests: Array<Maybe<ArticleRequest>>;
  bookables?: Maybe<Array<Bookable>>;
  bookingRequest?: Maybe<BookingRequest>;
  bookingRequests?: Maybe<Array<BookingRequest>>;
  chest?: Maybe<UserInventory>;
  committees?: Maybe<CommitteePagination>;
  door?: Maybe<Door>;
  doors?: Maybe<Array<Door>>;
  event?: Maybe<Event>;
  events?: Maybe<EventPagination>;
  files?: Maybe<Array<FileData>>;
  getMembersByProduct?: Maybe<Array<Maybe<MemberByProduct>>>;
  getSubscriptionTypes: Array<SubscriptionType>;
  governingDocument?: Maybe<GoverningDocument>;
  governingDocuments: Array<GoverningDocument>;
  guidelines: Array<GoverningDocument>;
  mandatePagination?: Maybe<MandatePagination>;
  markdown?: Maybe<Markdown>;
  markdowns: Array<Maybe<Markdown>>;
  me?: Maybe<Member>;
  member?: Maybe<Member>;
  memberById?: Maybe<Member>;
  members?: Maybe<MemberPagination>;
  myCart?: Maybe<Cart>;
  myNotifications: Array<Notification>;
  mySubscriptionSettings: Array<SubscriptionSetting>;
  myTagSubscriptions: Array<Tag>;
  news?: Maybe<ArticlePagination>;
  payment?: Maybe<Payment>;
  pings: Array<Ping>;
  policies: Array<GoverningDocument>;
  positions?: Maybe<PositionPagination>;
  presignedPutUrl?: Maybe<Scalars['String']['output']>;
  product?: Maybe<Product>;
  productCategories: Array<Maybe<ProductCategory>>;
  products: Array<Maybe<Product>>;
  rejectedRequests?: Maybe<ArticleRequestPagination>;
  resolveRecipients: Array<Maybe<MailRecipient>>;
  resolveSenders: Array<Maybe<MailRecipient>>;
  songById?: Maybe<Song>;
  songByTitle?: Maybe<Song>;
  songs?: Maybe<Array<Maybe<Song>>>;
  specialReceivers: Array<Maybe<SpecialReceiver>>;
  specialSenders: Array<Maybe<SpecialSender>>;
  tag?: Maybe<Tag>;
  tags: Array<Tag>;
  token?: Maybe<Token>;
};


export type QueryAliasArgs = {
  email: Scalars['String']['input'];
};


export type QueryApiArgs = {
  name: Scalars['String']['input'];
};


export type QueryArticleArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArticleRequestArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryArticleRequestsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryBookablesArgs = {
  includeDisabled?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryBookingRequestArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryBookingRequestsArgs = {
  filter?: InputMaybe<BookingFilter>;
};


export type QueryChestArgs = {
  studentId: Scalars['String']['input'];
};


export type QueryCommitteesArgs = {
  filter?: InputMaybe<CommitteeFilter>;
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
};


export type QueryDoorArgs = {
  name: Scalars['String']['input'];
};


export type QueryEventArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};


export type QueryEventsArgs = {
  filter?: InputMaybe<EventFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryFilesArgs = {
  bucket: Scalars['String']['input'];
  prefix: Scalars['String']['input'];
  recursive?: InputMaybe<Scalars['Boolean']['input']>;
};


export type QueryGetMembersByProductArgs = {
  productId: Scalars['UUID']['input'];
};


export type QueryGoverningDocumentArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryMandatePaginationArgs = {
  filter?: InputMaybe<MandateFilter>;
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
};


export type QueryMarkdownArgs = {
  name: Scalars['String']['input'];
};


export type QueryMemberArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>;
  student_id?: InputMaybe<Scalars['String']['input']>;
};


export type QueryMemberByIdArgs = {
  id?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryMembersArgs = {
  filter?: InputMaybe<MemberFilter>;
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
};


export type QueryNewsArgs = {
  nollning?: InputMaybe<Scalars['Boolean']['input']>;
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
  tagIds?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryPaymentArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryPositionsArgs = {
  filter?: InputMaybe<PositionFilter>;
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
};


export type QueryPresignedPutUrlArgs = {
  bucket: Scalars['String']['input'];
  fileName: Scalars['String']['input'];
};


export type QueryProductArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryProductsArgs = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
};


export type QueryRejectedRequestsArgs = {
  page?: Scalars['Int']['input'];
  perPage?: Scalars['Int']['input'];
};


export type QuerySongByIdArgs = {
  id: Scalars['UUID']['input'];
};


export type QuerySongByTitleArgs = {
  title: Scalars['String']['input'];
};


export type QuerySpecialReceiversArgs = {
  alias: Scalars['String']['input'];
};


export type QuerySpecialSendersArgs = {
  alias: Scalars['String']['input'];
};


export type QueryTagArgs = {
  id: Scalars['UUID']['input'];
};


export type QueryTokenArgs = {
  expo_token: Scalars['String']['input'];
};

export type RequestMutations = {
  __typename?: 'RequestMutations';
  approve?: Maybe<ArticleRequest>;
  reject?: Maybe<ArticleRequest>;
  undoRejection?: Maybe<ArticleRequest>;
};


export type RequestMutationsApproveArgs = {
  id: Scalars['UUID']['input'];
};


export type RequestMutationsRejectArgs = {
  id: Scalars['UUID']['input'];
  reason?: InputMaybe<Scalars['String']['input']>;
};


export type RequestMutationsUndoRejectionArgs = {
  id: Scalars['UUID']['input'];
};

export type Song = {
  __typename?: 'Song';
  category: Scalars['String']['output'];
  created_at: Scalars['Date']['output'];
  id: Scalars['UUID']['output'];
  lyrics: Scalars['String']['output'];
  melody: Scalars['String']['output'];
  title: Scalars['String']['output'];
  updated_at?: Maybe<Scalars['Date']['output']>;
};

export type SpecialReceiver = {
  __typename?: 'SpecialReceiver';
  id: Scalars['UUID']['output'];
  targetEmail: Scalars['String']['output'];
};

export type SpecialReceiverMutations = {
  __typename?: 'SpecialReceiverMutations';
  create?: Maybe<SpecialReceiver>;
  remove?: Maybe<SpecialReceiver>;
};


export type SpecialReceiverMutationsCreateArgs = {
  input: CreateSpecialReceiver;
};


export type SpecialReceiverMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};

export type SpecialSender = {
  __typename?: 'SpecialSender';
  id: Scalars['UUID']['output'];
  keycloakId: Scalars['String']['output'];
  studentId: Scalars['String']['output'];
};

export type SpecialSenderMutations = {
  __typename?: 'SpecialSenderMutations';
  create?: Maybe<SpecialSender>;
  remove?: Maybe<SpecialSender>;
};


export type SpecialSenderMutationsCreateArgs = {
  input: CreateSpecialSender;
};


export type SpecialSenderMutationsRemoveArgs = {
  id: Scalars['UUID']['input'];
};

export type SubscriptionSetting = {
  __typename?: 'SubscriptionSetting';
  id: Scalars['UUID']['output'];
  pushNotification: Scalars['Boolean']['output'];
  type: SubscriptionType;
};

export type SubscriptionSettingsMutations = {
  __typename?: 'SubscriptionSettingsMutations';
  update?: Maybe<SubscriptionSetting>;
};


export type SubscriptionSettingsMutationsUpdateArgs = {
  enabled: Scalars['Boolean']['input'];
  pushNotification?: InputMaybe<Scalars['Boolean']['input']>;
  type: Scalars['String']['input'];
};

export type SubscriptionType = {
  __typename?: 'SubscriptionType';
  description: Scalars['String']['output'];
  descriptionEn?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  titleEn?: Maybe<Scalars['String']['output']>;
  type: Scalars['String']['output'];
};

export type Tag = {
  __typename?: 'Tag';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['UUID']['output'];
  isDefault: Scalars['Boolean']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
};

export type TagMutations = {
  __typename?: 'TagMutations';
  create?: Maybe<Tag>;
  update?: Maybe<Tag>;
};


export type TagMutationsCreateArgs = {
  input: CreateTag;
};


export type TagMutationsUpdateArgs = {
  id: Scalars['UUID']['input'];
  input: UpdateTag;
};

export type TagSubscriptionsMutations = {
  __typename?: 'TagSubscriptionsMutations';
  subscribe?: Maybe<Array<Scalars['UUID']['output']>>;
  unsubscribe?: Maybe<Scalars['Int']['output']>;
};


export type TagSubscriptionsMutationsSubscribeArgs = {
  tagIds: Array<Scalars['UUID']['input']>;
};


export type TagSubscriptionsMutationsUnsubscribeArgs = {
  tagIds: Array<Scalars['UUID']['input']>;
};

export type Token = {
  __typename?: 'Token';
  expo_token: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  memberId?: Maybe<Scalars['UUID']['output']>;
};

export type TokenMutations = {
  __typename?: 'TokenMutations';
  register?: Maybe<Token>;
};


export type TokenMutationsRegisterArgs = {
  expo_token: Scalars['String']['input'];
};

export type UpdateArticle = {
  author?: InputMaybe<CreateAuthor>;
  body?: InputMaybe<Scalars['String']['input']>;
  bodyEn?: InputMaybe<Scalars['String']['input']>;
  header?: InputMaybe<Scalars['String']['input']>;
  headerEn?: InputMaybe<Scalars['String']['input']>;
  imageName?: InputMaybe<Scalars['String']['input']>;
  tagIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
};

export type UpdateArticlePayload = {
  __typename?: 'UpdateArticlePayload';
  article: Article;
  uploadUrl?: Maybe<Scalars['Url']['output']>;
};

export type UpdateBookable = {
  category_id?: InputMaybe<Scalars['UUID']['input']>;
  door?: InputMaybe<Scalars['String']['input']>;
  isDisabled?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_en?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateBookingRequest = {
  end?: InputMaybe<Scalars['Datetime']['input']>;
  event?: InputMaybe<Scalars['String']['input']>;
  start?: InputMaybe<Scalars['Datetime']['input']>;
  what?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UpdateBookingRequestStatus = {
  status?: InputMaybe<BookingStatus>;
};

export type UpdateCommittee = {
  name?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateEvent = {
  alarm_active?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  description_en?: InputMaybe<Scalars['String']['input']>;
  end_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  link?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  organizer?: InputMaybe<Scalars['String']['input']>;
  short_description?: InputMaybe<Scalars['String']['input']>;
  short_description_en?: InputMaybe<Scalars['String']['input']>;
  start_datetime?: InputMaybe<Scalars['Datetime']['input']>;
  tagIds?: InputMaybe<Array<Scalars['UUID']['input']>>;
  title?: InputMaybe<Scalars['String']['input']>;
  title_en?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateGoverningDocument = {
  id: Scalars['UUID']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<GoverningDocumentType>;
  url?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateInventoryInput = {
  discountId?: InputMaybe<Scalars['UUID']['input']>;
  inventoryId: Scalars['UUID']['input'];
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMandate = {
  end_date?: InputMaybe<Scalars['Date']['input']>;
  member_id?: InputMaybe<Scalars['UUID']['input']>;
  position_id?: InputMaybe<Scalars['String']['input']>;
  start_date?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateMarkdown = {
  markdown?: InputMaybe<Scalars['String']['input']>;
  markdown_en?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateMember = {
  class_programme?: InputMaybe<Scalars['String']['input']>;
  class_year?: InputMaybe<Scalars['Int']['input']>;
  first_name?: InputMaybe<Scalars['String']['input']>;
  food_preference?: InputMaybe<Scalars['String']['input']>;
  last_name?: InputMaybe<Scalars['String']['input']>;
  nickname?: InputMaybe<Scalars['String']['input']>;
  picture_path?: InputMaybe<Scalars['String']['input']>;
};

export type UpdatePosition = {
  committee_id?: InputMaybe<Scalars['UUID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  descriptionEn?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateProductInput = {
  categoryId?: InputMaybe<Scalars['UUID']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  imageUrl?: InputMaybe<Scalars['String']['input']>;
  maxPerUser?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  productId: Scalars['UUID']['input'];
  releaseDate?: InputMaybe<Scalars['Date']['input']>;
};

export type UpdateTag = {
  color?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  nameEn?: InputMaybe<Scalars['String']['input']>;
};

export type UploadData = {
  __typename?: 'UploadData';
  fileUrl: Scalars['String']['output'];
  uploadUrl: Scalars['String']['output'];
};

export type UserInventory = {
  __typename?: 'UserInventory';
  id: Scalars['UUID']['output'];
  items: Array<Maybe<UserInventoryItem>>;
};

export type UserInventoryItem = {
  __typename?: 'UserInventoryItem';
  category?: Maybe<ProductCategory>;
  consumedAt?: Maybe<Scalars['Date']['output']>;
  description: Scalars['String']['output'];
  id: Scalars['UUID']['output'];
  imageUrl: Scalars['String']['output'];
  name: Scalars['String']['output'];
  paidAt: Scalars['Date']['output'];
  paidPrice: Scalars['Float']['output'];
  productId?: Maybe<Scalars['UUID']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
};

export type WebshopMutations = {
  __typename?: 'WebshopMutations';
  addInventory?: Maybe<Product>;
  addToMyCart?: Maybe<Cart>;
  consumeItem?: Maybe<UserInventory>;
  createProduct?: Maybe<Product>;
  decrementQuantity?: Maybe<Product>;
  deleteInventory?: Maybe<Scalars['Boolean']['output']>;
  deleteProduct?: Maybe<Scalars['Boolean']['output']>;
  freeCheckout?: Maybe<Payment>;
  incrementQuantity?: Maybe<Product>;
  initiatePayment?: Maybe<Payment>;
  removeFromMyCart?: Maybe<Cart>;
  removeMyCart?: Maybe<Scalars['Boolean']['output']>;
  updateInventory?: Maybe<Product>;
  updatePaymentStatus?: Maybe<Payment>;
  updateProduct?: Maybe<Product>;
};


export type WebshopMutationsAddInventoryArgs = {
  input: CreateInventoryInput;
};


export type WebshopMutationsAddToMyCartArgs = {
  inventoryId: Scalars['UUID']['input'];
  quantity: Scalars['Int']['input'];
};


export type WebshopMutationsConsumeItemArgs = {
  itemId: Scalars['UUID']['input'];
};


export type WebshopMutationsCreateProductArgs = {
  input: CreateProductInput;
};


export type WebshopMutationsDecrementQuantityArgs = {
  inventoryId: Scalars['UUID']['input'];
  quantity: Scalars['Int']['input'];
};


export type WebshopMutationsDeleteInventoryArgs = {
  inventoryId: Scalars['UUID']['input'];
};


export type WebshopMutationsDeleteProductArgs = {
  productId: Scalars['UUID']['input'];
};


export type WebshopMutationsIncrementQuantityArgs = {
  inventoryId: Scalars['UUID']['input'];
  quantity: Scalars['Int']['input'];
};


export type WebshopMutationsInitiatePaymentArgs = {
  phoneNumber: Scalars['String']['input'];
};


export type WebshopMutationsRemoveFromMyCartArgs = {
  inventoryId: Scalars['UUID']['input'];
  quantity: Scalars['Int']['input'];
};


export type WebshopMutationsUpdateInventoryArgs = {
  input: UpdateInventoryInput;
};


export type WebshopMutationsUpdatePaymentStatusArgs = {
  paymentId: Scalars['String']['input'];
  status: PaymentStatus;
};


export type WebshopMutationsUpdateProductArgs = {
  input: UpdateProductInput;
};

export type FileChange = {
  __typename?: 'fileChange';
  file: FileData;
  oldFile?: Maybe<FileData>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ReferenceResolver<TResult, TReference, TContext> = (
      reference: TReference,
      context: TContext,
      info: GraphQLResolveInfo
    ) => Promise<TResult> | TResult;

      type ScalarCheck<T, S> = S extends true ? T : NullableCheck<T, S>;
      type NullableCheck<T, S> = Maybe<T> extends T ? Maybe<ListCheck<NonNullable<T>, S>> : ListCheck<T, S>;
      type ListCheck<T, S> = T extends (infer U)[] ? NullableCheck<U, S>[] : GraphQLRecursivePick<T, S>;
      export type GraphQLRecursivePick<T, S> = { [K in keyof T & keyof S]: ScalarCheck<T[K], S[K]> };
    

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  AccessMutations: ResolverTypeWrapper<AccessMutations>;
  AccessPolicy: ResolverTypeWrapper<AccessPolicy>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  AdminMutations: ResolverTypeWrapper<AdminMutations>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  AdminSetting: ResolverTypeWrapper<AdminSetting>;
  Alert: ResolverTypeWrapper<Alert>;
  AlertColor: AlertColor;
  AlertMutations: ResolverTypeWrapper<AlertMutations>;
  Api: ResolverTypeWrapper<Api>;
  Article: ResolverTypeWrapper<Article>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  ArticleMutations: ResolverTypeWrapper<ArticleMutations>;
  ArticlePagination: ResolverTypeWrapper<ArticlePagination>;
  ArticlePayload: ResolverTypeWrapper<ArticlePayload>;
  ArticleRequest: ResolverTypeWrapper<ArticleRequest>;
  ArticleRequestPagination: ResolverTypeWrapper<ArticleRequestPagination>;
  ArticleRequestStatus: ArticleRequestStatus;
  Author: ResolverTypeWrapper<Author>;
  Bookable: ResolverTypeWrapper<Bookable>;
  BookableCategory: ResolverTypeWrapper<BookableCategory>;
  BookableMutations: ResolverTypeWrapper<BookableMutations>;
  BookingFilter: BookingFilter;
  BookingRequest: ResolverTypeWrapper<BookingRequest>;
  BookingRequestMutations: ResolverTypeWrapper<BookingRequestMutations>;
  BookingStatus: BookingStatus;
  Cart: ResolverTypeWrapper<Cart>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  CartInventory: ResolverTypeWrapper<CartInventory>;
  CartItem: ResolverTypeWrapper<CartItem>;
  Comment: ResolverTypeWrapper<Comment>;
  Committee: ResolverTypeWrapper<Committee>;
  CommitteeFilter: CommitteeFilter;
  CommitteeMutations: ResolverTypeWrapper<CommitteeMutations>;
  CommitteePagination: ResolverTypeWrapper<CommitteePagination>;
  CreateApiAccessPolicy: CreateApiAccessPolicy;
  CreateArticle: CreateArticle;
  CreateArticlePayload: ResolverTypeWrapper<CreateArticlePayload>;
  CreateAuthor: CreateAuthor;
  CreateBookable: CreateBookable;
  CreateBookingRequest: CreateBookingRequest;
  CreateCommittee: CreateCommittee;
  CreateDoor: CreateDoor;
  CreateDoorAccessPolicy: CreateDoorAccessPolicy;
  CreateEvent: CreateEvent;
  CreateGoverningDocument: CreateGoverningDocument;
  CreateInventoryInput: CreateInventoryInput;
  CreateMailAlias: CreateMailAlias;
  CreateMandate: CreateMandate;
  CreateMarkdown: CreateMarkdown;
  CreateMember: CreateMember;
  CreatePosition: CreatePosition;
  CreateProductInput: CreateProductInput;
  CreateSpecialReceiver: CreateSpecialReceiver;
  CreateSpecialSender: CreateSpecialSender;
  CreateTag: CreateTag;
  CustomAuthor: ResolverTypeWrapper<CustomAuthor>;
  Date: ResolverTypeWrapper<Scalars['Date']['output']>;
  Datetime: ResolverTypeWrapper<Scalars['Datetime']['output']>;
  Discount: ResolverTypeWrapper<Discount>;
  Door: ResolverTypeWrapper<Door>;
  DoorMutations: ResolverTypeWrapper<DoorMutations>;
  EmailUser: ResolverTypeWrapper<EmailUser>;
  Event: ResolverTypeWrapper<Event>;
  EventFilter: EventFilter;
  EventMutations: ResolverTypeWrapper<EventMutations>;
  EventPagination: ResolverTypeWrapper<EventPagination>;
  FileData: ResolverTypeWrapper<FileData>;
  FileMutations: ResolverTypeWrapper<FileMutations>;
  GoverningDocument: ResolverTypeWrapper<GoverningDocument>;
  GoverningDocumentMutations: ResolverTypeWrapper<GoverningDocumentMutations>;
  GoverningDocumentType: GoverningDocumentType;
  MailAlias: ResolverTypeWrapper<MailAlias>;
  MailAliasMutations: ResolverTypeWrapper<MailAliasMutations>;
  MailAliasPolicy: ResolverTypeWrapper<MailAliasPolicy>;
  MailAliasStatus: MailAliasStatus;
  MailRecipient: ResolverTypeWrapper<MailRecipient>;
  Mandate: ResolverTypeWrapper<Mandate>;
  MandateFilter: MandateFilter;
  MandateMutations: ResolverTypeWrapper<MandateMutations>;
  MandatePagination: ResolverTypeWrapper<MandatePagination>;
  Markdown: ResolverTypeWrapper<Markdown>;
  MarkdownMutations: ResolverTypeWrapper<MarkdownMutations>;
  MarkdownPayload: ResolverTypeWrapper<MarkdownPayload>;
  Member: ResolverTypeWrapper<Member>;
  MemberByProduct: ResolverTypeWrapper<MemberByProduct>;
  MemberFilter: MemberFilter;
  MemberMutations: ResolverTypeWrapper<MemberMutations>;
  MemberPagination: ResolverTypeWrapper<MemberPagination>;
  Mutation: ResolverTypeWrapper<{}>;
  Notification: ResolverTypeWrapper<Notification>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Order: ResolverTypeWrapper<Order>;
  PaginationInfo: ResolverTypeWrapper<PaginationInfo>;
  Payment: ResolverTypeWrapper<Payment>;
  PaymentStatus: PaymentStatus;
  Ping: ResolverTypeWrapper<Ping>;
  PolicyMutations: ResolverTypeWrapper<PolicyMutations>;
  Position: ResolverTypeWrapper<Position>;
  PositionFilter: PositionFilter;
  PositionMutations: ResolverTypeWrapper<PositionMutations>;
  PositionPagination: ResolverTypeWrapper<PositionPagination>;
  Product: ResolverTypeWrapper<Product>;
  ProductCategory: ResolverTypeWrapper<ProductCategory>;
  ProductInventory: ResolverTypeWrapper<ProductInventory>;
  Query: ResolverTypeWrapper<{}>;
  RequestMutations: ResolverTypeWrapper<RequestMutations>;
  Song: ResolverTypeWrapper<Song>;
  SpecialReceiver: ResolverTypeWrapper<SpecialReceiver>;
  SpecialReceiverMutations: ResolverTypeWrapper<SpecialReceiverMutations>;
  SpecialSender: ResolverTypeWrapper<SpecialSender>;
  SpecialSenderMutations: ResolverTypeWrapper<SpecialSenderMutations>;
  SubscriptionSetting: ResolverTypeWrapper<SubscriptionSetting>;
  SubscriptionSettingsMutations: ResolverTypeWrapper<SubscriptionSettingsMutations>;
  SubscriptionType: ResolverTypeWrapper<SubscriptionType>;
  Tag: ResolverTypeWrapper<Tag>;
  TagMutations: ResolverTypeWrapper<TagMutations>;
  TagSubscriptionsMutations: ResolverTypeWrapper<TagSubscriptionsMutations>;
  Token: ResolverTypeWrapper<Token>;
  TokenMutations: ResolverTypeWrapper<TokenMutations>;
  UUID: ResolverTypeWrapper<Scalars['UUID']['output']>;
  UpdateArticle: UpdateArticle;
  UpdateArticlePayload: ResolverTypeWrapper<UpdateArticlePayload>;
  UpdateBookable: UpdateBookable;
  UpdateBookingRequest: UpdateBookingRequest;
  UpdateBookingRequestStatus: UpdateBookingRequestStatus;
  UpdateCommittee: UpdateCommittee;
  UpdateEvent: UpdateEvent;
  UpdateGoverningDocument: UpdateGoverningDocument;
  UpdateInventoryInput: UpdateInventoryInput;
  UpdateMandate: UpdateMandate;
  UpdateMarkdown: UpdateMarkdown;
  UpdateMember: UpdateMember;
  UpdatePosition: UpdatePosition;
  UpdateProductInput: UpdateProductInput;
  UpdateTag: UpdateTag;
  UploadData: ResolverTypeWrapper<UploadData>;
  Url: ResolverTypeWrapper<Scalars['Url']['output']>;
  UserInventory: ResolverTypeWrapper<UserInventory>;
  UserInventoryItem: ResolverTypeWrapper<UserInventoryItem>;
  WebshopMutations: ResolverTypeWrapper<WebshopMutations>;
  fileChange: ResolverTypeWrapper<FileChange>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  AccessMutations: AccessMutations;
  AccessPolicy: AccessPolicy;
  String: Scalars['String']['output'];
  AdminMutations: AdminMutations;
  Boolean: Scalars['Boolean']['output'];
  AdminSetting: AdminSetting;
  Alert: Alert;
  AlertMutations: AlertMutations;
  Api: Api;
  Article: Article;
  Int: Scalars['Int']['output'];
  ArticleMutations: ArticleMutations;
  ArticlePagination: ArticlePagination;
  ArticlePayload: ArticlePayload;
  ArticleRequest: ArticleRequest;
  ArticleRequestPagination: ArticleRequestPagination;
  Author: Author;
  Bookable: Bookable;
  BookableCategory: BookableCategory;
  BookableMutations: BookableMutations;
  BookingFilter: BookingFilter;
  BookingRequest: BookingRequest;
  BookingRequestMutations: BookingRequestMutations;
  Cart: Cart;
  Float: Scalars['Float']['output'];
  CartInventory: CartInventory;
  CartItem: CartItem;
  Comment: Comment;
  Committee: Committee;
  CommitteeFilter: CommitteeFilter;
  CommitteeMutations: CommitteeMutations;
  CommitteePagination: CommitteePagination;
  CreateApiAccessPolicy: CreateApiAccessPolicy;
  CreateArticle: CreateArticle;
  CreateArticlePayload: CreateArticlePayload;
  CreateAuthor: CreateAuthor;
  CreateBookable: CreateBookable;
  CreateBookingRequest: CreateBookingRequest;
  CreateCommittee: CreateCommittee;
  CreateDoor: CreateDoor;
  CreateDoorAccessPolicy: CreateDoorAccessPolicy;
  CreateEvent: CreateEvent;
  CreateGoverningDocument: CreateGoverningDocument;
  CreateInventoryInput: CreateInventoryInput;
  CreateMailAlias: CreateMailAlias;
  CreateMandate: CreateMandate;
  CreateMarkdown: CreateMarkdown;
  CreateMember: CreateMember;
  CreatePosition: CreatePosition;
  CreateProductInput: CreateProductInput;
  CreateSpecialReceiver: CreateSpecialReceiver;
  CreateSpecialSender: CreateSpecialSender;
  CreateTag: CreateTag;
  CustomAuthor: CustomAuthor;
  Date: Scalars['Date']['output'];
  Datetime: Scalars['Datetime']['output'];
  Discount: Discount;
  Door: Door;
  DoorMutations: DoorMutations;
  EmailUser: EmailUser;
  Event: Event;
  EventFilter: EventFilter;
  EventMutations: EventMutations;
  EventPagination: EventPagination;
  FileData: FileData;
  FileMutations: FileMutations;
  GoverningDocument: GoverningDocument;
  GoverningDocumentMutations: GoverningDocumentMutations;
  MailAlias: MailAlias;
  MailAliasMutations: MailAliasMutations;
  MailAliasPolicy: MailAliasPolicy;
  MailAliasStatus: MailAliasStatus;
  MailRecipient: MailRecipient;
  Mandate: Mandate;
  MandateFilter: MandateFilter;
  MandateMutations: MandateMutations;
  MandatePagination: MandatePagination;
  Markdown: Markdown;
  MarkdownMutations: MarkdownMutations;
  MarkdownPayload: MarkdownPayload;
  Member: Member;
  MemberByProduct: MemberByProduct;
  MemberFilter: MemberFilter;
  MemberMutations: MemberMutations;
  MemberPagination: MemberPagination;
  Mutation: {};
  Notification: Notification;
  ID: Scalars['ID']['output'];
  Order: Order;
  PaginationInfo: PaginationInfo;
  Payment: Payment;
  Ping: Ping;
  PolicyMutations: PolicyMutations;
  Position: Position;
  PositionFilter: PositionFilter;
  PositionMutations: PositionMutations;
  PositionPagination: PositionPagination;
  Product: Product;
  ProductCategory: ProductCategory;
  ProductInventory: ProductInventory;
  Query: {};
  RequestMutations: RequestMutations;
  Song: Song;
  SpecialReceiver: SpecialReceiver;
  SpecialReceiverMutations: SpecialReceiverMutations;
  SpecialSender: SpecialSender;
  SpecialSenderMutations: SpecialSenderMutations;
  SubscriptionSetting: SubscriptionSetting;
  SubscriptionSettingsMutations: SubscriptionSettingsMutations;
  SubscriptionType: SubscriptionType;
  Tag: Tag;
  TagMutations: TagMutations;
  TagSubscriptionsMutations: TagSubscriptionsMutations;
  Token: Token;
  TokenMutations: TokenMutations;
  UUID: Scalars['UUID']['output'];
  UpdateArticle: UpdateArticle;
  UpdateArticlePayload: UpdateArticlePayload;
  UpdateBookable: UpdateBookable;
  UpdateBookingRequest: UpdateBookingRequest;
  UpdateBookingRequestStatus: UpdateBookingRequestStatus;
  UpdateCommittee: UpdateCommittee;
  UpdateEvent: UpdateEvent;
  UpdateGoverningDocument: UpdateGoverningDocument;
  UpdateInventoryInput: UpdateInventoryInput;
  UpdateMandate: UpdateMandate;
  UpdateMarkdown: UpdateMarkdown;
  UpdateMember: UpdateMember;
  UpdatePosition: UpdatePosition;
  UpdateProductInput: UpdateProductInput;
  UpdateTag: UpdateTag;
  UploadData: UploadData;
  Url: Scalars['Url']['output'];
  UserInventory: UserInventory;
  UserInventoryItem: UserInventoryItem;
  WebshopMutations: WebshopMutations;
  fileChange: FileChange;
}>;

export type AccessMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessMutations'] = ResolversParentTypes['AccessMutations']> = ResolversObject<{
  door?: Resolver<Maybe<ResolversTypes['DoorMutations']>, ParentType, ContextType>;
  policy?: Resolver<Maybe<ResolversTypes['PolicyMutations']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AccessPolicyResolvers<ContextType = any, ParentType extends ResolversParentTypes['AccessPolicy'] = ResolversParentTypes['AccessPolicy']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['AccessPolicy']>, { __typename: 'AccessPolicy' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  accessor?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  end_datetime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  start_datetime?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdminMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminMutations'] = ResolversParentTypes['AdminMutations']> = ResolversObject<{
  createSetting?: Resolver<Maybe<ResolversTypes['AdminSetting']>, ParentType, ContextType, RequireFields<AdminMutationsCreateSettingArgs, 'key' | 'value'>>;
  deleteSetting?: Resolver<Maybe<ResolversTypes['AdminSetting']>, ParentType, ContextType, RequireFields<AdminMutationsDeleteSettingArgs, 'key'>>;
  seed?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  setStabHiddenPeriod?: Resolver<Maybe<Array<Maybe<ResolversTypes['AdminSetting']>>>, ParentType, ContextType, RequireFields<AdminMutationsSetStabHiddenPeriodArgs, 'end' | 'start'>>;
  syncMandatesWithKeycloak?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updateSearchIndex?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updateSetting?: Resolver<Maybe<ResolversTypes['AdminSetting']>, ParentType, ContextType, RequireFields<AdminMutationsUpdateSettingArgs, 'key' | 'value'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AdminSettingResolvers<ContextType = any, ParentType extends ResolversParentTypes['AdminSetting'] = ResolversParentTypes['AdminSetting']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['AdminSetting']>, { __typename: 'AdminSetting' } & GraphQLRecursivePick<ParentType, {"key":true}>, ContextType>;
  key?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlertResolvers<ContextType = any, ParentType extends ResolversParentTypes['Alert'] = ResolversParentTypes['Alert']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Alert']>, { __typename: 'Alert' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  messageEn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  severity?: Resolver<ResolversTypes['AlertColor'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AlertMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['AlertMutations'] = ResolversParentTypes['AlertMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Alert']>, ParentType, ContextType, RequireFields<AlertMutationsCreateArgs, 'message' | 'messageEn' | 'severity'>>;
  remove?: Resolver<Maybe<ResolversTypes['Alert']>, ParentType, ContextType, RequireFields<AlertMutationsRemoveArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ApiResolvers<ContextType = any, ParentType extends ResolversParentTypes['Api'] = ResolversParentTypes['Api']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Api']>, { __typename: 'Api' } & GraphQLRecursivePick<ParentType, {"name":true}>, ContextType>;
  accessPolicies?: Resolver<Maybe<Array<ResolversTypes['AccessPolicy']>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleResolvers<ContextType = any, ParentType extends ResolversParentTypes['Article'] = ResolversParentTypes['Article']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Article']>, { __typename: 'Article' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bodyEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  comments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  createdDatetime?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  handledBy?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  headerEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['Url']>, ParentType, ContextType>;
  isLikedByMe?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  latestEditDatetime?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  likers?: Resolver<Array<Maybe<ResolversTypes['Member']>>, ParentType, ContextType>;
  likes?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  publishedDatetime?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ArticleRequestStatus'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleMutations'] = ResolversParentTypes['ArticleMutations']> = ResolversObject<{
  comment?: Resolver<Maybe<ResolversTypes['ArticlePayload']>, ParentType, ContextType, RequireFields<ArticleMutationsCommentArgs, 'content' | 'id'>>;
  create?: Resolver<Maybe<ResolversTypes['CreateArticlePayload']>, ParentType, ContextType, RequireFields<ArticleMutationsCreateArgs, 'input'>>;
  getUploadData?: Resolver<Maybe<ResolversTypes['UploadData']>, ParentType, ContextType, RequireFields<ArticleMutationsGetUploadDataArgs, 'fileName' | 'header'>>;
  like?: Resolver<Maybe<ResolversTypes['ArticlePayload']>, ParentType, ContextType, RequireFields<ArticleMutationsLikeArgs, 'id'>>;
  remove?: Resolver<Maybe<ResolversTypes['ArticlePayload']>, ParentType, ContextType, RequireFields<ArticleMutationsRemoveArgs, 'id'>>;
  removeComment?: Resolver<Maybe<ResolversTypes['ArticlePayload']>, ParentType, ContextType, RequireFields<ArticleMutationsRemoveCommentArgs, 'commentId'>>;
  unlike?: Resolver<Maybe<ResolversTypes['ArticlePayload']>, ParentType, ContextType, RequireFields<ArticleMutationsUnlikeArgs, 'id'>>;
  update?: Resolver<Maybe<ResolversTypes['UpdateArticlePayload']>, ParentType, ContextType, RequireFields<ArticleMutationsUpdateArgs, 'id' | 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticlePaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticlePagination'] = ResolversParentTypes['ArticlePagination']> = ResolversObject<{
  articles?: Resolver<Array<Maybe<ResolversTypes['Article']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginationInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticlePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticlePayload'] = ResolversParentTypes['ArticlePayload']> = ResolversObject<{
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleRequest'] = ResolversParentTypes['ArticleRequest']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['ArticleRequest']>, { __typename: 'ArticleRequest' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  author?: Resolver<ResolversTypes['Author'], ParentType, ContextType>;
  body?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  bodyEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdDatetime?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  handledBy?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  header?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  headerEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['Url']>, ParentType, ContextType>;
  latestEditDatetime?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  publishedDatetime?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  rejectedDatetime?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  rejectionReason?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['ArticleRequestStatus'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ArticleRequestPaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['ArticleRequestPagination'] = ResolversParentTypes['ArticleRequestPagination']> = ResolversObject<{
  articles?: Resolver<Array<Maybe<ResolversTypes['ArticleRequest']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginationInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type AuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Author'] = ResolversParentTypes['Author']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Author']>, { __typename: 'Author' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  customAuthor?: Resolver<Maybe<ResolversTypes['CustomAuthor']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  mandate?: Resolver<Maybe<ResolversTypes['Mandate']>, ParentType, ContextType>;
  member?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookableResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bookable'] = ResolversParentTypes['Bookable']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Bookable']>, { __typename: 'Bookable' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['BookableCategory']>, ParentType, ContextType>;
  door?: Resolver<Maybe<ResolversTypes['Door']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  isDisabled?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookableCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookableCategory'] = ResolversParentTypes['BookableCategory']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['BookableCategory']>, { __typename: 'BookableCategory' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name_en?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookableMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookableMutations'] = ResolversParentTypes['BookableMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Bookable']>, ParentType, ContextType, RequireFields<BookableMutationsCreateArgs, 'input'>>;
  update?: Resolver<Maybe<ResolversTypes['Bookable']>, ParentType, ContextType, RequireFields<BookableMutationsUpdateArgs, 'id' | 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingRequestResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookingRequest'] = ResolversParentTypes['BookingRequest']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['BookingRequest']>, { __typename: 'BookingRequest' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  booker?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  created?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  end?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  event?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  last_modified?: Resolver<Maybe<ResolversTypes['Datetime']>, ParentType, ContextType>;
  start?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['BookingStatus'], ParentType, ContextType>;
  what?: Resolver<Array<ResolversTypes['Bookable']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type BookingRequestMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['BookingRequestMutations'] = ResolversParentTypes['BookingRequestMutations']> = ResolversObject<{
  accept?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<BookingRequestMutationsAcceptArgs, 'id'>>;
  create?: Resolver<Maybe<ResolversTypes['BookingRequest']>, ParentType, ContextType, RequireFields<BookingRequestMutationsCreateArgs, 'input'>>;
  deny?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<BookingRequestMutationsDenyArgs, 'id'>>;
  remove?: Resolver<Maybe<ResolversTypes['BookingRequest']>, ParentType, ContextType, RequireFields<BookingRequestMutationsRemoveArgs, 'id'>>;
  update?: Resolver<Maybe<ResolversTypes['BookingRequest']>, ParentType, ContextType, RequireFields<BookingRequestMutationsUpdateArgs, 'id' | 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartResolvers<ContextType = any, ParentType extends ResolversParentTypes['Cart'] = ResolversParentTypes['Cart']> = ResolversObject<{
  cartItems?: Resolver<Array<Maybe<ResolversTypes['CartItem']>>, ParentType, ContextType>;
  expiresAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  totalPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  totalQuantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartInventoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartInventory'] = ResolversParentTypes['CartInventory']> = ResolversObject<{
  discount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  inventoryId?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CartItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['CartItem'] = ResolversParentTypes['CartItem']> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inventory?: Resolver<Array<Maybe<ResolversTypes['CartInventory']>>, ParentType, ContextType>;
  maxPerUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Comment'] = ResolversParentTypes['Comment']> = ResolversObject<{
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  member?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  published?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommitteeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Committee'] = ResolversParentTypes['Committee']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Committee']>, { __typename: 'Committee' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  shortName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommitteeMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteeMutations'] = ResolversParentTypes['CommitteeMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Committee']>, ParentType, ContextType, RequireFields<CommitteeMutationsCreateArgs, 'input'>>;
  remove?: Resolver<Maybe<ResolversTypes['Committee']>, ParentType, ContextType, RequireFields<CommitteeMutationsRemoveArgs, 'id'>>;
  update?: Resolver<Maybe<ResolversTypes['Committee']>, ParentType, ContextType, RequireFields<CommitteeMutationsUpdateArgs, 'id' | 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CommitteePaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['CommitteePagination'] = ResolversParentTypes['CommitteePagination']> = ResolversObject<{
  committees?: Resolver<Array<Maybe<ResolversTypes['Committee']>>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginationInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CreateArticlePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['CreateArticlePayload'] = ResolversParentTypes['CreateArticlePayload']> = ResolversObject<{
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  uploadUrl?: Resolver<Maybe<ResolversTypes['Url']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type CustomAuthorResolvers<ContextType = any, ParentType extends ResolversParentTypes['CustomAuthor'] = ResolversParentTypes['CustomAuthor']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['CustomAuthor']>, { __typename: 'CustomAuthor' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  imageUrl?: Resolver<Maybe<ResolversTypes['Url']>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export interface DatetimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Datetime'], any> {
  name: 'Datetime';
}

export type DiscountResolvers<ContextType = any, ParentType extends ResolversParentTypes['Discount'] = ResolversParentTypes['Discount']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  discountPercentage?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DoorResolvers<ContextType = any, ParentType extends ResolversParentTypes['Door'] = ResolversParentTypes['Door']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Door']>, { __typename: 'Door' } & GraphQLRecursivePick<ParentType, {"name":true}>, ContextType>;
  accessPolicies?: Resolver<Maybe<Array<ResolversTypes['AccessPolicy']>>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  studentIds?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type DoorMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['DoorMutations'] = ResolversParentTypes['DoorMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Door']>, ParentType, ContextType, RequireFields<DoorMutationsCreateArgs, 'input'>>;
  remove?: Resolver<Maybe<ResolversTypes['Door']>, ParentType, ContextType, RequireFields<DoorMutationsRemoveArgs, 'name'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EmailUserResolvers<ContextType = any, ParentType extends ResolversParentTypes['EmailUser'] = ResolversParentTypes['EmailUser']> = ResolversObject<{
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  keycloakId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  studentId?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventResolvers<ContextType = any, ParentType extends ResolversParentTypes['Event'] = ResolversParentTypes['Event']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Event']>, { __typename: 'Event' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  alarm_active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  author?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  comments?: Resolver<Array<Maybe<ResolversTypes['Comment']>>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  end_datetime?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  iAmGoing?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  iAmInterested?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  location?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  number_of_updates?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  organizer?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  peopleGoing?: Resolver<Array<Maybe<ResolversTypes['Member']>>, ParentType, ContextType>;
  peopleInterested?: Resolver<Array<Maybe<ResolversTypes['Member']>>, ParentType, ContextType>;
  short_description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  short_description_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  slug?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  start_datetime?: Resolver<ResolversTypes['Datetime'], ParentType, ContextType>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventMutations'] = ResolversParentTypes['EventMutations']> = ResolversObject<{
  comment?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationsCommentArgs, 'content' | 'id'>>;
  create?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationsCreateArgs, 'input'>>;
  remove?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationsRemoveArgs, 'id'>>;
  removeComment?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationsRemoveCommentArgs, 'commentId'>>;
  setGoing?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationsSetGoingArgs, 'id'>>;
  setInterested?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationsSetInterestedArgs, 'id'>>;
  unsetGoing?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationsUnsetGoingArgs, 'id'>>;
  unsetInterested?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationsUnsetInterestedArgs, 'id'>>;
  update?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, RequireFields<EventMutationsUpdateArgs, 'id' | 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type EventPaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['EventPagination'] = ResolversParentTypes['EventPagination']> = ResolversObject<{
  events?: Resolver<Array<Maybe<ResolversTypes['Event']>>, ParentType, ContextType>;
  pageInfo?: Resolver<Maybe<ResolversTypes['PaginationInfo']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileData'] = ResolversParentTypes['FileData']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['FileData']>, { __typename: 'FileData' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  childrenCount?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dndOpenable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  draggable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  droppable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  icon?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isDir?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isEncrypted?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isHidden?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isSymlink?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  modDate?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  openable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  selectable?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  size?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  thumbnailUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['FileMutations'] = ResolversParentTypes['FileMutations']> = ResolversObject<{
  move?: Resolver<Maybe<Array<Maybe<ResolversTypes['fileChange']>>>, ParentType, ContextType, RequireFields<FileMutationsMoveArgs, 'bucket' | 'fileNames' | 'newFolder'>>;
  remove?: Resolver<Maybe<Array<Maybe<ResolversTypes['FileData']>>>, ParentType, ContextType, RequireFields<FileMutationsRemoveArgs, 'bucket' | 'fileNames'>>;
  removeMyProfilePicture?: Resolver<Maybe<Array<Maybe<ResolversTypes['FileData']>>>, ParentType, ContextType, RequireFields<FileMutationsRemoveMyProfilePictureArgs, 'fileName'>>;
  rename?: Resolver<Maybe<ResolversTypes['fileChange']>, ParentType, ContextType, RequireFields<FileMutationsRenameArgs, 'bucket' | 'fileName' | 'newFileName'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoverningDocumentResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoverningDocument'] = ResolversParentTypes['GoverningDocument']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['GoverningDocumentType'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type GoverningDocumentMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['GoverningDocumentMutations'] = ResolversParentTypes['GoverningDocumentMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['GoverningDocument']>, ParentType, ContextType, RequireFields<GoverningDocumentMutationsCreateArgs, 'input'>>;
  delete?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<GoverningDocumentMutationsDeleteArgs, 'id'>>;
  update?: Resolver<Maybe<ResolversTypes['GoverningDocument']>, ParentType, ContextType, RequireFields<GoverningDocumentMutationsUpdateArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MailAliasResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailAlias'] = ResolversParentTypes['MailAlias']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['MailAlias']>, { __typename: 'MailAlias' } & GraphQLRecursivePick<ParentType, {"email":true}>, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  policies?: Resolver<Array<Maybe<ResolversTypes['MailAliasPolicy']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MailAliasMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailAliasMutations'] = ResolversParentTypes['MailAliasMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['MailAlias']>, ParentType, ContextType, RequireFields<MailAliasMutationsCreateArgs, 'input'>>;
  remove?: Resolver<Maybe<ResolversTypes['MailAlias']>, ParentType, ContextType, RequireFields<MailAliasMutationsRemoveArgs, 'id'>>;
  updateSenderStatus?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MailAliasMutationsUpdateSenderStatusArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MailAliasPolicyResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailAliasPolicy'] = ResolversParentTypes['MailAliasPolicy']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['MailAliasPolicy']>, { __typename: 'MailAliasPolicy' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  canSend?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MailRecipientResolvers<ContextType = any, ParentType extends ResolversParentTypes['MailRecipient'] = ResolversParentTypes['MailRecipient']> = ResolversObject<{
  alias?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  emailUsers?: Resolver<Array<ResolversTypes['EmailUser']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MandateResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mandate'] = ResolversParentTypes['Mandate']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Mandate']>, { __typename: 'Mandate' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  end_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType>;
  start_date?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MandateMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MandateMutations'] = ResolversParentTypes['MandateMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Mandate']>, ParentType, ContextType, RequireFields<MandateMutationsCreateArgs, 'input'>>;
  remove?: Resolver<Maybe<ResolversTypes['Mandate']>, ParentType, ContextType, RequireFields<MandateMutationsRemoveArgs, 'id'>>;
  update?: Resolver<Maybe<ResolversTypes['Mandate']>, ParentType, ContextType, RequireFields<MandateMutationsUpdateArgs, 'id' | 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MandatePaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MandatePagination'] = ResolversParentTypes['MandatePagination']> = ResolversObject<{
  mandates?: Resolver<Array<ResolversTypes['Mandate']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginationInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarkdownResolvers<ContextType = any, ParentType extends ResolversParentTypes['Markdown'] = ResolversParentTypes['Markdown']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Markdown']>, { __typename: 'Markdown' } & GraphQLRecursivePick<ParentType, {"name":true}>, ContextType>;
  markdown?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  markdown_en?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarkdownMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownMutations'] = ResolversParentTypes['MarkdownMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Markdown']>, ParentType, ContextType, RequireFields<MarkdownMutationsCreateArgs, 'input'>>;
  update?: Resolver<Maybe<ResolversTypes['Markdown']>, ParentType, ContextType, RequireFields<MarkdownMutationsUpdateArgs, 'input' | 'name'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MarkdownPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['MarkdownPayload'] = ResolversParentTypes['MarkdownPayload']> = ResolversObject<{
  markdown?: Resolver<ResolversTypes['Markdown'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberResolvers<ContextType = any, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Member']>, { __typename: 'Member' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  canPing?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  class_programme?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  class_year?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  customAuthorOptions?: Resolver<Maybe<Array<ResolversTypes['CustomAuthor']>>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  food_preference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  mandates?: Resolver<Maybe<Array<ResolversTypes['Mandate']>>, ParentType, ContextType, RequireFields<MemberMandatesArgs, 'onlyActive'>>;
  nickname?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  picture_path?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  student_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberByProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberByProduct'] = ResolversParentTypes['MemberByProduct']> = ResolversObject<{
  member?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  userInventoryItem?: Resolver<ResolversTypes['UserInventoryItem'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberMutations'] = ResolversParentTypes['MemberMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MemberMutationsCreateArgs, 'input'>>;
  ping?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MemberMutationsPingArgs, 'id'>>;
  remove?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MemberMutationsRemoveArgs, 'id'>>;
  update?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MemberMutationsUpdateArgs, 'id' | 'input'>>;
  updateFoodPreference?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MemberMutationsUpdateFoodPreferenceArgs, 'foodPreference' | 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MemberPaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['MemberPagination'] = ResolversParentTypes['MemberPagination']> = ResolversObject<{
  members?: Resolver<Array<ResolversTypes['Member']>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes['PaginationInfo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  access?: Resolver<Maybe<ResolversTypes['AccessMutations']>, ParentType, ContextType>;
  admin?: Resolver<Maybe<ResolversTypes['AdminMutations']>, ParentType, ContextType>;
  alert?: Resolver<Maybe<ResolversTypes['AlertMutations']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['MailAliasMutations']>, ParentType, ContextType>;
  article?: Resolver<Maybe<ResolversTypes['ArticleMutations']>, ParentType, ContextType>;
  bookable?: Resolver<Maybe<ResolversTypes['BookableMutations']>, ParentType, ContextType>;
  bookingRequest?: Resolver<Maybe<ResolversTypes['BookingRequestMutations']>, ParentType, ContextType>;
  committee?: Resolver<Maybe<ResolversTypes['CommitteeMutations']>, ParentType, ContextType>;
  deleteNotification?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationDeleteNotificationArgs, 'id'>>;
  deleteNotifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationDeleteNotificationsArgs, 'ids'>>;
  event?: Resolver<Maybe<ResolversTypes['EventMutations']>, ParentType, ContextType>;
  files?: Resolver<Maybe<ResolversTypes['FileMutations']>, ParentType, ContextType>;
  governingDocument?: Resolver<Maybe<ResolversTypes['GoverningDocumentMutations']>, ParentType, ContextType>;
  mandate?: Resolver<Maybe<ResolversTypes['MandateMutations']>, ParentType, ContextType>;
  markAsRead?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType, RequireFields<MutationMarkAsReadArgs, 'ids'>>;
  markdown?: Resolver<Maybe<ResolversTypes['MarkdownMutations']>, ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['MemberMutations']>, ParentType, ContextType>;
  position?: Resolver<Maybe<ResolversTypes['PositionMutations']>, ParentType, ContextType>;
  requests?: Resolver<Maybe<ResolversTypes['RequestMutations']>, ParentType, ContextType>;
  specialReceiver?: Resolver<Maybe<ResolversTypes['SpecialReceiverMutations']>, ParentType, ContextType>;
  specialSender?: Resolver<Maybe<ResolversTypes['SpecialSenderMutations']>, ParentType, ContextType>;
  subscriptionSettings?: Resolver<ResolversTypes['SubscriptionSettingsMutations'], ParentType, ContextType>;
  tagSubscriptions?: Resolver<ResolversTypes['TagSubscriptionsMutations'], ParentType, ContextType>;
  tags?: Resolver<Maybe<ResolversTypes['TagMutations']>, ParentType, ContextType>;
  token?: Resolver<ResolversTypes['TokenMutations'], ParentType, ContextType>;
  webshop?: Resolver<Maybe<ResolversTypes['WebshopMutations']>, ParentType, ContextType>;
}>;

export type NotificationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Notification'] = ResolversParentTypes['Notification']> = ResolversObject<{
  authors?: Resolver<Array<ResolversTypes['Author']>, ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  groupedIds?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  link?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  message?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  readAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = ResolversObject<{
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<Maybe<ResolversTypes['Product']>>>, ParentType, ContextType>;
  total?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaginationInfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['PaginationInfo'] = ResolversParentTypes['PaginationInfo']> = ResolversObject<{
  hasNextPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  hasPreviousPage?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  page?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  perPage?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalItems?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  totalPages?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PaymentResolvers<ContextType = any, ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']> = ResolversObject<{
  amount?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  currency?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  paymentMethod?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paymentStatus?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PingResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ping'] = ResolversParentTypes['Ping']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Ping']>, { __typename: 'Ping' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  counter?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  from?: Resolver<ResolversTypes['Member'], ParentType, ContextType>;
  lastPing?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PolicyMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PolicyMutations'] = ResolversParentTypes['PolicyMutations']> = ResolversObject<{
  createApiAccessPolicy?: Resolver<Maybe<ResolversTypes['AccessPolicy']>, ParentType, ContextType, RequireFields<PolicyMutationsCreateApiAccessPolicyArgs, 'input'>>;
  createDoorAccessPolicy?: Resolver<Maybe<ResolversTypes['AccessPolicy']>, ParentType, ContextType, RequireFields<PolicyMutationsCreateDoorAccessPolicyArgs, 'input'>>;
  remove?: Resolver<Maybe<ResolversTypes['AccessPolicy']>, ParentType, ContextType, RequireFields<PolicyMutationsRemoveArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionResolvers<ContextType = any, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Position']>, { __typename: 'Position' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  active?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  activeMandates?: Resolver<Maybe<Array<Maybe<ResolversTypes['Mandate']>>>, ParentType, ContextType>;
  boardMember?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  committee?: Resolver<Maybe<ResolversTypes['Committee']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  descriptionEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  emailAliases?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  nameEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionMutations'] = ResolversParentTypes['PositionMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<PositionMutationsCreateArgs, 'input'>>;
  remove?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<PositionMutationsRemoveArgs, 'id'>>;
  update?: Resolver<Maybe<ResolversTypes['Position']>, ParentType, ContextType, RequireFields<PositionMutationsUpdateArgs, 'id' | 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type PositionPaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes['PositionPagination'] = ResolversParentTypes['PositionPagination']> = ResolversObject<{
  pageInfo?: Resolver<ResolversTypes['PaginationInfo'], ParentType, ContextType>;
  positions?: Resolver<Array<ResolversTypes['Position']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  inventory?: Resolver<Array<Maybe<ResolversTypes['ProductInventory']>>, ParentType, ContextType>;
  maxPerUser?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  releaseDate?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductCategoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductCategory'] = ResolversParentTypes['ProductCategory']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ProductInventoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['ProductInventory'] = ResolversParentTypes['ProductInventory']> = ResolversObject<{
  discount?: Resolver<Maybe<ResolversTypes['Discount']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  quantity?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  adminSettings?: Resolver<Array<ResolversTypes['AdminSetting']>, ParentType, ContextType>;
  alarmShouldBeActive?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  alerts?: Resolver<Array<ResolversTypes['Alert']>, ParentType, ContextType>;
  alias?: Resolver<Maybe<ResolversTypes['MailAlias']>, ParentType, ContextType, RequireFields<QueryAliasArgs, 'email'>>;
  aliases?: Resolver<Maybe<Array<Maybe<ResolversTypes['MailAlias']>>>, ParentType, ContextType>;
  allEmails?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  api?: Resolver<Maybe<ResolversTypes['Api']>, ParentType, ContextType, RequireFields<QueryApiArgs, 'name'>>;
  apiAccess?: Resolver<Maybe<Array<ResolversTypes['Api']>>, ParentType, ContextType>;
  apis?: Resolver<Maybe<Array<ResolversTypes['Api']>>, ParentType, ContextType>;
  article?: Resolver<Maybe<ResolversTypes['Article']>, ParentType, ContextType, Partial<QueryArticleArgs>>;
  articleRequest?: Resolver<Maybe<ResolversTypes['ArticleRequest']>, ParentType, ContextType, RequireFields<QueryArticleRequestArgs, 'id'>>;
  articleRequests?: Resolver<Array<Maybe<ResolversTypes['ArticleRequest']>>, ParentType, ContextType, Partial<QueryArticleRequestsArgs>>;
  bookables?: Resolver<Maybe<Array<ResolversTypes['Bookable']>>, ParentType, ContextType, Partial<QueryBookablesArgs>>;
  bookingRequest?: Resolver<Maybe<ResolversTypes['BookingRequest']>, ParentType, ContextType, RequireFields<QueryBookingRequestArgs, 'id'>>;
  bookingRequests?: Resolver<Maybe<Array<ResolversTypes['BookingRequest']>>, ParentType, ContextType, Partial<QueryBookingRequestsArgs>>;
  chest?: Resolver<Maybe<ResolversTypes['UserInventory']>, ParentType, ContextType, RequireFields<QueryChestArgs, 'studentId'>>;
  committees?: Resolver<Maybe<ResolversTypes['CommitteePagination']>, ParentType, ContextType, RequireFields<QueryCommitteesArgs, 'page' | 'perPage'>>;
  door?: Resolver<Maybe<ResolversTypes['Door']>, ParentType, ContextType, RequireFields<QueryDoorArgs, 'name'>>;
  doors?: Resolver<Maybe<Array<ResolversTypes['Door']>>, ParentType, ContextType>;
  event?: Resolver<Maybe<ResolversTypes['Event']>, ParentType, ContextType, Partial<QueryEventArgs>>;
  events?: Resolver<Maybe<ResolversTypes['EventPagination']>, ParentType, ContextType, Partial<QueryEventsArgs>>;
  files?: Resolver<Maybe<Array<ResolversTypes['FileData']>>, ParentType, ContextType, RequireFields<QueryFilesArgs, 'bucket' | 'prefix'>>;
  getMembersByProduct?: Resolver<Maybe<Array<Maybe<ResolversTypes['MemberByProduct']>>>, ParentType, ContextType, RequireFields<QueryGetMembersByProductArgs, 'productId'>>;
  getSubscriptionTypes?: Resolver<Array<ResolversTypes['SubscriptionType']>, ParentType, ContextType>;
  governingDocument?: Resolver<Maybe<ResolversTypes['GoverningDocument']>, ParentType, ContextType, RequireFields<QueryGoverningDocumentArgs, 'id'>>;
  governingDocuments?: Resolver<Array<ResolversTypes['GoverningDocument']>, ParentType, ContextType>;
  guidelines?: Resolver<Array<ResolversTypes['GoverningDocument']>, ParentType, ContextType>;
  mandatePagination?: Resolver<Maybe<ResolversTypes['MandatePagination']>, ParentType, ContextType, RequireFields<QueryMandatePaginationArgs, 'page' | 'perPage'>>;
  markdown?: Resolver<Maybe<ResolversTypes['Markdown']>, ParentType, ContextType, RequireFields<QueryMarkdownArgs, 'name'>>;
  markdowns?: Resolver<Array<Maybe<ResolversTypes['Markdown']>>, ParentType, ContextType>;
  me?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  member?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, Partial<QueryMemberArgs>>;
  memberById?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, Partial<QueryMemberByIdArgs>>;
  members?: Resolver<Maybe<ResolversTypes['MemberPagination']>, ParentType, ContextType, RequireFields<QueryMembersArgs, 'page' | 'perPage'>>;
  myCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType>;
  myNotifications?: Resolver<Array<ResolversTypes['Notification']>, ParentType, ContextType>;
  mySubscriptionSettings?: Resolver<Array<ResolversTypes['SubscriptionSetting']>, ParentType, ContextType>;
  myTagSubscriptions?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  news?: Resolver<Maybe<ResolversTypes['ArticlePagination']>, ParentType, ContextType, RequireFields<QueryNewsArgs, 'nollning' | 'page' | 'perPage'>>;
  payment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<QueryPaymentArgs, 'id'>>;
  pings?: Resolver<Array<ResolversTypes['Ping']>, ParentType, ContextType>;
  policies?: Resolver<Array<ResolversTypes['GoverningDocument']>, ParentType, ContextType>;
  positions?: Resolver<Maybe<ResolversTypes['PositionPagination']>, ParentType, ContextType, RequireFields<QueryPositionsArgs, 'page' | 'perPage'>>;
  presignedPutUrl?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType, RequireFields<QueryPresignedPutUrlArgs, 'bucket' | 'fileName'>>;
  product?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<QueryProductArgs, 'id'>>;
  productCategories?: Resolver<Array<Maybe<ResolversTypes['ProductCategory']>>, ParentType, ContextType>;
  products?: Resolver<Array<Maybe<ResolversTypes['Product']>>, ParentType, ContextType, Partial<QueryProductsArgs>>;
  rejectedRequests?: Resolver<Maybe<ResolversTypes['ArticleRequestPagination']>, ParentType, ContextType, RequireFields<QueryRejectedRequestsArgs, 'page' | 'perPage'>>;
  resolveRecipients?: Resolver<Array<Maybe<ResolversTypes['MailRecipient']>>, ParentType, ContextType>;
  resolveSenders?: Resolver<Array<Maybe<ResolversTypes['MailRecipient']>>, ParentType, ContextType>;
  songById?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType, RequireFields<QuerySongByIdArgs, 'id'>>;
  songByTitle?: Resolver<Maybe<ResolversTypes['Song']>, ParentType, ContextType, RequireFields<QuerySongByTitleArgs, 'title'>>;
  songs?: Resolver<Maybe<Array<Maybe<ResolversTypes['Song']>>>, ParentType, ContextType>;
  specialReceivers?: Resolver<Array<Maybe<ResolversTypes['SpecialReceiver']>>, ParentType, ContextType, RequireFields<QuerySpecialReceiversArgs, 'alias'>>;
  specialSenders?: Resolver<Array<Maybe<ResolversTypes['SpecialSender']>>, ParentType, ContextType, RequireFields<QuerySpecialSendersArgs, 'alias'>>;
  tag?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<QueryTagArgs, 'id'>>;
  tags?: Resolver<Array<ResolversTypes['Tag']>, ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<QueryTokenArgs, 'expo_token'>>;
}>;

export type RequestMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['RequestMutations'] = ResolversParentTypes['RequestMutations']> = ResolversObject<{
  approve?: Resolver<Maybe<ResolversTypes['ArticleRequest']>, ParentType, ContextType, RequireFields<RequestMutationsApproveArgs, 'id'>>;
  reject?: Resolver<Maybe<ResolversTypes['ArticleRequest']>, ParentType, ContextType, RequireFields<RequestMutationsRejectArgs, 'id'>>;
  undoRejection?: Resolver<Maybe<ResolversTypes['ArticleRequest']>, ParentType, ContextType, RequireFields<RequestMutationsUndoRejectionArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SongResolvers<ContextType = any, ParentType extends ResolversParentTypes['Song'] = ResolversParentTypes['Song']> = ResolversObject<{
  category?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  lyrics?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  melody?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpecialReceiverResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpecialReceiver'] = ResolversParentTypes['SpecialReceiver']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  targetEmail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpecialReceiverMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpecialReceiverMutations'] = ResolversParentTypes['SpecialReceiverMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['SpecialReceiver']>, ParentType, ContextType, RequireFields<SpecialReceiverMutationsCreateArgs, 'input'>>;
  remove?: Resolver<Maybe<ResolversTypes['SpecialReceiver']>, ParentType, ContextType, RequireFields<SpecialReceiverMutationsRemoveArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpecialSenderResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpecialSender'] = ResolversParentTypes['SpecialSender']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  keycloakId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  studentId?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SpecialSenderMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SpecialSenderMutations'] = ResolversParentTypes['SpecialSenderMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['SpecialSender']>, ParentType, ContextType, RequireFields<SpecialSenderMutationsCreateArgs, 'input'>>;
  remove?: Resolver<Maybe<ResolversTypes['SpecialSender']>, ParentType, ContextType, RequireFields<SpecialSenderMutationsRemoveArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionSettingResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionSetting'] = ResolversParentTypes['SubscriptionSetting']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  pushNotification?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SubscriptionType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionSettingsMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionSettingsMutations'] = ResolversParentTypes['SubscriptionSettingsMutations']> = ResolversObject<{
  update?: Resolver<Maybe<ResolversTypes['SubscriptionSetting']>, ParentType, ContextType, RequireFields<SubscriptionSettingsMutationsUpdateArgs, 'enabled' | 'type'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type SubscriptionTypeResolvers<ContextType = any, ParentType extends ResolversParentTypes['SubscriptionType'] = ResolversParentTypes['SubscriptionType']> = ResolversObject<{
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  descriptionEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  titleEn?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagResolvers<ContextType = any, ParentType extends ResolversParentTypes['Tag'] = ResolversParentTypes['Tag']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Tag']>, { __typename: 'Tag' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  isDefault?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  nameEn?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagMutations'] = ResolversParentTypes['TagMutations']> = ResolversObject<{
  create?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<TagMutationsCreateArgs, 'input'>>;
  update?: Resolver<Maybe<ResolversTypes['Tag']>, ParentType, ContextType, RequireFields<TagMutationsUpdateArgs, 'id' | 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TagSubscriptionsMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TagSubscriptionsMutations'] = ResolversParentTypes['TagSubscriptionsMutations']> = ResolversObject<{
  subscribe?: Resolver<Maybe<Array<ResolversTypes['UUID']>>, ParentType, ContextType, RequireFields<TagSubscriptionsMutationsSubscribeArgs, 'tagIds'>>;
  unsubscribe?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType, RequireFields<TagSubscriptionsMutationsUnsubscribeArgs, 'tagIds'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenResolvers<ContextType = any, ParentType extends ResolversParentTypes['Token'] = ResolversParentTypes['Token']> = ResolversObject<{
  __resolveReference?: ReferenceResolver<Maybe<ResolversTypes['Token']>, { __typename: 'Token' } & GraphQLRecursivePick<ParentType, {"id":true}>, ContextType>;
  expo_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  memberId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TokenMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['TokenMutations'] = ResolversParentTypes['TokenMutations']> = ResolversObject<{
  register?: Resolver<Maybe<ResolversTypes['Token']>, ParentType, ContextType, RequireFields<TokenMutationsRegisterArgs, 'expo_token'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UpdateArticlePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes['UpdateArticlePayload'] = ResolversParentTypes['UpdateArticlePayload']> = ResolversObject<{
  article?: Resolver<ResolversTypes['Article'], ParentType, ContextType>;
  uploadUrl?: Resolver<Maybe<ResolversTypes['Url']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UploadDataResolvers<ContextType = any, ParentType extends ResolversParentTypes['UploadData'] = ResolversParentTypes['UploadData']> = ResolversObject<{
  fileUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uploadUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface UrlScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Url'], any> {
  name: 'Url';
}

export type UserInventoryResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInventory'] = ResolversParentTypes['UserInventory']> = ResolversObject<{
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  items?: Resolver<Array<Maybe<ResolversTypes['UserInventoryItem']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type UserInventoryItemResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserInventoryItem'] = ResolversParentTypes['UserInventoryItem']> = ResolversObject<{
  category?: Resolver<Maybe<ResolversTypes['ProductCategory']>, ParentType, ContextType>;
  consumedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  imageUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  paidAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  paidPrice?: Resolver<ResolversTypes['Float'], ParentType, ContextType>;
  productId?: Resolver<Maybe<ResolversTypes['UUID']>, ParentType, ContextType>;
  variant?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type WebshopMutationsResolvers<ContextType = any, ParentType extends ResolversParentTypes['WebshopMutations'] = ResolversParentTypes['WebshopMutations']> = ResolversObject<{
  addInventory?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<WebshopMutationsAddInventoryArgs, 'input'>>;
  addToMyCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<WebshopMutationsAddToMyCartArgs, 'inventoryId' | 'quantity'>>;
  consumeItem?: Resolver<Maybe<ResolversTypes['UserInventory']>, ParentType, ContextType, RequireFields<WebshopMutationsConsumeItemArgs, 'itemId'>>;
  createProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<WebshopMutationsCreateProductArgs, 'input'>>;
  decrementQuantity?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<WebshopMutationsDecrementQuantityArgs, 'inventoryId' | 'quantity'>>;
  deleteInventory?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<WebshopMutationsDeleteInventoryArgs, 'inventoryId'>>;
  deleteProduct?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<WebshopMutationsDeleteProductArgs, 'productId'>>;
  freeCheckout?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType>;
  incrementQuantity?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<WebshopMutationsIncrementQuantityArgs, 'inventoryId' | 'quantity'>>;
  initiatePayment?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<WebshopMutationsInitiatePaymentArgs, 'phoneNumber'>>;
  removeFromMyCart?: Resolver<Maybe<ResolversTypes['Cart']>, ParentType, ContextType, RequireFields<WebshopMutationsRemoveFromMyCartArgs, 'inventoryId' | 'quantity'>>;
  removeMyCart?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  updateInventory?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<WebshopMutationsUpdateInventoryArgs, 'input'>>;
  updatePaymentStatus?: Resolver<Maybe<ResolversTypes['Payment']>, ParentType, ContextType, RequireFields<WebshopMutationsUpdatePaymentStatusArgs, 'paymentId' | 'status'>>;
  updateProduct?: Resolver<Maybe<ResolversTypes['Product']>, ParentType, ContextType, RequireFields<WebshopMutationsUpdateProductArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type FileChangeResolvers<ContextType = any, ParentType extends ResolversParentTypes['fileChange'] = ResolversParentTypes['fileChange']> = ResolversObject<{
  file?: Resolver<ResolversTypes['FileData'], ParentType, ContextType>;
  oldFile?: Resolver<Maybe<ResolversTypes['FileData']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  AccessMutations?: AccessMutationsResolvers<ContextType>;
  AccessPolicy?: AccessPolicyResolvers<ContextType>;
  AdminMutations?: AdminMutationsResolvers<ContextType>;
  AdminSetting?: AdminSettingResolvers<ContextType>;
  Alert?: AlertResolvers<ContextType>;
  AlertMutations?: AlertMutationsResolvers<ContextType>;
  Api?: ApiResolvers<ContextType>;
  Article?: ArticleResolvers<ContextType>;
  ArticleMutations?: ArticleMutationsResolvers<ContextType>;
  ArticlePagination?: ArticlePaginationResolvers<ContextType>;
  ArticlePayload?: ArticlePayloadResolvers<ContextType>;
  ArticleRequest?: ArticleRequestResolvers<ContextType>;
  ArticleRequestPagination?: ArticleRequestPaginationResolvers<ContextType>;
  Author?: AuthorResolvers<ContextType>;
  Bookable?: BookableResolvers<ContextType>;
  BookableCategory?: BookableCategoryResolvers<ContextType>;
  BookableMutations?: BookableMutationsResolvers<ContextType>;
  BookingRequest?: BookingRequestResolvers<ContextType>;
  BookingRequestMutations?: BookingRequestMutationsResolvers<ContextType>;
  Cart?: CartResolvers<ContextType>;
  CartInventory?: CartInventoryResolvers<ContextType>;
  CartItem?: CartItemResolvers<ContextType>;
  Comment?: CommentResolvers<ContextType>;
  Committee?: CommitteeResolvers<ContextType>;
  CommitteeMutations?: CommitteeMutationsResolvers<ContextType>;
  CommitteePagination?: CommitteePaginationResolvers<ContextType>;
  CreateArticlePayload?: CreateArticlePayloadResolvers<ContextType>;
  CustomAuthor?: CustomAuthorResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Datetime?: GraphQLScalarType;
  Discount?: DiscountResolvers<ContextType>;
  Door?: DoorResolvers<ContextType>;
  DoorMutations?: DoorMutationsResolvers<ContextType>;
  EmailUser?: EmailUserResolvers<ContextType>;
  Event?: EventResolvers<ContextType>;
  EventMutations?: EventMutationsResolvers<ContextType>;
  EventPagination?: EventPaginationResolvers<ContextType>;
  FileData?: FileDataResolvers<ContextType>;
  FileMutations?: FileMutationsResolvers<ContextType>;
  GoverningDocument?: GoverningDocumentResolvers<ContextType>;
  GoverningDocumentMutations?: GoverningDocumentMutationsResolvers<ContextType>;
  MailAlias?: MailAliasResolvers<ContextType>;
  MailAliasMutations?: MailAliasMutationsResolvers<ContextType>;
  MailAliasPolicy?: MailAliasPolicyResolvers<ContextType>;
  MailRecipient?: MailRecipientResolvers<ContextType>;
  Mandate?: MandateResolvers<ContextType>;
  MandateMutations?: MandateMutationsResolvers<ContextType>;
  MandatePagination?: MandatePaginationResolvers<ContextType>;
  Markdown?: MarkdownResolvers<ContextType>;
  MarkdownMutations?: MarkdownMutationsResolvers<ContextType>;
  MarkdownPayload?: MarkdownPayloadResolvers<ContextType>;
  Member?: MemberResolvers<ContextType>;
  MemberByProduct?: MemberByProductResolvers<ContextType>;
  MemberMutations?: MemberMutationsResolvers<ContextType>;
  MemberPagination?: MemberPaginationResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Notification?: NotificationResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  PaginationInfo?: PaginationInfoResolvers<ContextType>;
  Payment?: PaymentResolvers<ContextType>;
  Ping?: PingResolvers<ContextType>;
  PolicyMutations?: PolicyMutationsResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  PositionMutations?: PositionMutationsResolvers<ContextType>;
  PositionPagination?: PositionPaginationResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  ProductCategory?: ProductCategoryResolvers<ContextType>;
  ProductInventory?: ProductInventoryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RequestMutations?: RequestMutationsResolvers<ContextType>;
  Song?: SongResolvers<ContextType>;
  SpecialReceiver?: SpecialReceiverResolvers<ContextType>;
  SpecialReceiverMutations?: SpecialReceiverMutationsResolvers<ContextType>;
  SpecialSender?: SpecialSenderResolvers<ContextType>;
  SpecialSenderMutations?: SpecialSenderMutationsResolvers<ContextType>;
  SubscriptionSetting?: SubscriptionSettingResolvers<ContextType>;
  SubscriptionSettingsMutations?: SubscriptionSettingsMutationsResolvers<ContextType>;
  SubscriptionType?: SubscriptionTypeResolvers<ContextType>;
  Tag?: TagResolvers<ContextType>;
  TagMutations?: TagMutationsResolvers<ContextType>;
  TagSubscriptionsMutations?: TagSubscriptionsMutationsResolvers<ContextType>;
  Token?: TokenResolvers<ContextType>;
  TokenMutations?: TokenMutationsResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  UpdateArticlePayload?: UpdateArticlePayloadResolvers<ContextType>;
  UploadData?: UploadDataResolvers<ContextType>;
  Url?: GraphQLScalarType;
  UserInventory?: UserInventoryResolvers<ContextType>;
  UserInventoryItem?: UserInventoryItemResolvers<ContextType>;
  WebshopMutations?: WebshopMutationsResolvers<ContextType>;
  fileChange?: FileChangeResolvers<ContextType>;
}>;

