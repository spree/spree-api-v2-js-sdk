import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  IToken,
  IProductsQuery
} from '@spree/core-api-v2-sdk'
import type {
  IProduct,
  IProductResult,
  IProducts,
  IProductsResult,
  ListOptions,
  ShowOptions
} from '../interfaces/Product'
import routes from '../routes'

export default class Products extends Http {
  /**
   * Returns a list of Products. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2Mg-list-all-products).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) - if logged in user
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   image_transformation?: {
   *     size?: string
   *     quality?: number
   *   }
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.products.list({
   *   page: 1,
   *   per_page: 10
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IProductsResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async list(token: IToken, params: IProductsQuery): Promise<IProductsResult>
  public async list(...allArguments: any[]): Promise<IProductsResult> {
    const [tokenOrOptions = {}, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IProducts>('get', routes.productsPath(), token, params)
  }

  /**
   * Returns a single product. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MTgwNTI4ODE-retrieve-a-product).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) - if logged in user
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   image_transformation?: {
   *     size?: string
   *     quality?: number
   *   }
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.products.show({
   *   id: '123',
   *   include: 'variants'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IProductResult>
  /**
   * @hidden
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
