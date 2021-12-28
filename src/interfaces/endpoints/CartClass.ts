// IMPORTANT: Place all new checkout types inside src/interfaces/Cart instead of this file.
// TODO: Transfer all existing types inside this file to src/interfaces/Cart.

import { IQuery } from '../Query'

/**
 * @deprecated Use {@link AddItemOptions} instead.
 */
export interface AddItem extends IQuery {
  variant_id: string
  quantity: number
  options?: {
    [key: string]: string
  }
}

/**
 * @deprecated Use {@link SetQuantityOptions} instead.
 */
export interface SetQuantity extends IQuery {
  line_item_id: string
  quantity: number
}

/**
 * @deprecated Use {@link ApplyCouponCodeOptions} instead.
 */
export interface CouponCode extends IQuery {
  coupon_code: string
}

/**
 * @deprecated Use {@link EstimateShippingRates} instead.
 */
export interface EstimateShippingMethods extends IQuery {
  country_iso: string
}

/**
 * @deprecated Use {@link EstimateShippingRatesOptions} instead.
 */
export interface EstimateShippingRates extends IQuery {
  country_iso: string
}

/**
 * @deprecated Use {@link AssociateGuestCartOptions} instead.
 */
export interface AssociateCart extends IQuery {
  guest_order_token: string
}

/**
 * @deprecated Use {@link ChangeCurrencyOptions} instead.
 */
export interface ChangeCurrency extends IQuery {
  new_currency: string
}
