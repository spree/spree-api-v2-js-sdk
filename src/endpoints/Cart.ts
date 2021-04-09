import Http from '../Http'
import { AddItem, CouponCode, EstimateShippingMethods, SetQuantity } from '../interfaces/endpoints/CartClass'
import { IEstimatedShippingMethodsResult } from '../interfaces/EstimatedShippingMethod'
import { IOrderResult } from '../interfaces/Order'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Cart extends Http {
  public async show(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return (await this.spreeResponse('get', routes.cartPath(), token, params)) as IOrderResult
  }

  public async create(token?: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return (await this.spreeResponse('post', routes.cartPath(), token, params)) as IOrderResult
  }

  public async addItem(token: IToken, params: AddItem): Promise<IOrderResult> {
    return (await this.spreeResponse('post', routes.cartAddItemPath(), token, params)) as IOrderResult
  }

  public async removeItem(token: IToken, id: string, params: IQuery = {}): Promise<IOrderResult> {
    return (await this.spreeResponse('delete', routes.cartRemoveItemPath(id), token, params)) as IOrderResult
  }

  public async emptyCart(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return (await this.spreeResponse('patch', routes.cartEmptyPath(), token, params)) as IOrderResult
  }

  public async setQuantity(token: IToken, params: SetQuantity): Promise<IOrderResult> {
    return (await this.spreeResponse('patch', routes.cartSetItemQuantity(), token, params)) as IOrderResult
  }

  public async applyCouponCode(token: IToken, params: CouponCode): Promise<IOrderResult> {
    return (await this.spreeResponse('patch', routes.cartApplyCodePath(), token, params)) as IOrderResult
  }

  public async removeCouponCode(token: IToken, code: string = null, params: IQuery = {}): Promise<IOrderResult> {
    let route = ''

    if (code !== null) {
      route = routes.cartRemoveCodePath(code)
    } else {
      route = routes.cartRemoveCodePath('')
    }

    return (await this.spreeResponse('delete', route, token, params)) as IOrderResult
  }

  public async estimateShippingMethods(
    token: IToken,
    params: EstimateShippingMethods
  ): Promise<IEstimatedShippingMethodsResult> {
    return (await this.spreeResponse(
      'get',
      routes.cartEstimateShippingMethodsPath(),
      token,
      params
    )) as IEstimatedShippingMethodsResult
  }
}
