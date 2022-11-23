import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IShippingCategory,
  IShippingCategoryResult,
  IShippingCategories,
  IShippingCategoriesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/ShippingCategories'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class ShippingCategories extends Http {
  /**
   * Returns a list of Shipping Categories. See [api docs](https://api.spreecommerce.org/docs/api-v2/9ee28631b9fa8-return-a-list-of-cms-pages).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingCategories.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IShippingCategoriesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IShippingCategories>('get', routes.shippingCategoriesPath(), token, params)
  }

  /**
   * Returns a single Shipping Category by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/cb1999788ddd8-return-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingCategories.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IShippingCategoryResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShippingCategory>('get', routes.shippingCategoryPath(id), token, params)
  }

  /**
   * Creates a new Shipping Category and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/974134352bb37-create-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingCategories.create({
   *   bearer_token: '7381273269536713689562374856',
   *   shipping_category: {
   *     name: 'Another Category'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IShippingCategoryResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IShippingCategory>('post', routes.shippingCategoriesPath(), token, params)
  }

  /**
   * Update selected Shipping Category for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/51f1f4d927506-update-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingCategories.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   shipping_category: {
   *     name: 'Another Category'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IShippingCategoryResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShippingCategory>('patch', routes.shippingCategoryPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Shipping Category. See [api docs](https://api.spreecommerce.org/docs/api-v2/ed7075128d23d-delete-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingCategories.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.shippingCategoryPath(id), token, params)
  }
}
