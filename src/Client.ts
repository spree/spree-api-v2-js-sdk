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
  protected host?: string

  constructor(config: IClientConfig = {}) {
    this.host = config.host || null
    this.addEndpoints()
  }

  protected addEndpoints() {
    this.account = this.makeAccount()
    this.authentication = this.makeAuthentication()
    this.cart = this.makeCart()
    this.checkout = this.makeCheckout()
    this.countries = this.makeCountries()
    this.order = this.makeOrder()
    this.products = this.makeProducts()
    this.taxons = this.makeTaxons()
  }

  protected makeAccount() {
    return new Account(this.host)
  }

  protected makeAuthentication() {
    return new Authentication(this.host)
  }

  protected makeCart() {
    return new Cart(this.host)
  }

  protected makeCheckout() {
    return new Checkout(this.host)
  }

  protected makeCountries() {
    return new Countries(this.host)
  }

  protected makeOrder() {
    return new Order(this.host)
  }

  protected makeProducts() {
    return new Products(this.host)
  }

  protected makeTaxons() {
    return new Taxons(this.host)
  }
}

export default Client
