export * from '@spree/core-api-v2-sdk'
import routes, { storefrontPath } from './routes'
import * as endpoints from './endpoints'
import makeClient, { Client, Endpoints } from './makeClient'

export { makeClient, endpoints, routes, storefrontPath }
export type { Client, Endpoints }

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
