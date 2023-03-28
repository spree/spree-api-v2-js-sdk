import { Client } from '@spree/core-api-v2-sdk'
import type { IClientConfig } from '@spree/core-api-v2-sdk'
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

const clientEndpoints = {
  account: Account,
  authentication: Authentication,
  cart: Cart,
  checkout: Checkout,
  countries: Countries,
  digitalAssets: DigitalAssets,
  menus: Menus,
  order: Order,
  pages: Pages,
  products: Products,
  taxons: Taxons,
  vendors: Vendors,
  wishlists: Wishlists
}

const makeClient = (config: IClientConfig): Client & typeof clientEndpoints => new Client(config, clientEndpoints) as Client & typeof clientEndpoints

export default makeClient
