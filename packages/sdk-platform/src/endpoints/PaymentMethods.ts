import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IPaymentMethod,
  IPaymentMethodResult,
  IPaymentMethods,
  IPaymentMethodsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/PaymentMethods'
import routes from '../routes'

export default class PaymentMethods extends Http {
  /**
   * Returns a list of Payment Methods. See [api docs](https://api.spreecommerce.org/docs/api-v2/b6c650dd76e6f-return-a-list-of-payment-methods).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.paymentMethods.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IPaymentMethodsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPaymentMethods>('get', routes.paymentMethodsPath(), token, params)
  }

  /**
   * Returns a single Payment Method by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/1a31b88534317-return-a-payment-method).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.paymentMethods.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IPaymentMethodResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPaymentMethod>('get', routes.paymentMethodPath(id), token, params)
  }

  /**
   * Creates a new Payment Method and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/04952c7820586-create-a-payment-method).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.paymentMethods.create({
   *   bearer_token: '7381273269536713689562374856',
   *   payment_method: {
   *     name: 'Test Payment Method',
   *     active: true,
   *     auto_capture: true,
   *     description: 'This is a test payment method',
   *     type: 'Spree::Gateway::Bogus',
   *     display_on: 'both',
   *     store_ids: ['2'],
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IPaymentMethodResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPaymentMethod>('post', routes.paymentMethodsPath(), token, params)
  }

  /**
   * Update selected Payment Method. See [api docs](https://api.spreecommerce.org/docs/api-v2/0cc572a21151f-update-a-payment-method).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.paymentMethods.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   payment_method: {
   *     name: 'Test Payment Method',
   *     active: true,
   *     auto_capture: true,
   *     description: 'This is a test payment method',
   *     type: 'Spree::Gateway::Bogus',
   *     display_on: 'both',
   *     store_ids: ['2'],
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IPaymentMethodResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPaymentMethod>('patch', routes.paymentMethodPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Payment Method. See [api docs](https://api.spreecommerce.org/docs/api-v2/112c016e5ba86-delete-a-payment-method).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.paymentMethods.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.paymentMethodPath(id), token, params)
  }
}
