import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  IQuery,
  IToken
} from '@spree/core-api-v2-sdk'
import type {
  CreateStripeSessionOptions,
  OrderUpdate,
  AddStoreCredit,
  AddPayment,
  NestedAttributes,
  SelectShippingMethod,
  AddPaymentOptions,
  SelectShippingMethodOptions,
  ShippingRatesOptions,
  PaymentMethodsOptions,
  RemoveStoreCreditsOptions,
  AddStoreCreditOptions,
  CompleteOptions,
  AdvanceOptions,
  OrderUpdateOptions,
  OrderNextOptions
} from '../interfaces/Checkout'
import type { IOrder, IOrderResult } from '../interfaces/Order'
import type { IPaymentMethods, IPaymentMethodsResult } from '../interfaces/PaymentMethod'
import type {
  IShippingMethods,
  IShippingMethodsResult,
  ShippingRates,
  ShippingRatesResult
} from '../interfaces/ShippingMethod'
import {
  StripeCheckoutSessionSummary,
  StripeCheckoutSessionSummaryResult
} from '../interfaces/StripeCheckoutSessionSummary'
import routes from '../routes'

export default class Checkout extends Http {
  /**
   * Updates the Checkout. You can run multiple Checkout updates with different data types. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1NA-update-checkout).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   order: {
   *     email?: string
   *     special_instructions?: string
   *     bill_address_attributes?: {
   *       firstname: string
   *       lastname: string
   *       address1: string
   *       city: string
   *       phone: string
   *       zipcode: string
   *       state_name: string
   *       country_iso: string
   *     }
   *     ship_address_attributes?: {
   *       firstname: string
   *       lastname: string
   *       address1: string
   *       city: string
   *       phone: string
   *       zipcode: string
   *       state_name: string
   *       country_iso: string
   *     }
   *     shipments_attributes?: [
   *       {
   *         selected_shipping_rate_id: number
   *         id: number
   *       }
   *     ]
   *   }
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.checkout.orderUpdate({
   *   bearer_token: '7381273269536713689562374856',
   *   order: {
   *     email: 'john@snow.org'
   *   }
   * })
   *
   * // or guest user
   * const response = await client.checkout.orderUpdate({
   *   order_token: '7381273269536713689562374856',
   *   order: {
   *     email: 'john@snow.org'
   *   }
   * })
   * ```
   */
  public async orderUpdate(options: OrderUpdateOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async orderUpdate(token: IToken, params: OrderUpdate | NestedAttributes): Promise<IOrderResult>
  public async orderUpdate(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutPath(), token, params)
  }

  /**
   * Goes to the next Checkout step. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1NQ-next-checkout-step).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.checkout.orderNext({
   *   bearer_token: '7381273269536713689562374856'
   * })
   *
   * // or guest user
   * const response = await client.checkout.orderNext({
   *   order_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async orderNext(options: OrderNextOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async orderNext(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async orderNext(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutNextPath(), token, params)
  }

  /**
   * Advances Checkout to the furthest Checkout step validation allows, until the Complete step. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1Ng-advance-checkout).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.checkout.advance({
   *   bearer_token: '7381273269536713689562374856'
   * })
   *
   * // or guest user
   * const response = await client.checkout.advance({
   *   order_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async advance(options: AdvanceOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async advance(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async advance(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutAdvancePath(), token, params)
  }

  /**
   * Completes the Checkout. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1Nw-complete-checkout).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.checkout.complete({
   *   bearer_token: '7381273269536713689562374856'
   * })
   *
   * // or guest user
   * const response = await client.checkout.complete({
   *   order_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async complete(options: CompleteOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async complete(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async complete(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutCompletePath(), token, params)
  }

  /**
   * Adds Store Credit payments if a user has any. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1OA-add-store-credit).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   amount: number
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.checkout.addStoreCredits({
   *   bearer_token: '7381273269536713689562374856',
   *   amount: 100
   * })
   *
   * // or guest user
   * const response = await client.checkout.addStoreCredits({
   *   order_token: '7381273269536713689562374856',
   *   amount: 100
   * })
   * ```
   */
  public async addStoreCredits(options: AddStoreCreditOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async addStoreCredits(token: IToken, params: AddStoreCredit): Promise<IOrderResult>
  public async addStoreCredits(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('post', routes.checkoutAddStoreCreditsPath(), token, params)
  }

  /**
   * Remove Store Credit payments if any applied. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1OQ-remove-store-credit).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.checkout.removeStoreCredits({
   *   bearer_token: '7381273269536713689562374856'
   * })
   *
   * // or guest user
   * const response = await client.checkout.removeStoreCredits({
   *   order_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async removeStoreCredits(options: RemoveStoreCreditsOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async removeStoreCredits(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async removeStoreCredits(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('post', routes.checkoutRemoveStoreCreditsPath(), token, params)
  }

  /**
   * Returns a list of available Payment Methods. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2MA-list-payment-methods).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.checkout.paymentMethods({
   *   bearer_token: '7381273269536713689562374856'
   * })
   *
   * // or guest user
   * const response = await client.checkout.paymentMethods({
   *   order_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async paymentMethods(options: PaymentMethodsOptions): Promise<IPaymentMethodsResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async paymentMethods(token: IToken): Promise<IPaymentMethodsResult>
  public async paymentMethods(...allArguments: any[]): Promise<IPaymentMethodsResult> {
    const [tokenOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions], [])

    return await this.spreeResponse<IPaymentMethods>('get', routes.checkoutPaymentMethodsPath(), token, params)
  }

  /**
   * @hidden
   * @deprecated Use {@link shippingRates} instead.
   */
  public async shippingMethods(token: IToken, params: IQuery = {}): Promise<IShippingMethodsResult> {
    return await this.spreeResponse<IShippingMethods>('get', routes.checkoutShippingMethodsPath(), token, params)
  }

  /**
   * Returns a list of available Shipping Rates for Checkout. Shipping Rates are grouped against Shipments. Each checkout cna have multiple Shipments eg. some products are available in stock and will be send out instantly and some needs to be backordered. See [api docs](https://api.spreecommerce.org/docs/api-v2/ed60ec67b7d90-list-shipping-rates).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.checkout.shippingRates({
   *   bearer_token: '7381273269536713689562374856',
   *   include: 'shipping_rates,stock_location'
   * })
   *
   * // or guest user
   * const response = await client.checkout.shippingRates({
   *   order_token: '7381273269536713689562374856',
   *   include: 'shipping_rates,stock_location'
   * })
   * ```
   */
  public async shippingRates(options: ShippingRatesOptions): Promise<ShippingRatesResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async shippingRates(token: IToken, params?: IQuery): Promise<ShippingRatesResult>
  public async shippingRates(...allArguments: any[]): Promise<ShippingRatesResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<ShippingRates>('get', routes.checkoutShippingRatesPath(), token, params)
  }

