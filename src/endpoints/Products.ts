import { GET } from '../constants'
import Http from '../Http'
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint'
import { IProduct, IProducts } from '../interfaces/Product'
import { Routes } from '../routes'

export default class Products extends Http implements SimpleEndpoint {
  public async list(params = {}): Promise<IProducts> {
    return await this.spreeResponse(GET, Routes.productsPath(), params)
  }

  public async show(id: string): Promise<IProduct> {
    return await this.spreeResponse(GET, Routes.productPath(id))
  }
}
