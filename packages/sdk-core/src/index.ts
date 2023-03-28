import Client from './Client'
import Http from './Http'

export {
  BasicSpreeError,
  ExpandedSpreeError,
  MisconfigurationError,
  NoResponseError,
  SpreeError,
  SpreeSDKError,
  FetchError,
  DocumentRelationshipError
} from './errors'
export {
  findDocument,
  findRelationshipDocuments,
  findSingleRelationshipDocument,
  objectToQuerystring,
  makeSuccess,
  makeFail,
  toJson,
  fromJson,
  extractSuccess,
  squashAndPreparePositionalArguments
} from './helpers'

export type {
  Fetcher,
  CreateFetcher,
  CreateFetcherConfig,
  FetcherConfig,
  IClientConfig,
  CreateFetchFetcherConfig,
  CreateCustomizedFetchFetcher,
  DeepAnyObject,
  EmptyObjectResponse,
  EmptyObjectResult,
  FieldErrors,
  Errors,
  ErrorType,
  HttpMethod,
  AutomaticResponseParsing,
  ResponseParsing,
  FetchConfig,
  ImageTransformation,
  JsonApiDocument,
  JsonApiResponse,
  JsonApiListResponse,
  JsonApiSingleResponse,
  NoContentResponse,
  NoContentResult,
  IQuery,
  IProductsQuery,
  RawFetchRequest,
  RawFetchResponse,
  RelationType,
  IRelationships,
  Result,
  ResultResponse,
  IToken,
  RequiredAnyToken,
  OptionalAnyToken,
  RequiredAccountToken,
  OptionalAccountToken,
  IOAuthToken,
  IOAuthTokenResult,
  IPlatformToken,
  IPlatformTokenResult,
  IPlatformUserToken,
  IPlatformUserTokenResult,
  AllowedCustomizations,
  DefaultCustomizations,
  WithCommonOptions
} from './interfaces'

const MyCustomFunction = () => 4

export {
  MyCustomFunction,
  Client,
  Http
}
