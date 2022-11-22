import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IRole,
  IRoleResult,
  IRoles,
  IRolesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Roles'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class Roles extends Http {
  /**
   * Returns a list of all Roles. See [api docs](https://api.spreecommerce.org/docs/api-v2/9ee28631b9fa8-return-a-list-of-cms-pages).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.roles.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IRolesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IRoles>('get', routes.rolesPath(), token, params)
  }

  /**
   * Returns a single Role by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/cb1999788ddd8-return-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.roles.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IRoleResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IRole>('get', routes.rolePath(id), token, params)
  }

  /**
   * Creates a new Role and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/974134352bb37-create-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.roles.create({
   *   bearer_token: '7381273269536713689562374856',
   *   role: {
   *     name: 'vendor'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IRoleResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IRole>('post', routes.rolesPath(), token, params)
  }

  /**
   * Update the selected Role. See [api docs](https://api.spreecommerce.org/docs/api-v2/51f1f4d927506-update-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.roles.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   role: {
   *     name: 'vendor'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IRoleResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IRole>('patch', routes.rolePath(id), token, params)
  }

  /**
   * This endpoint removes the specified Role. See [api docs](https://api.spreecommerce.org/docs/api-v2/ed7075128d23d-delete-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.roles.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.rolePath(id), token, params)
  }
}
