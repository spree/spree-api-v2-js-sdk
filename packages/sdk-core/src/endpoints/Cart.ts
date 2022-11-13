import Http from '../Http'
import type {
  AddItem,
  CouponCode,
  EstimateShippingMethods,
  SetQuantity,
  AssociateCart,
  ChangeCurrency,
  EstimateShippingRates
} from '../interfaces/endpoints/CartClass'
import type {
  EstimatedShippingRates,
  EstimatedShippingRatesResult,
  IEstimatedShippingMethods,
  IEstimatedShippingMethodsResult
} from '../interfaces/EstimatedShippingMethod'
import type { IOrder, IOrderResult } from '../interfaces/Order'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'
import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import type {
  AddItemOptions,
  ApplyCouponCodeOptions,
  AssociateGuestCartOptions,
  ChangeCurrencyOptions,
  CreateOptions,
  EmptyCartOptions,
  EstimateShippingRatesOptions,
  RemoveAllCouponsOptions,
  RemoveCouponCodeOptions,
  RemoveItemOptions,
  RemoveOptions,
  SetQuantityOptions,
  ShowOptions
} from '../interfaces/Cart'

export default class Cart extends Http {
  public async show(options: ShowOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async show(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async show(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('get', routes.cartPath(), token, params)
  }

  public async create(options?: CreateOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async create(token?: IToken, params?: IQuery): Promise<IOrderResult>
  public async create(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions = {}, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('post', routes.cartPath(), token, params)
  }

  public async addItem(options: AddItemOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async addItem(token: IToken, params: AddItem): Promise<IOrderResult>
  public async addItem(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('post', routes.cartAddItemPath(), token, params)
  }

  public async removeItem(options: RemoveItemOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async removeItem(token: IToken, id: string, params?: IQuery): Promise<IOrderResult>
  public async removeItem(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalId, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [{ id: positionalId }, tokenOrOptions, positionalParams],
      ['id']
    )

    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveItemPath(id), token, params)
  }

  public async emptyCart(options: EmptyCartOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async emptyCart(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async emptyCart(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.cartEmptyPath(), token, params)
  }

  public async remove(options: RemoveOptions): Promise<NoContentResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async remove(token: IToken): Promise<NoContentResult>
  public async remove(...allArguments: any[]): Promise<NoContentResult> {
    const [tokenOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions], [])

    return await this.spreeResponse<NoContentResponse>('delete', routes.cartPath(), token, params)
  }

  public async setQuantity(options: SetQuantityOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async setQuantity(token: IToken, params: SetQuantity): Promise<IOrderResult>
  public async setQuantity(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.cartSetItemQuantity(), token, params)
  }

  public async applyCouponCode(options: ApplyCouponCodeOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async applyCouponCode(token: IToken, params: CouponCode): Promise<IOrderResult>
  public async applyCouponCode(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.cartApplyCodePath(), token, params)
  }

  public async removeCouponCode(options: RemoveCouponCodeOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async removeCouponCode(token: IToken, code: string, params?: IQuery): Promise<IOrderResult>
  public async removeCouponCode(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalCode = null, positionalParams = {}] = allArguments
    const { code, token, params } = squashAndPreparePositionalArguments(
      [{ code: positionalCode }, tokenOrOptions, positionalParams],
      ['code']
    )

    let route: string

    if (code) {
      route = routes.cartRemoveCodePath(code)
    } else {
      route = routes.cartRemoveAllCoupons()
    }

    return await this.spreeResponse<IOrder>('delete', route, token, params)
  }

  public async removeAllCoupons(options: RemoveAllCouponsOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async removeAllCoupons(token: IToken, params: IQuery): Promise<IOrderResult>
  public async removeAllCoupons(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveAllCoupons(), token, params)
  }

  /**
   * @deprecated Use {@link estimateShippingRates} instead.
   */
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

  public async estimateShippingRates(options: EstimateShippingRatesOptions): Promise<EstimatedShippingRatesResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async estimateShippingRates(
    token: IToken,
    params: EstimateShippingRates
  ): Promise<EstimatedShippingRatesResult>
  public async estimateShippingRates(...allArguments: any[]): Promise<EstimatedShippingRatesResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<EstimatedShippingRates>(
      'get',
      routes.cartEstimateShippingRatesPath(),
      token,
      params
    )
  }

  public async associateGuestCart(options: AssociateGuestCartOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async associateGuestCart(token: IToken, params: AssociateCart): Promise<IOrderResult>
  public async associateGuestCart(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.cartAssociatePath(), token, params)
  }

  public async changeCurrency(options: ChangeCurrencyOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async changeCurrency(token: IToken, params: ChangeCurrency): Promise<IOrderResult>
  public async changeCurrency(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.cartChangeCurrencyPath(), token, params)
  }
}
