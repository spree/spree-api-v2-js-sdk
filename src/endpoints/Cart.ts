import { DELETE, GET, PATCH, POST } from '../constants'
import Http from '../Http'
import { AddItem, CartClass, CouponCode, SetQuantity } from '../interfaces/endpoints/CartClass'
import { IOrderResult } from '../interfaces/Order'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Cart extends Http implements CartClass {
  public async show(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(GET, Routes.cartPath(), token, params) as IOrderResult
  }

  public async create(token?: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(POST, Routes.cartPath(), token, params) as IOrderResult
  }

  public async addItem(token: IToken, params: AddItem): Promise<IOrderResult> {
    return await this.spreeResponse(POST, Routes.cartAddItemPath(), token, params) as IOrderResult
  }

  public async removeItem(token: IToken, id: string, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(DELETE, Routes.cartRemoveItemPath(id), token, params) as IOrderResult
  }

  public async emptyCart(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(PATCH, Routes.cartEmptyPath(), token, params) as IOrderResult
  }

  public async setQuantity(token: IToken, params: SetQuantity): Promise<IOrderResult> {
    return await this.spreeResponse(PATCH, Routes.cartSetItemQuantity(), token, params) as IOrderResult
  }

  public async applyCouponCode(token: IToken, params: CouponCode): Promise<IOrderResult> {
    return await this.spreeResponse(PATCH, Routes.cartApplyCodePath(), token, params) as IOrderResult
  }

  public async removeCouponCode(token: IToken, code: string, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(PATCH, Routes.cartRemoveCodePath(code), token, params) as IOrderResult
  }
}
