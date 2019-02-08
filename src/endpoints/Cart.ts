import Http from '../Http'
import { AddItem, CartClass, CouponCode, SetQuantity } from '../interfaces/endpoints/CartClass'
import { Order } from '../interfaces/Order'
import { Token } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Cart extends Http implements CartClass {
  public async show(token: Token): Promise<Order> {
    this.spreeTokens = token

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

  public async addItem(token: Token, params: AddItem): Promise<Order> {
    this.spreeTokens = token

    try {
      const res = await this.post(Routes.cartAddItemPath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeItem(token: Token, id: string): Promise<Order> {
    this.spreeTokens = token

    try {
      const res = await this.delete(Routes.cartRemoveItemPath(id), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async emptyCart(token: Token): Promise<Order> {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.cartEmptyPath(), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async setQuantity(token: Token, params: SetQuantity): Promise<Order> {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.cartSetItemQuantity(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async applyCouponCode(token: Token, params: CouponCode): Promise<Order> {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.cartApplyCodePath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeCouponCode(token: Token, code: string): Promise<Order> {
    this.spreeTokens = token

    try {
      const res = await this.delete(Routes.cartRemoveCodePath(code), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }
}
