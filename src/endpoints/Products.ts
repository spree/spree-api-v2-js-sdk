import Http from '../Http'
import { IProductResult, IProductsResult } from '../interfaces/Product'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Products extends Http {
  public async list(token: IToken = {}, params: IQuery = {}): Promise<IProductsResult> {
    return (await this.spreeResponse('get', routes.productsPath(), token, params)) as IProductsResult
  }

  public async show(id: string, token: IToken = {}, params: IQuery = {}): Promise<IProductResult> {
    return (await this.spreeResponse('get', routes.productPath(id), token, params)) as IProductResult
  }
}
