import Http from '../Http'
import { AddItem, CartClass, CouponCode, SetQuantity } from '../interfaces/endpoints/CartClass'
import { Order } from '../interfaces/Order'
import { Routes } from '../routes'

export default class Cart extends Http implements CartClass {
  public async show(token: string): Promise<Order> {
    this.spreeToken = token

    try {
      const res = await this.get(Routes.cartPath(), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async create(): Promise<Order> {
    try {
      const res = await this.post(Routes.cartPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async addItem(token: string, params: AddItem): Promise<Order> {
    this.spreeToken = token

    try {
      const res = await this.post(Routes.cartAddItemPath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeItem(token: string, id: string): Promise<Order> {
    this.spreeToken = token

    try {
      const res = await this.delete(Routes.cartRemoveItemPath(id), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async emptyCart(token: string): Promise<Order> {
    this.spreeToken = token

    try {
      const res = await this.patch(Routes.cartEmptyPath(), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async setQuantity(token: string, params: SetQuantity): Promise<Order> {
    this.spreeToken = token

    try {
      const res = await this.patch(Routes.cartSetItemQuantity(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async applyCouponCode(token: string, params: CouponCode): Promise<Order> {
    this.spreeToken = token

    try {
      const res = await this.patch(Routes.cartApplyCodePath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeCouponCode(token: string, code: string): Promise<Order> {
    this.spreeToken = token

    try {
      const res = await this.delete(Routes.cartRemoveCodePath(code), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }
}
