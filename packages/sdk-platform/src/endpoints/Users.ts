import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IUser,
  IUserResult,
  IUsers,
  IUsersResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Users'
import routes from '../routes'

export default class Users extends Http {
  /**
   * Returns a list of Users. See [api docs](https://api.spreecommerce.org/docs/api-v2/390af06a62f04-return-a-list-of-users).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.users.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IUsersResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IUsers>('get', routes.usersPath(), token, params)
  }

  /**
   * Returns a single User by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/7b20345179b68-return-a-user).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.users.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IUserResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IUser>('get', routes.userPath(id), token, params)
  }

  /**
   * Creates a new User and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/ea85018d506d4-create-a-user).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.users.create({
   *   bearer_token: '7381273269536713689562374856',
   *   user: {
   *     email: 'string',
   *     first_name: 'string',
   *     last_name: 'string',
   *     password: 'string',
   *     password_confirmation: 'string',
   *     ship_address_id: 'string',
   *     bill_address_id: 'string',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IUserResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IUser>('post', routes.usersPath(), token, params)
  }

  /**
   * Update selected User. See [api docs](https://api.spreecommerce.org/docs/api-v2/eb10ceaa2ad99-update-a-user).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.users.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   user: {
   *     email: 'string',
   *     first_name: 'string',
   *     last_name: 'string',
   *     password: 'string',
   *     password_confirmation: 'string',
   *     ship_address_id: 'string',
   *     bill_address_id: 'string',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IUserResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IUser>('patch', routes.userPath(id), token, params)
  }

  /**
   * This endpoint removes the specified User. See [api docs](https://api.spreecommerce.org/docs/api-v2/0367fb976c487-delete-a-user).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.users.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.userPath(id), token, params)
  }
}
