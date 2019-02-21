import { GET, PATCH, POST } from '../constants'
import Http from '../Http'
import { AddStoreCredit, CheckoutClass, NestedAttributes } from '../interfaces/endpoints/CheckoutClass'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Checkout extends Http implements CheckoutClass {
  public async orderNext(token: IToken) {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.checkoutNextPath())
  }

  public async orderUpdate(token: IToken, params: NestedAttributes) {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.checkoutPath(), params)
  }

  public async advance(token: IToken) {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.checkoutAdvancePath())
  }

  public async addStoreCredits(token: IToken, params: AddStoreCredit) {
    this.spreeTokens = token
    return await this.spreeResponse(POST, Routes.checkoutAddStoreCreditsPath(), params)
  }

  public async removeStoreCredits(token: IToken) {
    this.spreeTokens = token
    return await this.spreeResponse(POST, Routes.checkoutRemoveStoreCreditsPath())
  }

  public async paymentMethods(token: IToken) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.checkoutPaymentMethodsPath())
  }

  public async shippingMethods(token: IToken) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.checkoutShippingMethodsPath())
  }
}
