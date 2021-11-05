import { IQuery } from '../Query'

export interface AddItem extends IQuery {
  variant_id: string
  quantity: number
  options?: {
    [key: string]: string
  }
}

export interface SetQuantity extends IQuery {
  line_item_id: string
  quantity: number
}

export interface CouponCode extends IQuery {
  coupon_code: string
}

/**
 * @deprecated Use {@link EstimateShippingRates} instead.
 */
export interface EstimateShippingMethods extends IQuery {
  country_iso: string
}

export interface EstimateShippingRates extends IQuery {
  country_iso: string
}

export interface AssociateCart extends IQuery {
  guest_order_token: string
}

export interface ChangeCurrency extends IQuery {
  new_currency: string
}
