import Http from '../Http'
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint'
import { Product } from '../interfaces/Product'
import { Routes } from '../routes'

export default class Products extends Http implements SimpleEndpoint {
  public async list(params = {}): Promise<Product[]> {
    try {
      const res = await this.get(Routes.productsPath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async show(id: string): Promise<Product> {
    try {
      const res = await this.get(Routes.productPath(id))
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }
}
