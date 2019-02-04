import Http from '../Http'
import { ProductClass } from '../interfaces/endpoints/ProductClass'
import { Product } from '../interfaces/Product'
import { Routes } from '../routes'

export default class Products extends Http implements ProductClass {
  public async list(params = {}): Promise<Product[]> {
    try {
      const res = await this.get(Routes.productsPath(), params)
      return await res.data
    } catch(err) {
      console.error(err)
    }
  }

  public async show(id: string): Promise<Product> {
    try {
      const res = await this.get(Routes.productPath(id))
      return await res.data
    } catch(err) {
      console.error(err)
    }
  }
}
