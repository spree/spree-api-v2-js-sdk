import Http from '../Http'
import type {
  AddItem,
  CouponCode,
  EstimateShippingMethods,
  SetQuantity,
  AssociateCart,
  ChangeCurrency
} from '../interfaces/endpoints/CartClass'
import type { IEstimatedShippingMethods, IEstimatedShippingMethodsResult } from '../interfaces/EstimatedShippingMethod'
import type { IOrder, IOrderResult } from '../interfaces/Order'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Cart extends Http {
  public async show(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('get', routes.cartPath(), token, params)
  }

  public async create(token?: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('post', routes.cartPath(), token, params)
  }

  public async addItem(token: IToken, params: AddItem): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('post', routes.cartAddItemPath(), token, params)
  }

  public async removeItem(token: IToken, id: string, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveItemPath(id), token, params)
  }

  public async emptyCart(token: IToken, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.cartEmptyPath(), token, params)
  }

  public async remove(token: IToken, params: IQuery = {}): Promise<NoContentResult> {
    return await this.spreeResponse<NoContentResponse>('delete', routes.cartPath(), token, params)
  }

  public async setQuantity(token: IToken, params: SetQuantity): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.cartSetItemQuantity(), token, params)
  }

  public async applyCouponCode(token: IToken, params: CouponCode): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.cartApplyCodePath(), token, params)
  }

  public async removeCouponCode(token: IToken, code: string = null, params: IQuery = {}): Promise<IOrderResult> {
    let route = ''

    if (code !== null) {
      route = routes.cartRemoveCodePath(code)
    } else {
      route = routes.cartRemoveCodePath('')
    }

    return await this.spreeResponse<IOrder>('delete', route, token, params)
  }

  public async removeAllCoupons(token: IToken, params: IQuery): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveAllCoupons(), token, params)
  }

  public async estimateShippingMethods(
    token: IToken,
    params: EstimateShippingMethods
  ): Promise<IEstimatedShippingMethodsResult> {
    return await this.spreeResponse<IEstimatedShippingMethods>(
      'get',
      routes.cartEstimateShippingMethodsPath(),
      token,
      params
    )
  }

  public async associateGuestCart(token: IToken, params: AssociateCart): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.cartAssociatePath(), token, params)
  }

  public async changeCurrency(token: IToken, params: ChangeCurrency): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('patch', routes.cartChangeCurrencyPath(), token, params)
  }
}
