import Account from './endpoints/Account'
import Authentication from './endpoints/Authentication'
import Cart from './endpoints/Cart'
import Checkout from './endpoints/Checkout'
import Countries from './endpoints/Countries'
import Order from './endpoints/Order'
import Products from './endpoints/Products'
import Taxons from './endpoints/Taxons'

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
