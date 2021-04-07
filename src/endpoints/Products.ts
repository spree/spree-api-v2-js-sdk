import Http from '../Http'
import { IProductResult, IProductsResult } from '../interfaces/Product'
import { IQuery } from '../interfaces/Query'
import { routes } from '../routes'

export default class Products extends Http {
  public async list(params: IQuery = {}): Promise<IProductsResult> {
    return (await this.spreeResponse('get', routes.productsPath(), {}, params)) as IProductsResult
  }

  public async show(id: string, params: IQuery = {}): Promise<IProductResult> {
    return (await this.spreeResponse('get', routes.productPath(id), {}, params)) as IProductResult
  }
}
