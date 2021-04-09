import Http from '../Http'
import { AddStoreCredit, NestedAttributes } from '../interfaces/endpoints/CheckoutClass'
import { IOrderResult } from '../interfaces/Order'
import { IPaymentMethodsResult } from '../interfaces/PaymentMethod'
import { IQuery } from '../interfaces/Query'
import { IShippingMethodsResult } from '../interfaces/ShippingMethod'
import { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Checkout extends Http {
  public async orderNext(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return (await this.spreeResponse('patch', routes.checkoutNextPath(), token, params)) as IOrderResult
  }

  public async orderUpdate(token: IToken, params: NestedAttributes): Promise<IOrderResult> {
    return (await this.spreeResponse('patch', routes.checkoutPath(), token, params)) as IOrderResult
  }

  public async advance(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return (await this.spreeResponse('patch', routes.checkoutAdvancePath(), token, params)) as IOrderResult
  }

  public async complete(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return (await this.spreeResponse('patch', routes.checkoutCompletePath(), token, params)) as IOrderResult
  }

  public async addStoreCredits(token: IToken, params: AddStoreCredit): Promise<IOrderResult> {
    return (await this.spreeResponse('post', routes.checkoutAddStoreCreditsPath(), token, params)) as IOrderResult
  }

  public async removeStoreCredits(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return (await this.spreeResponse('post', routes.checkoutRemoveStoreCreditsPath(), token, params)) as IOrderResult
  }

  public async paymentMethods(token: IToken): Promise<IPaymentMethodsResult> {
    return (await this.spreeResponse('get', routes.checkoutPaymentMethodsPath(), token)) as IPaymentMethodsResult
  }

  public async shippingMethods(token: IToken, params: IQuery = {}): Promise<IShippingMethodsResult> {
    return (await this.spreeResponse(
      'get',
      routes.checkoutShippingMethodsPath(),
      token,
      params
    )) as IShippingMethodsResult
  }
}
