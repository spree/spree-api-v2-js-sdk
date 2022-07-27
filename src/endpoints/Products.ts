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
  public async list(options: ListOptions): Promise<IProductsResult> {
    const params = {
      image_transformation: options?.image_transformation
    }
    return await this.spreeResponse<IProducts>('get', routes.productsPath(), {}, params)
  }

  public async show(options: ShowOptions): Promise<IProductResult> {
    const params = {
      image_transformation: options?.image_transformation
    }

    return await this.spreeResponse<IProduct>('get', routes.productPath(options.id), {}, params)
  }
}
