import Http from '../Http'
import { Routes } from '../routes'

export default class Cart extends Http {
  public spreeOrderToken: string

  public async show(token: string) {
    this.spreeOrderToken = token

    try {
      const res = await this.get(Routes.cartPath(), {}, this.spreeOrderHeaders)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async create() {
    try {
      const res = await this.post(Routes.cartPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async addItem(token: string, params) {
    this.spreeOrderToken = token

    try {
      const res = await this.post(Routes.cartAddItemPath(), params, this.spreeOrderHeaders)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeItem(token: string, id: string) {
    this.spreeOrderToken = token

    try {
      const res = await this.delete(Routes.cartRemoveItemPath(id), {}, this.spreeOrderHeaders)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async emptyCart(token: string) {
    this.spreeOrderToken = token

    try {
      const res = await this.patch(Routes.cartEmptyPath(), {}, this.spreeOrderHeaders)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async setQuantity(token: string, params) {
    this.spreeOrderToken = token

    try {
      const res = await this.patch(Routes.cartSetItemQuantity(), params, this.spreeOrderHeaders)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async applyCouponCode(token: string, params) {
    this.spreeOrderToken = token

    try {
      const res = await this.patch(Routes.cartApplyCodePath(), params, this.spreeOrderHeaders)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeCouponCode(token: string, code: string) {
    this.spreeOrderToken = token

    try {
      const res = await this.delete(Routes.cartRemoveCodePath(code), {}, this.spreeOrderHeaders)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  get spreeOrderHeaders() {
    return {
      'X-Spree-Order-Token': this.spreeOrderToken
    }
  }
}
