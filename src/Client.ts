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
  protected host?: string

  constructor(config: IClientConfig = {}) {
    this.host = config.host || null
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
    return new Account(this.host)
  }

  protected makeAuthentication(): Authentication {
    return new Authentication(this.host)
  }

  protected makeCart(): Cart {
    return new Cart(this.host)
  }

  protected makeCheckout(): Checkout {
    return new Checkout(this.host)
  }

  protected makeCountries(): Countries {
    return new Countries(this.host)
  }

  protected makeOrder(): Order {
    return new Order(this.host)
  }

  protected makeProducts(): Products {
    return new Products(this.host)
  }

  protected makeTaxons(): Taxons {
    return new Taxons(this.host)
  }
}

export default Client
