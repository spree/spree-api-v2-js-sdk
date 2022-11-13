import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
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
import type { IQuery } from '../interfaces/Query'
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
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Checkout extends Http {
  public async orderNext(options: OrderNextOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async orderNext(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async orderNext(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutNextPath(), token, params)
  }

  public async orderUpdate(options: OrderUpdateOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async orderUpdate(token: IToken, params: OrderUpdate | NestedAttributes): Promise<IOrderResult>
  public async orderUpdate(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutPath(), token, params)
  }

  public async advance(options: AdvanceOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async advance(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async advance(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutAdvancePath(), token, params)
  }

  public async complete(options: CompleteOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async complete(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async complete(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutCompletePath(), token, params)
  }

  public async addStoreCredits(options: AddStoreCreditOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async addStoreCredits(token: IToken, params: AddStoreCredit): Promise<IOrderResult>
  public async addStoreCredits(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('post', routes.checkoutAddStoreCreditsPath(), token, params)
  }

  public async removeStoreCredits(options: RemoveStoreCreditsOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async removeStoreCredits(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async removeStoreCredits(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('post', routes.checkoutRemoveStoreCreditsPath(), token, params)
  }

  public async paymentMethods(options: PaymentMethodsOptions): Promise<IPaymentMethodsResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async paymentMethods(token: IToken): Promise<IPaymentMethodsResult>
  public async paymentMethods(...allArguments: any[]): Promise<IPaymentMethodsResult> {
    const [tokenOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions], [])

    return await this.spreeResponse<IPaymentMethods>('get', routes.checkoutPaymentMethodsPath(), token, params)
  }

  /**
   * @deprecated Use {@link shippingRates} instead.
   */
  public async shippingMethods(token: IToken, params: IQuery = {}): Promise<IShippingMethodsResult> {
    return await this.spreeResponse<IShippingMethods>('get', routes.checkoutShippingMethodsPath(), token, params)
  }

  public async shippingRates(options: ShippingRatesOptions): Promise<ShippingRatesResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async shippingRates(token: IToken, params?: IQuery): Promise<ShippingRatesResult>
  public async shippingRates(...allArguments: any[]): Promise<ShippingRatesResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<ShippingRates>('get', routes.checkoutShippingRatesPath(), token, params)
  }

  public async selectShippingMethod(options: SelectShippingMethodOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async selectShippingMethod(token: IToken, params: SelectShippingMethod): Promise<IOrderResult>
  public async selectShippingMethod(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.checkoutSelectShippingMethodPath(), token, params)
  }

  public async addPayment(options: AddPaymentOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async addPayment(token: IToken, addPaymentParams: AddPayment): Promise<IOrderResult>
  public async addPayment(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('post', routes.checkoutAddPaymentPath(), token, params)
  }

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
