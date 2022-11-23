import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IStoreCreditCategory,
  IStoreCreditCategoryResult,
  IStoreCreditCategories,
  IStoreCreditCategoriesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/StoreCreditCategories'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class StoreCreditCategories extends Http {
  /**
   * Returns a list of Store Credit Categories. See [api docs](https://api.spreecommerce.org/docs/api-v2/cbb1d69c1339f-return-a-list-of-store-credit-categories).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditCategories.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IStoreCreditCategoriesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStoreCreditCategories>('get', routes.storeCreditCategoriesPath(), token, params)
  }

  /**
   * Returns a single Store Credit Category by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/e6dbcc2534aeb-return-a-store-credit-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditCategories.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IStoreCreditCategoryResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStoreCreditCategory>('get', routes.storeCreditCategoryPath(id), token, params)
  }

  /**
   * Creates a new Store Credit Category and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/632ade7fcb3b8-create-a-store-credit-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditCategories.create({
   *   bearer_token: '7381273269536713689562374856',
   *   store_credit_category: {
   *     name: 'refunded'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IStoreCreditCategoryResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStoreCreditCategory>('post', routes.storeCreditCategoriesPath(), token, params)
  }

  /**
   * Update selected Store Credit Category. See [api docs](https://api.spreecommerce.org/docs/api-v2/88fd8e5bf3eed-update-a-store-credit-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditCategories.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   store_credit_category: {
   *     name: 'refunded'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IStoreCreditCategoryResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IStoreCreditCategory>('patch', routes.storeCreditCategoryPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Store Credit Category. See [api docs](https://api.spreecommerce.org/docs/api-v2/4e7f41605c62f-delete-a-store-credit-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.storeCreditCategories.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.storeCreditCategoryPath(id), token, params)
  }
}
