import { DELETE, GET, PATCH, POST } from '../constants'
import Http from '../Http'
import { AddItem, CartClass, CouponCode, SetQuantity } from '../interfaces/endpoints/CartClass'
import { IOrder } from '../interfaces/Order'
import { IToken } from '../interfaces/Token'
import { IQuery } from '../interfaces/Query'
import { Routes } from '../routes'

export default class Cart extends Http implements CartClass {
  public async show(token: IToken, params: IQuery = {}): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.cartPath(), params)
  }

  public async create(token?: IToken, params: IQuery = {}): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(POST, Routes.cartPath(), params)
  }

  public async addItem(token: IToken, params: AddItem): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(POST, Routes.cartAddItemPath(), params)
  }

  public async removeItem(token: IToken, id: string, params: IQuery = {}): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(DELETE, Routes.cartRemoveItemPath(id), params)
  }

  public async emptyCart(token: IToken, params: IQuery = {}): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.cartEmptyPath(), params)
  }

  public async setQuantity(token: IToken, params: SetQuantity): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.cartSetItemQuantity(), params)
  }

  public async applyCouponCode(token: IToken, params: CouponCode): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.cartApplyCodePath(), params)
  }

  public async removeCouponCode(token: IToken, code: string, params: IQuery = {}): Promise<IOrder> {
    this.spreeTokens = token
    return await this.spreeResponse(PATCH, Routes.cartRemoveCodePath(code), params)
  }
}
