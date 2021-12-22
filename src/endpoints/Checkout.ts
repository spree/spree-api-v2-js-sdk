import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  CreateStripeSessionOptions,
  OrderUpdate,
  AddStoreCredit,
  AddPayment,
  NestedAttributes,
  SelectShippingMethod
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
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Checkout extends Http {
  public async orderNext(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.checkoutNextPath(), token, params)
  }

  public async orderUpdate(token: IToken, params: OrderUpdate | NestedAttributes): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.checkoutPath(), token, params)
  }

  public async advance(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.checkoutAdvancePath(), token, params)
  }

  public async complete(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.checkoutCompletePath(), token, params)
  }

  public async addStoreCredits(token: IToken, params: AddStoreCredit): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('post', routes.checkoutAddStoreCreditsPath(), token, params)
  }

  public async removeStoreCredits(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('post', routes.checkoutRemoveStoreCreditsPath(), token, params)
  }

  public async paymentMethods(token: IToken): Promise<IPaymentMethodsResult> {
    return await this.spreeResponse<IPaymentMethods>('get', routes.checkoutPaymentMethodsPath(), token)
  }

  /**
   * @deprecated Use {@link shippingRates} instead.
   */
  public async shippingMethods(token: IToken, params: IQuery = {}): Promise<IShippingMethodsResult> {
    return await this.spreeResponse<IShippingMethods>('get', routes.checkoutShippingMethodsPath(), token, params)
  }

  public async shippingRates(token: IToken, params: IQuery = {}): Promise<ShippingRatesResult> {
    return await this.spreeResponse<ShippingRates>('get', routes.checkoutShippingRatesPath(), token, params)
  }

  public async selectShippingMethod(token: IToken, params: SelectShippingMethod): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.checkoutSelectShippingMethodPath(), token, params)
  }

  public async addPayment(token: IToken, addPaymentParams: AddPayment): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('post', routes.checkoutAddPaymentPath(), token, addPaymentParams)
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
