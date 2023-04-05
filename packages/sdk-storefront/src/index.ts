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
  LocalizedSlugs,
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

export * from './interfaces/attributes/Address'
export * from './interfaces/attributes/Payment'
export * from './interfaces/attributes/PaymentSource'
export * from './interfaces/attributes/Shipment'
export * from './interfaces/endpoints/CartClass'
export * from './interfaces/endpoints/CheckoutClass'
export * from './interfaces/Authentication'

export type {
  AccountAttr,
  IAccount,
  IAccountResult,
  IAccountConfirmation,
  IAccountConfirmationResult,
  AccountAddressAttr,
  AccountAddressResponse,
  AccountAddressesResponse,
  AccountAddressResult,
  AccountAddressesResult
} from './interfaces/Account'
export type {
  CountryAttr,
  ICountry,
  ICountries,
  ICountryResult,
  ICountriesResult
} from './interfaces/Country'
export type {
  CreditCardAttr,
  ICreditCard,
  ICreditCards,
  ICreditCardResult,
  ICreditCardsResult
} from './interfaces/CreditCard'
export type {
  DigitalAsset,
  DigitalAssetResult
} from './interfaces/DigitalAsset'
export type {
  EstimatedShippingMethodAttr,
  IEstimatedShippingMethods,
  IEstimatedShippingMethodsResult,
  EstimatedShippingRates,
  EstimatedShippingRatesResult
} from './interfaces/EstimatedShippingMethod'
export type {
  MenuAttr,
  Menu,
  Menus,
  MenuResult,
  MenusResult
} from './interfaces/Menu'
export type {
  OrderAttr,
  IOrder,
  IOrders,
  IOrderResult,
  IOrdersResult
} from './interfaces/Order'
export type {
  PageAttr,
  IPage,
  IPages,
  IPageResult,
  IPagesResult
} from './interfaces/Page'
export type {
  PaymentMethodAttr,
  IPaymentMethods,
  IPaymentMethodsResult
} from './interfaces/PaymentMethod'
export type {
  ProductAttr,
  IProduct,
  IProducts,
  IProductResult,
  IProductsResult
} from './interfaces/Product'
export type {
  ShippingMethodAttr,
  IShippingMethods,
  IShippingMethodsResult,
  ShippingRateAttr,
  ShippingRates,
  ShippingRatesResult
} from './interfaces/ShippingMethod'
export type {
  StripeCheckoutSessionSummary,
  StripeCheckoutSessionSummaryResult
} from './interfaces/StripeCheckoutSessionSummary'
export type {
  TaxonAttr,
  ITaxon,
  ITaxons,
  ITaxonResult,
  ITaxonsResult
} from './interfaces/Taxon'
export type {
  VendorAttr,
  Vendor,
  Vendors,
  VendorResult,
  VendorsResult
} from './interfaces/Vendor'
export type {
  WishedItemAttr,
  WishedItem,
  WishedItemResult
} from './interfaces/WishedItem'
export type {
  WishlistAttr,
  Wishlist,
  Wishlists,
  WishlistResult,
  WishlistsResult
} from './interfaces/Wishlist'
