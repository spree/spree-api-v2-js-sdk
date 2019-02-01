import 'isomorphic-fetch'
import Orbit from '../Orbit'
import { ProductClass } from '../interfaces/endpoints/ProductClass'
import { Product } from '../interfaces/Product'

export default class Products extends Orbit implements ProductClass {
  public async list({ filter = null, sort = null, page = null }, includes = {}): Promise<Product[]> {
    try {
      const res = await this.store.query(q => {
        let records = q.findRecords('product')
        if (filter) records = records.filter(filter)
        if (sort) records = records.sort(sort)
        if (page) records = records.page(page)

        return records
      }, includes)

      return await res
    } catch(err) {
      console.error(err)
    }
  }

  public async show(id: string, includes = {}): Promise<Product> {
    try {
      const res = await this.store.query(q => q.findRecord({ type: 'product', id: id }), includes)
      return await res
    } catch(err) {
      console.error(err)
    }
  }
}
