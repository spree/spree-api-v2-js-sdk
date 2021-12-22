import type { AnyOptions } from './AnyOptions'

import type * as RestCheckoutTypes from './endpoints/CheckoutClass'

export * from './endpoints/CheckoutClass'

export type CreateStripeSessionOptions = AnyOptions<{ suggestToken: true }> & {
  success_url: string
  cancel_url: string
}

export type AddPaymentOptions = AnyOptions<{ suggestToken: true; suggestQuery: true }> &
  RestCheckoutTypes.AddFullPayment & {
    source_id?: string
    amount?: number
  }

export type SelectShippingMethodOptions = AnyOptions<{ suggestToken: true; suggestQuery: true }> & {
  shipping_method_id: string
  shipment_id?: string
}

export type ShippingRatesOptions = AnyOptions<{ suggestToken: true; suggestQuery: true }>

export type PaymentMethodsOptions = AnyOptions<{ suggestToken: true }>

export type RemoveStoreCreditsOptions = AnyOptions<{ suggestToken: true; suggestQuery: true }>

export type AddStoreCreditOptions = AnyOptions<{ suggestToken: true; suggestQuery: true }> & {
  amount: number
}

export type CompleteOptions = AnyOptions<{ suggestToken: true; suggestQuery: true }>

export type AdvanceOptions = AnyOptions<{ suggestToken: true; suggestQuery: true }>

export type OrderUpdateOptions = AnyOptions<{ suggestToken: true; suggestQuery: true }> & RestCheckoutTypes.OrderUpdate

export type OrderNextOptions = AnyOptions<{ suggestToken: true; suggestQuery: true }>
