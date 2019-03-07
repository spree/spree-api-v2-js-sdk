import { DELETE, GET, PATCH, POST } from '../constants'
import Http from '../Http'
import { AddItem, CartClass, CouponCode, SetQuantity } from '../interfaces/endpoints/CartClass'
import { IOrder } from '../interfaces/Order'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Cart extends Http implements CartClass {
  public async show(token: IToken, params: IQuery = {}): Promise<IOrder> {
    return await this.spreeResponse(GET, Routes.cartPath(), token, params)
  }

  public async create(token?: IToken, params: IQuery = {}): Promise<IOrder> {
    return await this.spreeResponse(POST, Routes.cartPath(), token, params)
  }

  public async addItem(token: IToken, params: AddItem): Promise<IOrder> {
    return await this.spreeResponse(POST, Routes.cartAddItemPath(), token, params)
  }

  public async removeItem(token: IToken, id: string, params: IQuery = {}): Promise<IOrder> {
    return await this.spreeResponse(DELETE, Routes.cartRemoveItemPath(id), token, params)
  }

  public async emptyCart(token: IToken, params: IQuery = {}): Promise<IOrder> {
    return await this.spreeResponse(PATCH, Routes.cartEmptyPath(), token, params)
  }

  public async setQuantity(token: IToken, params: SetQuantity): Promise<IOrder> {
    return await this.spreeResponse(PATCH, Routes.cartSetItemQuantity(), token, params)
  }

  public async applyCouponCode(token: IToken, params: CouponCode): Promise<IOrder> {
    return await this.spreeResponse(PATCH, Routes.cartApplyCodePath(), token, params)
  }

  public async removeCouponCode(token: IToken, code: string, params: IQuery = {}): Promise<IOrder> {
    return await this.spreeResponse(PATCH, Routes.cartRemoveCodePath(code), token, params)
  }
}
