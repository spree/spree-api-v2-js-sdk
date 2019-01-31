require('isomorphic-fetch')
import Orbit from '../Orbit'
import { ProductSchema } from '../schema/ProrductSchema'
import { LogLevel } from '@orbit/coordinator'

export default class Products extends Orbit {
  constructor() {
    super(ProductSchema)
  }

  public async exec(query: any, store: any) {
    try {
      await this.coordinator.activate({ logLevel: LogLevel.None })

      const requst = await this.store.query(q => q.findRecord(query), store)
      const response = await JSON.stringify(requst, null, 2)

      return await response
    } catch(err) {
      console.error(err)
    }
  }
}
