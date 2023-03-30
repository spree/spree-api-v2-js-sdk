import { Client as CoreClient } from '@spree/core-api-v2-sdk'
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

const endpoints = {
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

type Endpoints = {
  [key in keyof typeof endpoints]: InstanceType<typeof endpoints[key]>
}
type Client = CoreClient & Endpoints

const makeClient = (config: IClientConfig): Client => new CoreClient(config, endpoints) as Client

export type { Client, Endpoints }
export default makeClient
