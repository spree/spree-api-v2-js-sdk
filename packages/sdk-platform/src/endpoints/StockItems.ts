import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IStockItem,
  IStockItemResult,
  IStockItems,
  IStockItemsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/StockItems'
import routes from '../routes'

export default class StockItems extends Http {
  /**
   * Returns a list of Stock Items. See [api docs](https://api.spreecommerce.org/docs/api-v2/d8462fbf16034-return-a-list-of-stock-items).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockItems.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IStockItemsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStockItems>('get', routes.stockItemsPath(), token, params)
  }

  /**
   * Returns a single Stock Item by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/6cfa488ad877a-return-a-stock-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockItems.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IStockItemResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStockItem>('get', routes.stockItemPath(id), token, params)
  }

  /**
   * Creates a new Stock Item and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/050efdafaa038-create-a-stock-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockItems.create({
   *   bearer_token: '7381273269536713689562374856',
   *   stock_item: {
   *     variant_id: '2',
   *     stock_location_id: '2',
   *     count_on_hand: 200,
   *     backorderable: false
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IStockItemResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStockItem>('post', routes.stockItemsPath(), token, params)
  }

  /**
   * Update selected Stock Item. See [api docs](https://api.spreecommerce.org/docs/api-v2/0da50444d18dc-update-a-stock-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockItems.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   stock_item: {
   *     variant_id: '2',
   *     stock_location_id: '2',
   *     count_on_hand: 200,
   *     backorderable: false
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IStockItemResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStockItem>('patch', routes.stockItemPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Stock Item. See [api docs](https://api.spreecommerce.org/docs/api-v2/68ac3ce70b3e1-delete-a-stock-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockItems.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.stockItemPath(id), token, params)
  }
}
