import 'reflect-metadata'
import { container } from 'tsyringe'
import Account from './endpoints/Account'
import Authentication from './endpoints/Authentication'
import Cart from './endpoints/Cart'
import Checkout from './endpoints/Checkout'
import Countries from './endpoints/Countries'
import Order from './endpoints/Order'
import Products from './endpoints/Products'
import Taxons from './endpoints/Taxons'
import * as errors from './errors'
import Result from './helpers/Result'
import Instance from './Instance'

export const makeClient = (config: { host?: string } = {}) => {
  container.registerInstance('Account', new Account(config.host))
  container.registerInstance('Authentication', new Authentication(config.host))
  container.registerInstance('Cart', new Cart(config.host))
  container.registerInstance('Checkout', new Checkout(config.host))
  container.registerInstance('Countries', new Countries(config.host))
  container.registerInstance('Order', new Order(config.host))
  container.registerInstance('Products', new Products(config.host))
  container.registerInstance('Taxons', new Taxons(config.host))
  return container.resolve(Instance)
}

export { errors, Result }
