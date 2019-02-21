import { injectable } from "tsyringe"
import  Products from './endpoints/Products'
import Taxons from './endpoints/Taxons'
import Countries from './endpoints/Countries'
import Cart from './endpoints/Cart'
import Checkout from './endpoints/Checkout'
import Authentication from './endpoints/Authentication'
import Account from './endpoints/Account'
import Order from './endpoints/Order'

@injectable()
export default class Instance {
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
