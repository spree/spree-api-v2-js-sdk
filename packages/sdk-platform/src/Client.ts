import type { IClientConfig, CreateFetcherConfig, Fetcher, } from '@spree/core-api-v2-sdk'
import {
  Addresses,
  Adjustments,
  Authentication,
  Classifications,
  Countries,
  Pages,
  Sections,
  Digitals,
  Links,
  Items,
  Menus,
  MenuItems,
  OptionTypes,
  OptionValues,
  Orders,
  Payments,
  PaymentMethods,
  Products,
  Promotions,
  PromotionActions,
  PromotionCategories,
  PromotionRules,
  Roles,
  Shipments,
  ShippingCategories,
  ShippingMethods,
  States,
  StockItems,
  StockLocations,
  StoreCreditCategories,
  StoreCreditTypes,
  StoreCredits,
  TaxCategories,
  TaxRates,
  Taxons,
  Taxonomies,
  Users,
  Variants,
  WebhookEvents,
  WebhookSubscribers,
  Wishlists,
  WishedItems,
  Zones
} from './endpoints'

class Client {
  public addresses: Addresses
  public adjustments: Adjustments
  public authentication: Authentication
  public classifications: Classifications
  public countries: Countries
  public pages: Pages
  public sections: Sections
  public digitals: Digitals
  public links: Links
  public items: Items
  public menus: Menus
  public menuItems: MenuItems
  public optionTypes: OptionTypes
  public optionValues: OptionValues
  public orders: Orders
  public payments: Payments
  public paymentMethods: PaymentMethods
  public products: Products
  public promotions: Promotions
  public promotionActions: PromotionActions
  public promotionCategories: PromotionCategories
  public promotionRules: PromotionRules
  public roles: Roles
  public shipments: Shipments
  public shippingCategories: ShippingCategories
  public shippingMethods: ShippingMethods
  public states: States
  public stockItems: StockItems
  public stockLocations: StockLocations
  public storeCreditCategories: StoreCreditCategories
  public storeCreditTypes: StoreCreditTypes
  public storeCredits: StoreCredits
  public taxCategories: TaxCategories
  public taxRates: TaxRates
  public taxons: Taxons
  public taxonomies: Taxonomies
  public users: Users
  public variants: Variants
  public webhookEvents: WebhookEvents
  public webhookSubscribers: WebhookSubscribers
  public wishlists: Wishlists
  public wishedItems: WishedItems
  public zones: Zones

  protected host: string
  protected fetcher: Fetcher

  constructor(customOptions: IClientConfig) {
    const spreeHostEnvironmentValue: string | null = (globalThis.process && globalThis.process.env.SPREE_HOST) || null

    const defaultOptions: Partial<IClientConfig> = {
      host: spreeHostEnvironmentValue || 'http://localhost:3000/'
    }

    const options: IClientConfig = {
      ...defaultOptions,
      ...customOptions
    }

    const fetcherOptions: CreateFetcherConfig = { host: options.host }

    this.fetcher = options.createFetcher(fetcherOptions)

    const config = { fetcher: this.fetcher }

    this.addresses = new Addresses(config)
    this.adjustments = new Adjustments(config)
    this.authentication = new Authentication(config)
    this.classifications = new Classifications(config)
    this.countries = new Countries(config)
    this.pages = new Pages(config)
    this.sections = new Sections(config)
    this.digitals = new Digitals(config)
    this.links = new Links(config)
    this.items = new Items(config)
    this.menus = new Menus(config)
    this.menuItems = new MenuItems(config)
    this.optionTypes = new OptionTypes(config)
    this.optionValues = new OptionValues(config)
    this.orders = new Orders(config)
    this.payments = new Payments(config)
    this.paymentMethods = new PaymentMethods(config)
    this.products = new Products(config)
    this.promotions = new Promotions(config)
    this.promotionActions = new PromotionActions(config)
    this.promotionCategories = new PromotionCategories(config)
    this.promotionRules = new PromotionRules(config)
    this.roles = new Roles(config)
    this.shipments = new Shipments(config)
    this.shippingCategories = new ShippingCategories(config)
    this.shippingMethods = new ShippingMethods(config)
    this.states = new States(config)
    this.stockItems = new StockItems(config)
    this.stockLocations = new StockLocations(config)
    this.storeCreditCategories = new StoreCreditCategories(config)
    this.storeCreditTypes = new StoreCreditTypes(config)
    this.storeCredits = new StoreCredits(config)
    this.taxCategories = new TaxCategories(config)
    this.taxRates = new TaxRates(config)
    this.taxons = new Taxons(config)
    this.taxonomies = new Taxonomies(config)
    this.users = new Users(config)
    this.variants = new Variants(config)
    this.webhookEvents = new WebhookEvents(config)
    this.webhookSubscribers = new WebhookSubscribers(config)
    this.wishlists = new Wishlists(config)
    this.wishedItems = new WishedItems(config)
    this.zones = new Zones(config)
  }
}

export default Client