import { Account, Products, Taxons, Countries, Cart, Checkout, Authentication, Order } from './endpoints'
import createFetcherFromType from './helpers/createFetcherFromType'
import type { Fetcher, IClientConfig, OptionalIClientConfig } from './interfaces/ClientConfig'

class Client {
  public products: Products
  public taxons: Taxons
  public countries: Countries
  public cart: Cart
  public checkout: Checkout
  public authentication: Authentication
  public account: Account
  public order: Order

  protected host: string
  protected fetcher: Fetcher

  constructor(customOptions?: OptionalIClientConfig) {
    const defaultOptions: IClientConfig = {
      host: process.env.SPREE_HOST || 'http://localhost:3000/',
      fetcherType: 'axios'
    }

    const options: IClientConfig = {
      ...defaultOptions,
      ...customOptions
    }

    this.fetcher = createFetcherFromType({
      host: options.host,
      fetcherType: options.fetcherType,
      createFetcher: options['createFetcher']
    })

    this.addEndpoints()
  }

  protected addEndpoints(): void {
    this.account = this.makeAccount()
    this.authentication = this.makeAuthentication()
    this.cart = this.makeCart()
    this.checkout = this.makeCheckout()
    this.countries = this.makeCountries()
    this.order = this.makeOrder()
    this.products = this.makeProducts()
    this.taxons = this.makeTaxons()
  }

  protected makeAccount(): Account {
    return new Account({ fetcher: this.fetcher })
  }

  protected makeAuthentication(): Authentication {
    return new Authentication({ fetcher: this.fetcher })
  }

  protected makeCart(): Cart {
    return new Cart({ fetcher: this.fetcher })
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

  protected makeProducts(): Products {
    return new Products({ fetcher: this.fetcher })
  }

  protected makeTaxons(): Taxons {
    return new Taxons({ fetcher: this.fetcher })
  }
}

export default Client
