import Http from '../Http'
import type { AddStoreCredit, OrderUpdate, AddPayment } from '../interfaces/endpoints/CheckoutClass'
import type { IOrder, IOrderResult } from '../interfaces/Order'
import type { IPaymentMethods, IPaymentMethodsResult } from '../interfaces/PaymentMethod'
import type { IQuery } from '../interfaces/Query'
import type { IShippingMethods, IShippingMethodsResult } from '../interfaces/ShippingMethod'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Checkout extends Http {
  public async orderNext(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.checkoutNextPath(), token, params)
  }

  public async orderUpdate(token: IToken, params: OrderUpdate): Promise<IOrderResult> {
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

  public async shippingMethods(token: IToken, params: IQuery = {}): Promise<IShippingMethodsResult> {
    return await this.spreeResponse<IShippingMethods>('get', routes.checkoutShippingMethodsPath(), token, params)
  }

  public async addPayment(token: IToken, addPaymentParams: AddPayment): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('post', routes.checkoutAddPaymentPath(), token, addPaymentParams)
  }
}
