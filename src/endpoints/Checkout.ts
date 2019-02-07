import Http from '../Http'
import { AddStoreCredit, CheckoutClass, NestedAttributes } from '../interfaces/endpoints/CheckoutClass'
import { Routes } from '../routes'

export default class Checkout extends Http implements CheckoutClass {
  public async orderNext(token: string) {
    this.spreeToken = token

    try {
      const res = await this.patch(Routes.checkoutNextPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async orderUpdate(token: string, params: NestedAttributes) {
    this.spreeToken = token

    try {
      const res = await this.patch(Routes.checkoutPath(), { order: params })
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async advance(token: string) {
    this.spreeToken = token

    try {
      const res = await this.patch(Routes.checkoutAdvancePath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async addStoreCredits(token: string, params: AddStoreCredit) {
    this.spreeToken = token

    try {
      const res = await this.post(Routes.checkoutAddStoreCreditsPath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeStoreCredits(token: string) {
    this.spreeToken = token

    try {
      const res = await this.post(Routes.checkoutRemoveStoreCreditsPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async paymentMethods(token: string) {
    this.spreeToken = token

    try {
      const res = await this.get(Routes.checkoutPaymentMethodsPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async shippingMethods(token: string) {
    this.spreeToken = token

    try {
      const res = await this.get(Routes.checkoutShippingMethodsPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }
}
