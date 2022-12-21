import type { IClientConfig, CreateFetcherConfig, Fetcher, } from '@spree/core-api-v2-sdk'
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

    this.account = new Account(config)
    this.authentication = new Authentication(config)
    this.cart = new Cart(config)
    this.checkout = new Checkout(config)
    this.countries = new Countries(config)
    this.digitalAssets = new DigitalAssets(config)
    this.menus = new Menus(config)
    this.order = new Order(config)
    this.pages = new Pages(config)
    this.products = new Products(config)
    this.taxons = new Taxons(config)
    this.vendors = new Vendors(config)
    this.wishlists = new Wishlists(config)
  }
}

export default Client