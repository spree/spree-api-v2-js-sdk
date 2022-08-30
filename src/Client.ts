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
  protected config: IClientConfig

  constructor(customOptions: IClientConfig) {
    const spreeHostEnvironmentValue: string | null = (globalThis.process && globalThis.process.env.SPREE_HOST) || null

    const defaultOptions: Partial<IClientConfig> = {
      host: spreeHostEnvironmentValue || 'http://localhost:3000/'
    }

    this.config = { ...defaultOptions, ...customOptions }
    this.host = this.config.host

    const fetcherOptions: CreateFetcherConfig = { host: this.config.host }

    this.fetcher = this.config.createFetcher(fetcherOptions)

    const endpointOptions = {
      fetcher: this.fetcher,
      bearer_token: this.config.bearer_token,
      order_token: this.config.order_token,
      locale: this.config.locale,
      currency: this.config.currency
    }

    this.account = new Account(endpointOptions)
    this.authentication = new Authentication(endpointOptions)
    this.cart = new Cart(endpointOptions)
    this.checkout = new Checkout(endpointOptions)
    this.countries = new Countries(endpointOptions)
    this.digitalAssets = new DigitalAssets(endpointOptions)
    this.menus = new Menus(endpointOptions)
    this.order = new Order(endpointOptions)
    this.pages = new Pages(endpointOptions)
    this.products = new Products(endpointOptions)
    this.taxons = new Taxons(endpointOptions)
    this.vendors = new Vendors(endpointOptions)
    this.wishlists = new Wishlists(endpointOptions)
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

  protected builderInstance<T extends AllowedClientBuilderOptions = ClientOptions>(
    config: Partial<IClientConfig> = {}
  ): Client<T> {
    return new Client<T>({ ...this.config, ...config })
  }
}

export default Client
