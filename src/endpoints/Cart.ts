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
  public async show(options: ShowOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<IOrder>('get', routes.cartPath(), token, {})
  }

  public async create(options?: CreateOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<IOrder>('post', routes.cartPath(), token, {})
  }

  public async addItem(options: AddItemOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = { variant_id: options.variant_id, quantity: options.quantity }

    return await this.spreeResponse<IOrder>('post', routes.cartAddItemPath(), token, params)
  }

  public async removeItem(options: RemoveItemOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveItemPath(options.id), token, {})
  }

  public async emptyCart(options: EmptyCartOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<IOrder>('patch', routes.cartEmptyPath(), token, {})
  }

  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<NoContentResponse>('delete', routes.cartPath(), token, {})
  }

  public async setQuantity(options: SetQuantityOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = { line_item_id: options.line_item_id, quantity: options.quantity }

    return await this.spreeResponse<IOrder>('patch', routes.cartSetItemQuantity(), token, params)
  }

  public async applyCouponCode(options: ApplyCouponCodeOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = { coupon_code: options.coupon_code }

    return await this.spreeResponse<IOrder>('patch', routes.cartApplyCodePath(), token, params)
  }

  public async removeCouponCode(options: RemoveCouponCodeOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = { coupon_code: options.coupon_code }

    let route: string

    if (options.coupon_code) {
      route = routes.cartRemoveCodePath(options.coupon_code)
    } else {
      route = routes.cartRemoveAllCoupons()
    }

    return await this.spreeResponse<IOrder>('delete', route, token, params)
  }

  public async removeAllCoupons(options: RemoveAllCouponsOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveAllCoupons(), token, {})
  }

  public async estimateShippingRates(options: EstimateShippingRatesOptions): Promise<EstimatedShippingRatesResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      country_iso: options.country_iso
    }

    return await this.spreeResponse<EstimatedShippingRates>(
      'get',
      routes.cartEstimateShippingRatesPath(),
      token,
      params
    )
  }

  public async associateGuestCart(options: AssociateGuestCartOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      guest_order_token: options.guest_order_token
    }

    return await this.spreeResponse<IOrder>('patch', routes.cartAssociatePath(), token, params)
  }

  public async changeCurrency(options: ChangeCurrencyOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      new_currency: options.new_currency
    }

    return await this.spreeResponse<IOrder>('patch', routes.cartChangeCurrencyPath(), token, params)
  }
}
