import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IPromotion,
  IPromotionResult,
  IPromotions,
  IPromotionsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Promotions'
import routes from '../routes'

export default class Promotions extends Http {
  /**
   * Returns a list of all Promotions. See [api docs](https://api.spreecommerce.org/docs/api-v2/78d936d3270f6-return-a-list-of-promotions).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotions.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IPromotionsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPromotions>('get', routes.promotionsPath(), token, params)
  }

  /**
   * Returns a single Promotion by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/efc2f0d158992-return-a-promotion).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotions.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IPromotionResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPromotion>('get', routes.promotionPath(id), token, params)
  }

  /**
   * Creates a new Promotion and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/c6d7e45b37c09-create-a-promotion).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotions.create({
   *   bearer_token: '7381273269536713689562374856',
   *   promotion: {
   *     name: 'Promotions Used in 2021',
   *     code: 'BLK-FRI',
   *     description: 'Save today with discount code XYZ at checkout.',
   *     usage_limit: 100,
   *     advertise: true,
   *     starts_at: 'string',
   *     ends_at: 'string',
   *     store_ids: ['2']
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IPromotionResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPromotion>('post', routes.promotionsPath(), token, params)
  }

  /**
   * Update the selected Promotion. See [api docs](https://api.spreecommerce.org/docs/api-v2/7dbd2fc84f547-update-a-promotion).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.pages.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   promotion: {
   *     name: 'Promotions Used in 2021',
   *     code: 'CYB-MON',
   *     description: 'Save today with discount code XYZ at checkout.',
   *     usage_limit: 100,
   *     advertise: true,
   *     starts_at: 'string',
   *     ends_at: 'string',
   *     store_ids: ['2']
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IPromotionResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPromotion>('patch', routes.promotionPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Promotion. See [api docs](https://api.spreecommerce.org/docs/api-v2/95b06ab2087af-delete-a-promotion).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotions.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.promotionPath(id), token, params)
  }
}
