import { inject, injectable } from 'tsyringe'
import Account from './endpoints/Account'
import Authentication from './endpoints/Authentication'
import Cart from './endpoints/Cart'
import Checkout from './endpoints/Checkout'
import Countries from './endpoints/Countries'
import Order from './endpoints/Order'
import Products from './endpoints/Products'
import Taxons from './endpoints/Taxons'

@injectable()
export default class Instance {
  constructor(
    @inject('Products') public products: Products,
    @inject('Taxons') public taxons: Taxons,
    @inject('Countries') public countries: Countries,
    @inject('Cart') public cart: Cart,
    @inject('Checkout') public checkout: Checkout,
    @inject('Authentication') public authentication: Authentication,
    @inject('Account') public account: Account,
    @inject('Order') public order: Order
  ) { }
}
