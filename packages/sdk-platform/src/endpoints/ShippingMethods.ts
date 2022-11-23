import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IShippingMethod,
  IShippingMethodResult,
  IShippingMethods,
  IShippingMethodsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/ShippingMethods'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class ShippingMethods extends Http {
  /**
   * Returns a list of Shipping Methods. See [api docs](https://api.spreecommerce.org/docs/api-v2/f48cb0bf0aef1-return-a-list-of-shipping-methods).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingMethods.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IShippingMethodsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IShippingMethods>('get', routes.shippingMethodsPath(), token, params)
  }

  /**
   * Returns a single Shipping Method by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/11f348a1ed329-return-a-shipping-method).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingMethods.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IShippingMethodResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShippingMethod>('get', routes.shippingMethodPath(id), token, params)
  }

  /**
   * Creates a new Shipping Method and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/70caa94643fdf-create-a-shipping-method).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingMethods.create({
   *   bearer_token: '7381273269536713689562374856',
   *   shipping_method: {
   *     name: 'DHL Express',
   *     admin_name: 'DHL Area Code D',
   *     code: 'DHL-A-D',
   *     tracking_url: 'dhlexpress.com?tracking=',
   *     display_on: 'both',
   *     tax_category_id: '1',
   *     shipping_category_ids: ['2'],
   *     calculator_attributes: {
   *       type: 'Spree::Calculator::Shipping::FlatPercentItemTotal'
   *     },
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IShippingMethodResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IShippingMethod>('post', routes.shippingMethodsPath(), token, params)
  }

  /**
   * Update selected Shipping Method. See [api docs](https://api.spreecommerce.org/docs/api-v2/e0b39330533fc-update-a-shipping-method).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingMethods.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   shipping_method: {
   *     name: 'DHL Express',
   *     admin_name: 'DHL Area Code D',
   *     code: 'DHL-A-D',
   *     tracking_url: 'dhlexpress.com?tracking=',
   *     display_on: 'both',
   *     tax_category_id: '1',
   *     shipping_category_ids: ['2'],
   *     calculator_attributes: {
   *       type: 'Spree::Calculator::Shipping::FlatPercentItemTotal'
   *     },
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IShippingMethodResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShippingMethod>('patch', routes.shippingMethodPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Shipping Method. See [api docs](https://api.spreecommerce.org/docs/api-v2/2e5be3bc39290-delete-a-shipping-method).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shippingMethods.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.shippingMethodPath(id), token, params)
  }
}
