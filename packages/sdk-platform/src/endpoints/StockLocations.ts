import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IStockLocation,
  IStockLocationResult,
  IStockLocations,
  IStockLocationsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/StockLocations'
import routes from '../routes'

export default class StockLocations extends Http {
  /**
   * Returns a list of Stock Locations. See [api docs](https://api.spreecommerce.org/docs/api-v2/e669022c85fd3-return-a-list-of-stock-locations).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockLocations.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IStockLocationsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStockLocations>('get', routes.stockLocationsPath(), token, params)
  }

  /**
   * Returns a single Stock Location by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/817e20c6a7fe6-return-a-stock-location).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockLocations.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IStockLocationResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStockLocation>('get', routes.stockLocationPath(id), token, params)
  }

  /**
   * Creates a new Stock Location and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/77aeb611d9b32-create-a-stock-location).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockLocations.create({
   *   bearer_token: '7381273269536713689562374856',
   *   stock_location: {
   *     name: 'Warehouse 3',
   *     default: true,
   *     address1: 'South St. 8',
   *     address2: 'South St. 109',
   *     country_id: '2',
   *     state_id: '4',
   *     city: 'Los Angeles',
   *     state_name: 'California',
   *     zipcode: '90005',
   *     phone: '23333456',
   *     active: true,
   *     backorderable_default: true,
   *     propagate_all_variants: true,
   *     admin_name: 'string'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IStockLocationResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStockLocation>('post', routes.stockLocationsPath(), token, params)
  }

  /**
   * Update selected Stock Location. See [api docs](https://api.spreecommerce.org/docs/api-v2/c2f6767b87a78-update-a-stock-location).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockLocations.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   stock_location: {
   *     name: 'Warehouse 3',
   *     default: true,
   *     address1: 'South St. 8',
   *     address2: 'South St. 109',
   *     country_id: '2',
   *     state_id: '4',
   *     city: 'Los Angeles',
   *     state_name: 'California',
   *     zipcode: '90005',
   *     phone: '23333456',
   *     active: true,
   *     backorderable_default: true,
   *     propagate_all_variants: true,
   *     admin_name: 'string'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IStockLocationResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStockLocation>('patch', routes.stockLocationPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Stock Location. See [api docs](https://api.spreecommerce.org/docs/api-v2/83663dfb55f8b-delete-a-stock-location).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.stockLocations.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.stockLocationPath(id), token, params)
  }
}
