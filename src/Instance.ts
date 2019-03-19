import { injectable } from 'tsyringe'
import Account from './endpoints/Account'
import Authentication from './endpoints/Authentication'
import Cart from './endpoints/Cart'
import Checkout from './endpoints/Checkout'
import Countries from './endpoints/Countries'
import Order from './endpoints/Order'
import Products from './endpoints/Products'
import Taxons from './endpoints/Taxons'

export default @injectable() class Instance {
  constructor(
    public products: Products,
    public taxons: Taxons,
    public countries: Countries,
    public cart: Cart,
    public checkout: Checkout,
    public authentication: Authentication,
    public account: Account,
    public order: Order
  ) { }
}
