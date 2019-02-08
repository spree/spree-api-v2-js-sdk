import Http from '../Http'
import { AddStoreCredit, CheckoutClass, NestedAttributes } from '../interfaces/endpoints/CheckoutClass'
import { Token } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Checkout extends Http implements CheckoutClass {
  public async orderNext(token: Token) {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.checkoutNextPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async orderUpdate(token: Token, params: NestedAttributes) {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.checkoutPath(), { order: params })
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async advance(token: Token) {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.checkoutAdvancePath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async addStoreCredits(token: Token, params: AddStoreCredit) {
    this.spreeTokens = token

    try {
      const res = await this.post(Routes.checkoutAddStoreCreditsPath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeStoreCredits(token: Token) {
    this.spreeTokens = token

    try {
      const res = await this.post(Routes.checkoutRemoveStoreCreditsPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async paymentMethods(token: Token) {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.checkoutPaymentMethodsPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async shippingMethods(token: Token) {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.checkoutShippingMethodsPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }
}
