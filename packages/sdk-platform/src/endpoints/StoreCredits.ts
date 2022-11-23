import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IStoreCredit,
  IStoreCreditResult,
  IStoreCredits,
  IStoreCreditsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/StoreCredits'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class StoreCredits extends Http {
  /**
   * Returns a list of Store Credits. See [api docs](https://api.spreecommerce.org/docs/api-v2/ba91cd9771537-return-a-list-of-store-credits).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCredits.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IStoreCreditsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStoreCredits>('get', routes.storeCreditsPath(), token, params)
  }

  /**
   * Returns a single Store Credit by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/8e4d0b97d85b3-return-a-store-credit).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCredits.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IStoreCreditResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStoreCredit>('get', routes.storeCreditPath(id), token, params)
  }

  /**
   * Creates a new Store Credit and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/818033813ec28-create-a-store-credit).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCredits.create({
   *   bearer_token: '7381273269536713689562374856',
   *   store_credit: {
   *     user_id: '2',
   *     category_id: '4',
   *     created_by_id: '5',
   *     amount: 25,
   *     amount_used: 10,
   *     memo: 'This credit was given as a refund',
   *     currency: 'USD',
   *     amount_authorized: 15.5,
   *     originator_id: '3',
   *     originator_type: 'Refund',
   *     type_id: '1',
   *     store_id: '2',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IStoreCreditResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStoreCredit>('post', routes.storeCreditsPath(), token, params)
  }

  /**
   * Update selected Store Credit. See [api docs](https://api.spreecommerce.org/docs/api-v2/68343e45f8d48-update-a-store-credit).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCredits.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   store_credit: {
   *     user_id: '2',
   *     category_id: '4',
   *     created_by_id: '5',
   *     amount: 25,
   *     amount_used: 10,
   *     memo: 'This credit was given as a refund',
   *     currency: 'USD',
   *     amount_authorized: 15.5,
   *     originator_id: '3',
   *     originator_type: 'Refund',
   *     type_id: '1',
   *     store_id: '2',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IStoreCreditResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStoreCredit>('patch', routes.storeCreditPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Store Credit. See [api docs](https://api.spreecommerce.org/docs/api-v2/bdcc276a0b0f5-delete-a-store-credit).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCredits.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.storeCreditPath(id), token, params)
  }
}
