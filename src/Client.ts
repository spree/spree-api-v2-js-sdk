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
import type { CreateFetcherConfig, Fetcher, IClientConfig } from './interfaces/ClientConfig'
import { Currency } from './interfaces/Currency'
import { Locale } from './interfaces/Locale'
import { BearerToken, OrderToken } from './interfaces/Token'
class Client {
  public account: Account
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

  private tokens: EndpointOptions['tokens'] = {}
  private locale: EndpointOptions['locale'] | undefined
  private currency: EndpointOptions['currency'] | undefined

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
    this.addEndpoints()
  }

  public withOrderToken(orderToken: OrderToken): this {
    return this.withEndpointBuilder(() => {
      this.tokens.orderToken = orderToken
    })
  }

  public withBearerToken(bearerToken: BearerToken): this {
    return this.withEndpointBuilder(() => {
      this.tokens.bearerToken = bearerToken
    })
  }

  public withLocale(locale: Locale): this {
    return this.withEndpointBuilder(() => {
      this.locale = locale
    })
  }

  public withCurrency(currency: Currency): this {
    return this.withEndpointBuilder(() => {
      this.currency = currency
    })
  }

  protected getEndpointOptions(): EndpointOptions {
    return {
      fetcher: this.fetcher,
      tokens: this.tokens,
      locale: this.locale,
      currency: this.currency
    }
  }

  protected addEndpoints(): void {
    const options = this.getEndpointOptions()
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

  protected withEndpointBuilder(fn: () => void): this {
    fn()
    this.addEndpoints()
    return this
  }

  protected makeAccount(options: EndpointOptions): Account {
    return new Account(options)
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
