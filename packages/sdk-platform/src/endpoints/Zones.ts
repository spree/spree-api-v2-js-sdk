import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IZone,
  IZoneResult,
  IZones,
  IZonesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Zones'
import routes from '../routes'

export default class Zones extends Http {
  /**
   * Returns a list of Zones. See [api docs](https://api.spreecommerce.org/docs/api-v2/c4040f690ec03-return-a-list-of-zones).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.zones.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IZonesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IZones>('get', routes.zonesPath(), token, params)
  }

  /**
   * Returns a single Zone by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/42976ecc9a87a-return-a-zone).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.zones.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IZoneResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IZone>('get', routes.zonePath(id), token, params)
  }

  /**
   * Creates a new Zone and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/34c506391bcd7-create-a-zone).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.zones.create({
   *   bearer_token: '7381273269536713689562374856',
   *   zone: {
   *     name: 'EU',
   *     description: 'All countries in the EU',
   *     default_tax: true,
   *     kind: 'state'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IZoneResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IZone>('post', routes.zonesPath(), token, params)
  }

  /**
   * Update selected Zone. See [api docs](https://api.spreecommerce.org/docs/api-v2/e5fd5170bfe22-update-a-zone).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.zones.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   zone: {
   *     name: 'EU',
   *     description: 'All countries in the EU',
   *     default_tax: true,
   *     kind: 'state'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IZoneResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IZone>('patch', routes.zonePath(id), token, params)
  }

  /**
   * This endpoint removes the specified Zone. See [api docs](https://api.spreecommerce.org/docs/api-v2/3b2d247da6b23-delete-a-zone).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.zones.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.zonePath(id), token, params)
  }
}
