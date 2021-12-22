import type { AnyOptions } from './AnyOptions'

import type * as RestCheckoutTypes from './endpoints/CheckoutClass'

export * from './endpoints/CheckoutClass'

export type CreateStripeSessionOptions = AnyOptions<true> & {
  success_url: string
  cancel_url: string
}

export type AddPaymentOptions = AnyOptions<true, true> &
  RestCheckoutTypes.AddFullPayment & {
    source_id?: string
    amount?: number
  }

export type SelectShippingMethodOptions = AnyOptions<true, true> & {
  shipping_method_id: string
  shipment_id?: string
}

export type ShippingRatesOptions = AnyOptions<true, true>

export type PaymentMethodsOptions = AnyOptions<true>

export type RemoveStoreCreditsOptions = AnyOptions<true, true>

export type AddStoreCreditOptions = AnyOptions<true, true> & {
  amount: number
}

export type CompleteOptions = AnyOptions<true, true>

export type AdvanceOptions = AnyOptions<true, true>

export type OrderUpdateOptions = AnyOptions<true, true> & RestCheckoutTypes.OrderUpdate

export type OrderNextOptions = AnyOptions<true, true>
