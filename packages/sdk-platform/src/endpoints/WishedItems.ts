import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IWishedItem,
  IWishedItemResult,
  IWishedItems,
  IWishedItemsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/WishedItems'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class WishedItems extends Http {
  /**
   * Returns a list of all Wished Items. See [api docs](https://api.spreecommerce.org/docs/api-v2/a3efbaaf2f2f5-return-a-list-of-wished-items).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishedItems.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IWishedItemsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IWishedItems>('get', routes.wishedItemsPath(), token, params)
  }

  /**
   * Returns a single Wished Item by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/f59c0617df324-return-a-wished-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishedItems.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IWishedItemResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IWishedItem>('get', routes.wishedItemPath(id), token, params)
  }

  /**
   * Creates a new Wished Item and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/252418a0af63d-create-a-wished-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishedItems.create({
   *   bearer_token: '7381273269536713689562374856',
   *   wished_item: {
   *     wishlist_id: 'string',
   *     variant_id: 'string',
   *     quantity: 0
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IWishedItemResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IWishedItem>('post', routes.wishedItemsPath(), token, params)
  }

  /**
   * Update selected Wished Item. See [api docs](https://api.spreecommerce.org/docs/api-v2/2338e7c4ca951-update-a-wished-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishedItems.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   wished_item: {
   *     wishlist_id: 'string',
   *     variant_id: 'string',
   *     quantity: 0
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IWishedItemResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IWishedItem>('patch', routes.wishedItemPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Wished Item. See [api docs](https://api.spreecommerce.org/docs/api-v2/188c235c4ca79-delete-a-wished-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishedItems.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.wishedItemPath(id), token, params)
  }
}
