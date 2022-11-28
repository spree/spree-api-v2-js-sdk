import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IProduct,
  IProductResult,
  IProducts,
  IProductsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Products'
import routes from '../routes'

export default class Products extends Http {
  /**
   * Returns a list of all Products. See [api docs](https://api.spreecommerce.org/docs/api-v2/9662536f82b50-return-a-list-of-products).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.products.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IProductsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IProducts>('get', routes.productsPath(), token, params)
  }

  /**
   * Returns a single Product by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/eb1fbab910f34-return-a-product).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.products.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IProductResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IProduct>('get', routes.productPath(id), token, params)
  }

  /**
   * Creates a new Product and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/27527143a4edf-create-a-product).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.products.create({
   *   bearer_token: '7381273269536713689562374856',
   *   product: {
   *     name: 'string',
   *     description: 'string',
   *     available_on: 'string',
   *     discontinue_on: 'string',
   *     permalink: 'string',
   *     meta_description: 'string',
   *     meta_keywords: 'string',
   *     price: 'string',
   *     sku: 'string',
   *     deleted_at: 'string',
   *     prototype_id: 'string',
   *     option_values_hash: 'string',
   *     weight: 'string',
   *     height: 'string',
   *     width: 'string',
   *     depth: 'string',
   *     shipping_category_id: 'string',
   *     tax_category_id: 'string',
   *     cost_currency: 'string',
   *     cost_price: 'string',
   *     compare_at_price: 'string',
   *     option_type_ids: 'string',
   *     taxon_ids: 'string',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IProductResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IProduct>('post', routes.productsPath(), token, params)
  }

  /**
   * Update the selected Product. See [api docs](https://api.spreecommerce.org/docs/api-v2/569db5b111be7-update-a-product).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.products.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   product: {
   *     name: 'string',
   *     description: 'string',
   *     available_on: 'string',
   *     discontinue_on: 'string',
   *     permalink: 'string',
   *     meta_description: 'string',
   *     meta_keywords: 'string',
   *     price: 'string',
   *     sku: 'string',
   *     deleted_at: 'string',
   *     prototype_id: 'string',
   *     option_values_hash: 'string',
   *     weight: 'string',
   *     height: 'string',
   *     width: 'string',
   *     depth: 'string',
   *     shipping_category_id: 'string',
   *     tax_category_id: 'string',
   *     cost_currency: 'string',
   *     cost_price: 'string',
   *     compare_at_price: 'string',
   *     option_type_ids: 'string',
   *     taxon_ids: 'string',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IProductResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IProduct>('patch', routes.productPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Product. See [api docs](https://api.spreecommerce.org/docs/api-v2/ff11a04b69297-delete-a-product).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.products.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.productPath(id), token, params)
  }
}
