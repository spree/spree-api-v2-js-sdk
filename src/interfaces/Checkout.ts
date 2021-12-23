import type { WithCommonOptions } from './WithCommonOptions'

import type * as RestCheckoutTypes from './endpoints/CheckoutClass'

export * from './endpoints/CheckoutClass'

export type CreateStripeSessionOptions = WithCommonOptions<
  { suggestToken: true },
  {
    success_url: string
    cancel_url: string
  }
>

export type AddPaymentOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  RestCheckoutTypes.AddFullPayment & {
    source_id?: string
    amount?: number
  }
>

export type SelectShippingMethodOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  {
    shipping_method_id: string
    shipment_id?: string
  }
>

export type ShippingRatesOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type PaymentMethodsOptions = WithCommonOptions<{ suggestToken: true }>

export type RemoveStoreCreditsOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type AddStoreCreditOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  {
    amount: number
  }
>

export type CompleteOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type AdvanceOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>

export type OrderUpdateOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  RestCheckoutTypes.OrderUpdate
>

export type OrderNextOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }>
