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
  private locale: string | undefined

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

  public withLocale(locale: string): this {
    this.locale = locale
    this.addEndpoints()
    return this
  }

  protected endpointOptions(): EndpointOptions {
    return {
      fetcher: this.fetcher,
      locale: this.locale
    }
  }

  protected addEndpoints(): void {
    this.account = this.makeAccount()
    this.authentication = this.makeAuthentication()
    this.cart = this.makeCart()
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
    return new Account({ ...this.endpointOptions() })
  }

  protected makeAuthentication(): Authentication {
    return new Authentication({ ...this.endpointOptions() })
  }

  protected makeCart(): Cart {
    return new Cart({ ...this.endpointOptions() })
  }

  protected makeCheckout(): Checkout {
    return new Checkout({ ...this.endpointOptions() })
  }

  protected makeCountries(): Countries {
    return new Countries({ ...this.endpointOptions() })
  }

  protected makeOrder(): Order {
    return new Order({ ...this.endpointOptions() })
  }

  protected makePages(): Pages {
    return new Pages({ ...this.endpointOptions() })
  }

  protected makeProducts(): Products {
    return new Products({ ...this.endpointOptions() })
  }

  protected makeTaxons(): Taxons {
    return new Taxons({ ...this.endpointOptions() })
  }

  protected makeDigitalAssets(): DigitalAssets {
    return new DigitalAssets({ ...this.endpointOptions() })
  }

  protected makeMenus(): Menus {
    return new Menus({ ...this.endpointOptions() })
  }

  protected makeVendors(): Vendors {
    return new Vendors({ ...this.endpointOptions() })
  }

  protected makeWishlists(): Wishlists {
    return new Wishlists({ ...this.endpointOptions() })
  }
}

export default Client
