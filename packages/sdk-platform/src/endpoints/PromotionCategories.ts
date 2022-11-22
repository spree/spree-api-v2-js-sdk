import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IPromotionCategory,
  IPromotionCategoryResult,
  IPromotionCategories,
  IPromotionCategoriesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/PromotionCategories'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class PromotionCategories extends Http {
  /**
   * Returns a list of all Promotion Categories. See [api docs](https://api.spreecommerce.org/docs/api-v2/4ae0ce7c6e732-return-a-list-of-promotion-categories).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionCategories.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IPromotionCategoriesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPromotionCategories>('get', routes.promotionCategoriesPath(), token, params)
  }

  /**
   * Returns a single Promotion Category by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/05695ef7f8996-return-a-promotion-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionCategories.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IPromotionCategoryResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPromotionCategory>('get', routes.promotionCategoryPath(id), token, params)
  }

  /**
   * Creates a new Promotion Category and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/f9976f0edea37-create-a-promotion-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionCategories.create({
   *   bearer_token: '7381273269536713689562374856',
   *   promotion_category: {
   *     name: 'Promotions Used in 2021',
   *     code: '2021-PROMOS'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IPromotionCategoryResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPromotionCategory>('post', routes.promotionCategoriesPath(), token, params)
  }

  /**
   * Update selected Promotion Category. See [api docs](https://api.spreecommerce.org/docs/api-v2/c9b0da12e9c02-update-a-promotion-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionCategories.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   promotion_category: {
   *     name: 'Promotions Used in 2021',
   *     code: '2021-PROMOS'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IPromotionCategoryResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPromotionCategory>('patch', routes.promotionCategoryPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Promotion Category. See [api docs](https://api.spreecommerce.org/docs/api-v2/9bc2c667a1d23-delete-a-promotion-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionCategories.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.promotionCategoryPath(id), token, params)
  }
}
