import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  Menu,
  Menus as MenusResponse,
  MenuResult,
  MenusList,
  MenusResult,
  ListOptions,
  ShowOptions
} from '../interfaces/Menu'
import type { IQuery } from '../interfaces/Query'
import routes from '../routes'

export default class Menus extends Http {
  /**
   * Returns a list of Menus. See [api docs](https://api.spreecommerce.org/docs/api-v2/1021e86f10cee-list-all-menus).
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   locale?: string
   *   filter?: {
   *     location?: string
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
   * const response = await client.menus.list({
   *   locale: 'fr',
   *   filter: {
   *     location: 'header'
   *   }
   * })
   * ```
   */
  public async list(options?: ListOptions): Promise<MenusResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async list(params?: MenusList): Promise<MenusResult>
  public async list(...allArguments: any[]): Promise<MenusResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<MenusResponse>('get', routes.menusPath(), token, params)
  }

  /**
   * Returns a single Menu. See [api docs](https://api.spreecommerce.org/docs/api-v2/b67d067a42bc5-retrieve-a-menu).
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
   * const response = await client.menus.show({
   *   id: '2'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<MenuResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async show(id: string, params?: IQuery): Promise<MenuResult>
  public async show(...allArguments: any[]): Promise<MenuResult> {
    const [idOrOptions, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [typeof idOrOptions === 'object' ? idOrOptions : { id: idOrOptions }, positionalParams],
      ['id']
    )

    return await this.spreeResponse<Menu>('get', routes.menuPath(id), token, params)
  }
}
