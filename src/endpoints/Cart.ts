import Http from '../Http'
import { AddItem, CartClass, CouponCode, SetQuantity } from '../interfaces/endpoints/CartClass'
import { IOrder } from '../interfaces/Order'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Cart extends Http implements CartClass {
  public async show(token: IToken): Promise<IOrder> {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.cartPath(), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async create(token?: IToken): Promise<IToken> {
    this.spreeTokens = token

    try {
      const res = await this.post(Routes.cartPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async addItem(token: IToken, params: AddItem): Promise<IOrder> {
    this.spreeTokens = token

    try {
      const res = await this.post(Routes.cartAddItemPath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeItem(token: IToken, id: string): Promise<IOrder> {
    this.spreeTokens = token

    try {
      const res = await this.delete(Routes.cartRemoveItemPath(id), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async emptyCart(token: IToken): Promise<IOrder> {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.cartEmptyPath(), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async setQuantity(token: IToken, params: SetQuantity): Promise<IOrder> {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.cartSetItemQuantity(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async applyCouponCode(token: IToken, params: CouponCode): Promise<IOrder> {
    this.spreeTokens = token

    try {
      const res = await this.patch(Routes.cartApplyCodePath(), params)
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async removeCouponCode(token: IToken, code: string): Promise<IOrder> {
    this.spreeTokens = token

    try {
      const res = await this.delete(Routes.cartRemoveCodePath(code), {})
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }
}
