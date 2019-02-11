import Http from '../Http'
import { AddStoreCredit, CheckoutClass, NestedAttributes } from '../interfaces/endpoints/CheckoutClass'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Checkout extends Http implements CheckoutClass {
  public async orderNext(token: IToken) {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.checkoutNextPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async orderUpdate(token: IToken, params: NestedAttributes) {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.checkoutPath(), { order: params })
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async advance(token: IToken) {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.checkoutAdvancePath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async addStoreCredits(token: IToken, params: AddStoreCredit) {
    this.spreeTokens = token

    try {
      const res = await this.post(Routes.checkoutAddStoreCreditsPath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeStoreCredits(token: IToken) {
    this.spreeTokens = token

    try {
      const res = await this.post(Routes.checkoutRemoveStoreCreditsPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async paymentMethods(token: IToken) {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.checkoutPaymentMethodsPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async shippingMethods(token: IToken) {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.checkoutShippingMethodsPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }
}
