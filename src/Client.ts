import { Account, Products, Taxons, Countries, Cart, Checkout, Authentication, Order } from './endpoints'

export interface IClientConfig {
  host?: string
}

class Client {
  public products: Products
  public taxons: Taxons
  public countries: Countries
  public cart: Cart
  public checkout: Checkout
  public authentication: Authentication
  public account: Account
  public order: Order
  private host?: string

  constructor(config: IClientConfig = {}) {
    this.host = config.host || null
    this.addEndpoints()
  }

  private addEndpoints() {
    this.account = new Account(this.host)
    this.authentication = new Authentication(this.host)
    this.cart = new Cart(this.host)
    this.checkout = new Checkout(this.host)
    this.countries = new Countries(this.host)
    this.order = new Order(this.host)
    this.products = new Products(this.host)
    this.taxons = new Taxons(this.host)
  }
}

export default Client
