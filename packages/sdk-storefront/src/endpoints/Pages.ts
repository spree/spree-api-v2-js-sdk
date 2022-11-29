import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type { IQuery } from '@spree/core-api-v2-sdk'
import type { IPage, IPageResult, IPages, IPagesResult, ListOptions, ShowOptions } from '../interfaces/Page'
import routes from '../routes'

export default class Pages extends Http {
  /**
   * Returns a list of all CMS Pages available in the current store. See [api docs](https://api.spreecommerce.org/docs/api-v2/48dab6913cd0d-list-all-cms-pages).
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const pages = await client.pages.list()
   * ```
   */
  public async list(options?: ListOptions): Promise<IPagesResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async list(params?: IQuery): Promise<IPagesResult>
  public async list(...allArguments: any[]): Promise<IPagesResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<IPages>('get', routes.pagesPath(), token, params)
  }

  /**
   * Returns a single CMS Page. You can use either a CMS Page slug or ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/cedb218a94c4d-retrieve-a-cms-page).
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   id: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const page = await client.pages.show({
   *   id: 'about-us'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IPageResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async show(id: string, params?: IQuery): Promise<IPageResult>
  public async show(...allArguments: any[]): Promise<IPageResult> {
    const [idOrOptions, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [typeof idOrOptions === 'object' ? idOrOptions : { id: idOrOptions }, positionalParams],
      ['id']
    )

    return await this.spreeResponse<IPage>('get', routes.pagePath(id), token, params)
  }
}
