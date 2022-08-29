import {
  Account,
  Authentication,
  Cart,
  Checkout,
  Countries,
  DigitalAssets,
  Menus,
  Order,
  Pages,
  Products,
  Taxons,
  Vendors,
  Wishlists
} from './endpoints'
import { EndpointOptions } from './Http'
import { AllowedClientBuilderOptions, DefaultBuilderOptions } from './interfaces/ClientBuilderOptions'
import type { CreateFetcherConfig, Fetcher, IClientConfig } from './interfaces/ClientConfig'
import { Currency } from './interfaces/Currency'
import { Locale } from './interfaces/Locale'
import { SetProperty } from './interfaces/SetProperty'
import { BearerToken, OrderToken } from './interfaces/Token'

class Client<ClientOptions extends AllowedClientBuilderOptions = DefaultBuilderOptions> {
  public account: Account<ClientOptions>
  public authentication: Authentication
  public cart: Cart
  public checkout: Checkout
  public countries: Countries
  public digitalAssets: DigitalAssets
  public menus: Menus
  public order: Order
  public pages: Pages
  public products: Products
  public taxons: Taxons
  public vendors: Vendors
  public wishlists: Wishlists

  protected host: string
  protected fetcher: Fetcher

  private config: IClientConfig

  constructor(customOptions: IClientConfig) {
    const spreeHostEnvironmentValue: string | null = (globalThis.process && globalThis.process.env.SPREE_HOST) || null

    const defaultOptions: Partial<IClientConfig> = {
      host: spreeHostEnvironmentValue || 'http://localhost:3000/'
    }

    this.config = { ...defaultOptions, ...customOptions }

    const fetcherOptions: CreateFetcherConfig = { host: this.config.host }

    this.fetcher = this.config.createFetcher(fetcherOptions)

    const endpointOptions = {
      fetcher: this.fetcher,
      bearer_token: this.config.bearer_token,
      order_token: this.config.order_token,
      locale: this.config.locale,
      currency: this.config.currency
    }
    this.addEndpoints(endpointOptions)
  }

  public withOrderToken(order_token: OrderToken) {
    return this.builderInstance<SetProperty<ClientOptions, 'order_token', true>>({ order_token })
  }

  public withBearerToken(bearer_token: BearerToken) {
    return this.builderInstance<SetProperty<ClientOptions, 'bearer_token', true>>({ bearer_token })
  }

  public withLocale(locale: Locale) {
    return this.builderInstance<SetProperty<ClientOptions, 'locale', true>>({ locale })
  }

  public withCurrency(currency: Currency) {
    return this.builderInstance<SetProperty<ClientOptions, 'currency', true>>({ currency })
  }

  protected builderInstance<NewClientInstanceType extends AllowedClientBuilderOptions>(
    config: Partial<IClientConfig> = {}
  ) {
    return new Client<NewClientInstanceType>({ ...this.config, ...config })
  }

  protected addEndpoints(options: EndpointOptions): void {
    this.account = this.makeAccount(options)
    this.authentication = this.makeAuthentication(options)
    this.cart = this.makeCart(options)
    this.checkout = this.makeCheckout(options)
    this.countries = this.makeCountries(options)
    this.digitalAssets = this.makeDigitalAssets(options)
    this.menus = this.makeMenus(options)
    this.order = this.makeOrder(options)
    this.pages = this.makePages(options)
    this.products = this.makeProducts(options)
    this.taxons = this.makeTaxons(options)
    this.vendors = this.makeVendors(options)
    this.wishlists = this.makeWishlists(options)
  }

  protected makeAccount(options: EndpointOptions): Account<ClientOptions> {
    return new Account<ClientOptions>(options)
  }

  protected makeAuthentication(options: EndpointOptions): Authentication {
    return new Authentication(options)
  }

  protected makeCart(options: EndpointOptions): Cart {
    return new Cart(options)
  }

  protected makeCheckout(options: EndpointOptions): Checkout {
    return new Checkout(options)
  }

  protected makeCountries(options: EndpointOptions): Countries {
    return new Countries(options)
  }

  protected makeOrder(options: EndpointOptions): Order {
    return new Order(options)
  }

  protected makePages(options: EndpointOptions): Pages {
    return new Pages(options)
  }

  protected makeProducts(options: EndpointOptions): Products {
    return new Products(options)
  }

  protected makeTaxons(options: EndpointOptions): Taxons {
    return new Taxons(options)
  }

  protected makeDigitalAssets(options: EndpointOptions): DigitalAssets {
    return new DigitalAssets(options)
  }

  protected makeMenus(options: EndpointOptions): Menus {
    return new Menus(options)
  }

  protected makeVendors(options: EndpointOptions): Vendors {
    return new Vendors(options)
  }

  protected makeWishlists(options: EndpointOptions): Wishlists {
    return new Wishlists(options)
  }
}

export default Client