  /**
   * Selects a Shipping Method for Shipment(s). See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MjY1NTc1NzY-selects-shipping-method-for-shipment-s).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   shipping_method_id: string
   *   shipment_id?: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.checkout.selectShippingMethod({
   *   bearer_token: '7381273269536713689562374856',
   *   shipping_method_id: '42'
   * })
   * ```
   */
  public async selectShippingMethod(options: SelectShippingMethodOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async selectShippingMethod(token: IToken, params: SelectShippingMethod): Promise<IOrderResult>
  public async selectShippingMethod(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutSelectShippingMethodPath(), token, params)
  }

  /**
   * Creates new Payment for the current checkout. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MjYyODA2NTY-create-new-payment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   payment_method_id: string
   *   source_id?: string
   *   amount?: number
   *   source_attributes?: {
   *     gateway_payment_profile_id: string
   *     cc_type?: string
   *     last_digits?: string
   *     month?: string
   *     year?: string
   *     name: string
   *   }
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   *
   * // Create new credit card
   * const response = await client.checkout.addPayment({
   *   bearer_token: '7381273269536713689562374856',
   *   payment_method_id: '1',
   *   source_attributes: {
   *     gateway_payment_profile_id: 'card_1JqvNB2eZvKYlo2C5OlqLV7S',
   *     cc_type: 'visa',
   *     last_digits: '1111',
   *     month: '10',
   *     year: '2026',
   *     name: 'John Snow'
   *   }
   * })
   *
   * // Use existing credit card
   * const response = await client.checkout.addPayment({
   *   bearer_token: '7381273269536713689562374856',
   *   payment_method_id: '1',
   *   source_id: '1'
   * })
   *
   * // or guest user
   *
   * // Create new credit card
   * const response = await client.checkout.addPayment({
   *   order_token: '7381273269536713689562374856',
   *   payment_method_id: '1',
   *   source_attributes: {
   *     gateway_payment_profile_id: 'card_1JqvNB2eZvKYlo2C5OlqLV7S',
   *     cc_type: 'visa',
   *     last_digits: '1111',
   *     month: '10',
   *     year: '2026',
   *     name: 'John Snow'
   *   }
   * })
   * ```
   */
  public async addPayment(options: AddPaymentOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async addPayment(token: IToken, addPaymentParams: AddPayment): Promise<IOrderResult>
  public async addPayment(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('post', routes.checkoutAddPaymentPath(), token, params)
  }

  /**
   * @hidden
   */
  public async createStripeSession(options: CreateStripeSessionOptions): Promise<StripeCheckoutSessionSummaryResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<StripeCheckoutSessionSummary>(
      'patch',
      routes.checkoutCreateStripeSessionPath(),
      token,
      params
    )
  }
}
