import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  ITaxCategory,
  ITaxCategoryResult,
  ITaxCategories,
  ITaxCategoriesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/TaxCategories'
import routes from '../routes'

export default class TaxCategories extends Http {
  /**
   * Returns a list Tax Categories. See [api docs](https://api.spreecommerce.org/docs/api-v2/fdefd43ed4e10-return-a-list-of-tax-categories).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxCategories.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<ITaxCategoriesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ITaxCategories>('get', routes.taxCategoriesPath(), token, params)
  }

  /**
   * Returns a single Tax Category by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/52ed4c3f2236e-return-a-tax-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxCategories.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<ITaxCategoryResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ITaxCategory>('get', routes.taxCategoryPath(id), token, params)
  }

  /**
   * Creates a new Tax Category and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/aea0b53fff2f2-create-a-tax-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxCategories.create({
   *   bearer_token: '7381273269536713689562374856',
   *   tax_category: {
   *     name: 'Clothing',
   *     is_default: true,
   *     tax_code: '1257L',
   *     description: 'Branded clothing'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<ITaxCategoryResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ITaxCategory>('post', routes.taxCategoriesPath(), token, params)
  }

  /**
   * Update selected Tax Category. See [api docs](https://api.spreecommerce.org/docs/api-v2/7d67771454f1a-update-a-tax-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxCategories.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   tax_category: {
   *     name: 'Clothing',
   *     is_default: true,
   *     tax_code: '1257L',
   *     description: 'Branded clothing'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<ITaxCategoryResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ITaxCategory>('patch', routes.taxCategoryPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Tax Category. See [api docs](https://api.spreecommerce.org/docs/api-v2/41c503ee8ad1a-delete-a-tax-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxCategories.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.taxCategoryPath(id), token, params)
  }
}
