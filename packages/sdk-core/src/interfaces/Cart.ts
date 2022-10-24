import type { WithCommonOptions } from './WithCommonOptions'

import type * as RestCheckoutTypes from './endpoints/CartClass'

export * from './endpoints/CartClass'

export type ShowOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type CreateOptions = WithCommonOptions<{
  suggestToken: true
  onlyAccountToken: true
  optionalToken: true
  suggestQuery: true
}>

export type AddItemOptions = WithCommonOptions<
  {
    suggestToken: true
    suggestQuery: true
  },
  RestCheckoutTypes.AddItem
>

export type RemoveItemOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, { id: string }>

export type EmptyCartOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type RemoveOptions = WithCommonOptions<{ suggestToken: true }>

export type SetQuantityOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  RestCheckoutTypes.SetQuantity
>

export type ApplyCouponCodeOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  RestCheckoutTypes.CouponCode
>

export type RemoveCouponCodeOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, { code?: string }>

export type RemoveAllCouponsOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type EstimateShippingRatesOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  RestCheckoutTypes.EstimateShippingRates
>

export type AssociateGuestCartOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  RestCheckoutTypes.AssociateCart
>

export type ChangeCurrencyOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  RestCheckoutTypes.ChangeCurrency
>
