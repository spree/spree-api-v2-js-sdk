import Http from '../Http'
import type { IProduct, IProductResult, IProducts, IProductsResult } from '../interfaces/Product'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Products extends Http {
  public async list(token: IToken = {}, params: IQuery = {}): Promise<IProductsResult> {
    return await this.spreeResponse<IProducts>('get', routes.productsPath(), token, params)
  }

  public async show(id: string, token: IToken = {}, params: IQuery = {}): Promise<IProductResult> {
    return await this.spreeResponse<IProduct>('get', routes.productPath(id), token, params)
  }
}
