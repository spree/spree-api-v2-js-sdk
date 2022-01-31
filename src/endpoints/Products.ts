import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IProduct,
  IProductResult,
  IProducts,
  IProductsResult,
  ListOptions,
  ShowOptions
} from '../interfaces/Product'
import type { IProductsQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Products extends Http {
  public async list(options: ListOptions): Promise<IProductsResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async list(token: IToken, params: IProductsQuery): Promise<IProductsResult>
  public async list(...allArguments: any[]): Promise<IProductsResult> {
    const [tokenOrOptions = {}, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IProducts>('get', routes.productsPath(), token, params)
  }

  public async show(options: ShowOptions): Promise<IProductResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async show(id: string, token: IToken, params: IProductsQuery): Promise<IProductResult>
  public async show(...allArguments: any[]): Promise<IProductResult> {
    const [idOrOptions, positionalToken = {}, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [typeof idOrOptions === 'object' ? idOrOptions : { id: idOrOptions }, positionalToken, positionalParams],
      ['id']
    )

    return await this.spreeResponse<IProduct>('get', routes.productPath(id), token, params)
  }
}
