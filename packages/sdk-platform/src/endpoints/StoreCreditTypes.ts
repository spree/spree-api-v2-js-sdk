import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IStoreCreditType,
  IStoreCreditTypeResult,
  IStoreCreditTypes,
  IStoreCreditTypesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/StoreCreditTypes'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class StoreCreditTypes extends Http {
  /**
   * Returns a list of Store Credit Types. See [api docs](https://api.spreecommerce.org/docs/api-v2/3b80f8d360903-return-a-list-of-store-credit-types).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditTypes.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IStoreCreditTypesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStoreCreditTypes>('get', routes.storeCreditTypesPath(), token, params)
  }

  /**
   * Returns a single Store Credit Type by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/52752632c7e0f-return-a-store-credit-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditTypes.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IStoreCreditTypeResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStoreCreditType>('get', routes.storeCreditTypePath(id), token, params)
  }

  /**
   * Creates a new Store Credit Type and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/395dbba5ecdd8-create-a-store-credit-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditTypes.create({
   *   bearer_token: '7381273269536713689562374856',
   *   store_credit_type: {
   *     name: 'refunded',
   *     priority: 1
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IStoreCreditTypeResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStoreCreditType>('post', routes.storeCreditTypesPath(), token, params)
  }

  /**
   * Update selected Store Credit Type. See [api docs](https://api.spreecommerce.org/docs/api-v2/92fe781557b57-update-a-store-credit-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditTypes.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   store_credit_type: {
   *     name: 'refunded',
   *     priority: 1
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IStoreCreditTypeResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStoreCreditType>('patch', routes.storeCreditTypePath(id), token, params)
  }

  /**
   * This endpoint removes the specified Store Credit Type. See [api docs](https://api.spreecommerce.org/docs/api-v2/11964f73d3cc4-delete-a-store-credit-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditTypes.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.storeCreditTypePath(id), token, params)
  }
}
