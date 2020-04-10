import Http from '../Http'
import { AddStoreCredit, NestedAttributes } from '../interfaces/endpoints/CheckoutClass'
import { IOrderResult } from '../interfaces/Order'
import { IPaymentMethodsResult } from '../interfaces/PaymentMethod'
import { IQuery } from '../interfaces/Query'
import { IShippingMethodsResult } from '../interfaces/ShippingMethod'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Checkout extends Http {
  public async orderNext(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse('patch', Routes.checkoutNextPath(), token, params) as IOrderResult
  }

  public async orderUpdate(token: IToken, params: NestedAttributes): Promise<IOrderResult> {
    return await this.spreeResponse('patch', Routes.checkoutPath(), token, params) as IOrderResult
  }

  public async advance(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse('patch', Routes.checkoutAdvancePath(), token, params) as IOrderResult
  }

  public async complete(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse('patch', Routes.checkoutCompletePath(), token, params) as IOrderResult
  }

  public async addStoreCredits(token: IToken, params: AddStoreCredit): Promise<IOrderResult>  {
    return await this.spreeResponse('post', Routes.checkoutAddStoreCreditsPath(), token, params) as IOrderResult
  }

  public async removeStoreCredits(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse('post', Routes.checkoutRemoveStoreCreditsPath(), token, params) as IOrderResult
  }

  public async paymentMethods(token: IToken): Promise<IPaymentMethodsResult> {
    return await this.spreeResponse('get', Routes.checkoutPaymentMethodsPath(), token) as IPaymentMethodsResult
  }

  public async shippingMethods(token: IToken, params: IQuery = {}): Promise<IShippingMethodsResult> {
    return await this.spreeResponse('get', Routes.checkoutShippingMethodsPath(), token, params) as IShippingMethodsResult
  }
}
