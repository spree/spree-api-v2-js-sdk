import { DELETE, GET, PATCH, POST } from '../constants'
import Http from '../Http'
import { AddItem, CartClass, CouponCode, SetQuantity } from '../interfaces/endpoints/CartClass'
import { IOrder } from '../interfaces/Order'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Cart extends Http implements CartClass {
  public async show(token: IToken): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.cartPath())
  }

  public async create(token?: IToken): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(POST, Routes.cartPath())
  }

  public async addItem(token: IToken, params: AddItem): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(POST, Routes.cartAddItemPath(), params)
  }

  public async removeItem(token: IToken, id: string): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(DELETE, Routes.cartRemoveItemPath(id))
  }

  public async emptyCart(token: IToken): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.cartEmptyPath())
  }

  public async setQuantity(token: IToken, params: SetQuantity): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.cartSetItemQuantity(), params)
  }

  public async applyCouponCode(token: IToken, params: CouponCode): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.cartApplyCodePath(), params)
  }

  public async removeCouponCode(token: IToken, code: string): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.cartRemoveCodePath(code))
  }
}
