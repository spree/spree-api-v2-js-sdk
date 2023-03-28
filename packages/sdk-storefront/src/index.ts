import {
  Client,
  Http,
  MyCustomFunction
} from '@spree/core-api-v2-sdk'
import routes, { storefrontPath } from './routes'
import * as endpoints from './endpoints'
import makeClient from './makeClient'

export { MyCustomFunction, Client, Http, makeClient, endpoints, routes, storefrontPath }

export {
  BasicSpreeError,
  ExpandedSpreeError,
  MisconfigurationError,
  NoResponseError,
  SpreeError,
  SpreeSDKError,
  FetchError,
  DocumentRelationshipError,
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
} from '@spree/core-api-v2-sdk'
// export {
//   BasicSpreeError,
//   ExpandedSpreeError,
//   MisconfigurationError,
//   NoResponseError,
//   SpreeError,
//   SpreeSDKError,
//   FetchError,
//   DocumentRelationshipError
// } from '@spree/core-api-v2-sdk'

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
  AllowedCustomizations,
  DefaultCustomizations,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'
