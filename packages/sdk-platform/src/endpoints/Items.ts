import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IItems,
  IItemsResult,
  IItem,
  IItemResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Items'
import routes from '../routes'

export default class Items extends Http {
  /**
   * Returns a list of all Line Items. See [api docs](https://api.spreecommerce.org/docs/api-v2/df4fb0bdd47c0-return-a-list-of-line-items).
   *  
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.items.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IItemsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IItems>('get', routes.itemsPath(), token, params)
  }

  /**
   * Returns a single Line Item by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/29669205bab9d-return-a-line-item).
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.items.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IItemResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IItem>('get', routes.itemPath(id), token, params)
  }

  /**
   * Creates a new Line Item and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/9c0b584b9eb97-create-a-line-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.items.create({
   *   bearer_token: '7381273269536713689562374856',
   *   line_item: {
   *     order_id: '1',
   *     variant_id: '1',
   *     quantity: 2,
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IItemResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IItem>('post', routes.itemsPath(), token, params)
  }

  /**
   * Update selected Line Item for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/47da3f253e614-update-a-line-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.items.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   line_item: {
   *     variant_id: '1',
   *     quantity: 2
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IItemResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IItem>('patch', routes.itemPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Line Item for the current user. See [api docs](https://api.spreecommerce.org/docs/api-v2/ede517288a9a6-delete-a-line-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.items.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.itemPath(id), token, params)
  }
}
