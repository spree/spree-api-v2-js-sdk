import { GET, PATCH, POST } from '../constants'
import Http from '../Http'
import { AddStoreCredit, CheckoutClass, NestedAttributes } from '../interfaces/endpoints/CheckoutClass'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Checkout extends Http implements CheckoutClass {
  public async orderNext(token: IToken, params: IQuery = {}) {
    return await this.spreeResponse(PATCH, Routes.checkoutNextPath(), token, params)
  }

  public async orderUpdate(token: IToken, params: NestedAttributes) {
    return await this.spreeResponse(PATCH, Routes.checkoutPath(), token, params)
  }

  public async advance(token: IToken, params: IQuery = {}) {
    return await this.spreeResponse(PATCH, Routes.checkoutAdvancePath(), token, params)
  }

  public async complete(token: IToken, params: IQuery = {}) {
    return await this.spreeResponse(PATCH, Routes.checkoutCompletePath(), token, params)
  }

  public async addStoreCredits(token: IToken, params: AddStoreCredit) {
    return await this.spreeResponse(POST, Routes.checkoutAddStoreCreditsPath(), token, params)
  }

  public async removeStoreCredits(token: IToken, params: IQuery = {}) {
    return await this.spreeResponse(POST, Routes.checkoutRemoveStoreCreditsPath(), token, params)
  }

  public async paymentMethods(token: IToken) {
    return await this.spreeResponse(GET, Routes.checkoutPaymentMethodsPath(), token)
  }

  public async shippingMethods(token: IToken) {
    return await this.spreeResponse(GET, Routes.checkoutShippingMethodsPath(), token)
  }
}
