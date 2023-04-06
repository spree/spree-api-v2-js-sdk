export * from '@spree/core-api-v2-sdk'
import routes, { platformPath } from './routes'
import * as endpoints from './endpoints'
import makeClient, { Client, Endpoints } from './makeClient'

export { makeClient, endpoints, routes, platformPath }
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

export type {
  AddressAttr,
  AddressData,
  IAddress,
  IAddresses,
  IAddressResult,
  IAddressesResult
} from './interfaces/Addresses'
export type {
  AdjustmentAttr,
  AdjustmentData,
  IAdjustment,
  IAdjustments,
  IAdjustmentResult,
  IAdjustmentsResult
} from './interfaces/Adjustments'
export type {
  AuthApplicationTokenAttr,
  AuthUserTokenAttr,
  AuthRefreshTokenAttr
} from './interfaces/Authentication'
export type {
  ClassificationAttr,
  ClassificationData,
  IClassification,
  IClassifications,
  IClassificationResult,
  IClassificationsResult
} from './interfaces/Classifications'
export type {
  CountriesAttr,
  CountryData,
  ICountry,
  ICountries,
  ICountryResult,
  ICountriesResult
} from './interfaces/Countries'
export type {
  DigitalAsset,
  DigitalAssetResult
} from './interfaces/DigitalAsset'
export type {
  DigitalAttr,
  DigitalData,
  IDigital,
  IDigitals,
  IDigitalResult,
  IDigitalsResult
} from './interfaces/Digitals'
export type {
  ItemAttr,
  ItemData,
  IItem,
  IItems,
  IItemResult,
  IItemsResult
} from './interfaces/Items'
export type {
  LinkAttr,
  LinkData,
  ILink,
  ILinks,
  ILinkResult,
  ILinksResult
} from './interfaces/Links'
export type {
  MenuItemAttr,
  MenuItemData,
  IMenuItem,
  IMenuItems,
  IMenuItemResult,
  IMenuItemsResult
} from './interfaces/MenuItems'
export type {
  MenuAttr,
  MenuData,
  IMenu,
  IMenus,
  IMenuResult,
  IMenusResult
} from './interfaces/Menus'
export type {
  OptionTypeAttr,
  OptionTypeData,
  IOptionType,
  IOptionTypes,
  IOptionTypeResult,
  IOptionTypesResult
} from './interfaces/OptionTypes'
export type {
  OptionValueAttr,
  OptionValueData,
  IOptionValue,
  IOptionValues,
  IOptionValueResult,
  IOptionValuesResult
} from './interfaces/OptionValues'
export type {
  OrderAttr,
  OrderData,
  IOrder,
  IOrders,
  IOrderResult,
  IOrdersResult
} from './interfaces/Orders'
export type {
  PageAttr,
  PageData,
  IPage,
  IPages,
  IPageResult,
  IPagesResult
} from './interfaces/Pages'
export type {
  PaymentMethodAttr,
  PaymentMethodData,
  IPaymentMethod,
  IPaymentMethods,
  IPaymentMethodResult,
  IPaymentMethodsResult
} from './interfaces/PaymentMethods'
export type {
  PaymentAttr,
  PaymentData,
  IPayment,
  IPayments,
  IPaymentResult,
  IPaymentsResult
} from './interfaces/Payments'
export type {
  ProductAttr,
  ProductData,
  IProduct,
  IProducts,
  IProductResult,
  IProductsResult
} from './interfaces/Products'
export type {
  PromotionActionAttr,
  PromotionActionData,
  IPromotionAction,
  IPromotionActions,
  IPromotionActionResult,
  IPromotionActionsResult
} from './interfaces/PromotionActions'
export type {
  PromotionCategoryAttr,
  PromotionCategoryData,
  IPromotionCategory,
  IPromotionCategories,
  IPromotionCategoryResult,
  IPromotionCategoriesResult
} from './interfaces/PromotionCategories'
export type {
  PromotionRuleAttr,
  PromotionRuleData,
  IPromotionRule,
  IPromotionRules,
  IPromotionRuleResult,
  IPromotionRulesResult
} from './interfaces/PromotionRules'
export type {
  PromotionAttr,
  PromotionData,
  IPromotion,
  IPromotions,
  IPromotionResult,
  IPromotionsResult
} from './interfaces/Promotions'
export type {
  RoleAttr,
  RoleData,
  IRole,
  IRoles,
  IRoleResult,
  IRolesResult
} from './interfaces/Roles'
export type {
  SectionAttr,
  SectionData,
  ISection,
  ISections,
  ISectionResult,
  ISectionsResult
} from './interfaces/Sections'
export type {
  ShipmentAttr,
  ShipmentData,
  IShipment,
  IShipments,
  IShipmentResult,
  IShipmentsResult
} from './interfaces/Shipments'
export type {
  ShippingCategoryAttr,
  ShippingCategoryData,
  IShippingCategory,
  IShippingCategories,
  IShippingCategoryResult,
  IShippingCategoriesResult
} from './interfaces/ShippingCategories'
export type {
  ShippingMethodAttr,
  ShippingMethodData,
  IShippingMethod,
  IShippingMethods,
  IShippingMethodResult,
  IShippingMethodsResult
} from './interfaces/ShippingMethods'
export type {
  StateAttr,
  StateData,
  IState,
  IStates,
  IStateResult,
  IStatesResult
} from './interfaces/States'
export type {
  StockItemAttr,
  StockItemData,
  IStockItem,
  IStockItems,
  IStockItemResult,
  IStockItemsResult
} from './interfaces/StockItems'
export type {
  StockLocationAttr,
  StockLocationData,
  IStockLocation,
  IStockLocations,
  IStockLocationResult,
  IStockLocationsResult
} from './interfaces/StockLocations'
export type {
  StoreCreditCategoryAttr,
  StoreCreditCategoryData,
  IStoreCreditCategory,
  IStoreCreditCategories,
  IStoreCreditCategoryResult,
  IStoreCreditCategoriesResult
} from './interfaces/StoreCreditCategories'
export type {
  StoreCreditAttr,
  StoreCreditData,
  IStoreCredit,
  IStoreCredits,
  IStoreCreditResult,
  IStoreCreditsResult
} from './interfaces/StoreCredits'
export type {
  StoreCreditTypeAttr,
  StoreCreditTypeData,
  IStoreCreditType,
  IStoreCreditTypes,
  IStoreCreditTypeResult,
  IStoreCreditTypesResult
} from './interfaces/StoreCreditTypes'
export type {
  TaxCategoryAttr,
  TaxCategoryData,
  ITaxCategory,
  ITaxCategories,
  ITaxCategoryResult,
  ITaxCategoriesResult
} from './interfaces/TaxCategories'
export type {
  TaxonomyAttr,
  TaxonomyData,
  ITaxonomy,
  ITaxonomies,
  ITaxonomyResult,
  ITaxonomiesResult
} from './interfaces/Taxonomies'
export type {
  TaxonAttr,
  TaxonData,
  ITaxon,
  ITaxons,
  ITaxonResult,
  ITaxonsResult
} from './interfaces/Taxons'
export type {
  TaxRateAttr,
  TaxRateData,
  ITaxRate,
  ITaxRates,
  ITaxRateResult,
  ITaxRatesResult
} from './interfaces/TaxRates'
export type {
  UserAttr,
  UserData,
  IUser,
  IUsers,
  IUserResult,
  IUsersResult
} from './interfaces/Users'
export type {
  VariantAttr,
  VariantData,
  IVariant,
  IVariants,
  IVariantResult,
  IVariantsResult
} from './interfaces/Variants'
export type {
  VendorAttr,
  Vendor,
  Vendors,
  VendorResult,
  VendorsResult
} from './interfaces/Vendor'
export type {
  WebhookEventsAttr,
  WebhookEventsData,
  IWebhookEvents,
  IWebhookEventsResult
} from './interfaces/WebhookEvents'
export type {
  WebhookSubscriberAttr,
  WebhookSubscriberData,
  IWebhookSubscriber,
  IWebhookSubscribers,
  IWebhookSubscriberResult,
  IWebhookSubscribersResult
} from './interfaces/WebhookSubscribers'
export type {
  WishedItemAttr,
  WishedItemData,
  IWishedItem,
  IWishedItems,
  IWishedItemResult,
  IWishedItemsResult
} from './interfaces/WishedItems'
export type {
  WishlistAttr,
  WishlistData,
  IWishlist,
  IWishlists,
  IWishlistResult,
  IWishlistsResult
} from './interfaces/Wishlists'
export type {
  ZoneAttr,
  ZoneData,
  IZone,
  IZones,
  IZoneResult,
  IZonesResult
} from './interfaces/Zones'
