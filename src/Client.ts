import {
  Account,
  Authentication,
  Brands,
  Cart,
  Categories,
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
import type { CreateFetcherConfig, Fetcher, IClientConfig } from './interfaces/ClientConfig'

class Client {
  public account: Account
  public authentication: Authentication
  public brands: Brands
  public cart: Cart
  public categories: Categories
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

    this.addEndpoints()
  }

  protected addEndpoints(): void {
    this.account = this.makeAccount()
    this.authentication = this.makeAuthentication()
    this.brands = this.makeBrands()
    this.cart = this.makeCart()
    this.categories = this.makeCategories()
    this.checkout = this.makeCheckout()
    this.countries = this.makeCountries()
    this.digitalAssets = this.makeDigitalAssets()
    this.menus = this.makeMenus()
    this.order = this.makeOrder()
    this.pages = this.makePages()
    this.products = this.makeProducts()
    this.taxons = this.makeTaxons()
    this.vendors = this.makeVendors()
    this.wishlists = this.makeWishlists()
  }

  protected makeAccount(): Account {
    return new Account({ fetcher: this.fetcher })
  }

  protected makeAuthentication(): Authentication {
    return new Authentication({ fetcher: this.fetcher })
  }

  protected makeBrands(): Brands {
    return new Brands({ fetcher: this.fetcher })
  }

  protected makeCart(): Cart {
    return new Cart({ fetcher: this.fetcher })
  }

  protected makeCategories(): Categories {
    return new Categories({ fetcher: this.fetcher })
  }

  protected makeCheckout(): Checkout {
    return new Checkout({ fetcher: this.fetcher })
  }

  protected makeCountries(): Countries {
    return new Countries({ fetcher: this.fetcher })
  }

  protected makeOrder(): Order {
    return new Order({ fetcher: this.fetcher })
  }

  protected makePages(): Pages {
    return new Pages({ fetcher: this.fetcher })
  }

  protected makeProducts(): Products {
    return new Products({ fetcher: this.fetcher })
  }

  protected makeTaxons(): Taxons {
    return new Taxons({ fetcher: this.fetcher })
  }

  protected makeDigitalAssets(): DigitalAssets {
    return new DigitalAssets({ fetcher: this.fetcher })
  }

  protected makeMenus(): Menus {
    return new Menus({ fetcher: this.fetcher })
  }

  protected makeVendors(): Vendors {
    return new Vendors({ fetcher: this.fetcher })
  }

  protected makeWishlists(): Wishlists {
    return new Wishlists({ fetcher: this.fetcher })
  }
}

export default Client
