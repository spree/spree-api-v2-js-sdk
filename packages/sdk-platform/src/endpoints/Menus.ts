import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IMenus,
  IMenusResult,
  IMenu,
  IMenuResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Menus'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class Menus extends Http {
  /**
   * Returns a list of Menus. See [api docs](https://api.spreecommerce.org/docs/api-v2/be9c6df110639-return-a-list-of-menus).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menus.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IMenusResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IMenus>('get', routes.menusPath(), token, params)
  }

  /**
   * Returns a single Menu. See [api docs](https://api.spreecommerce.org/docs/api-v2/995be066b4033-return-a-menu).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menus.show({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '2'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IMenuResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IMenu>('get', routes.menuPath(id), token, params)
  }

  /**
   * Creates a new Menu and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/e86c9071d7798-create-a-menu).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menus.create({
   *   bearer_token: '7381273269536713689562374856',
   *   
   * })
   * ```
   */
   public async create(options: CreateOptions): Promise<IMenuResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IMenu>('post', routes.menusPath(), token, params)
  }

  /**
   * Update selected Menu. See [api docs](https://api.spreecommerce.org/docs/api-v2/26b7f17c8ce37-update-a-menu).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menus.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   menu: {
   *     name: 'Main Menu',
   *     location: 'header',
   *     locale: 'en-US'
   *   }
   * })
   * ```
   */
   public async update(options: UpdateOptions): Promise<IMenuResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IMenu>('patch', routes.menuPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Menu. See [api docs](https://api.spreecommerce.org/docs/api-v2/b38fe805f9873-delete-a-menu).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menus.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.pagePath(id), token, params)
  }
}
