import type { AnyOptions } from './AnyOptions'

import type * as RestCheckoutTypes from './endpoints/CheckoutClass'

export * from './endpoints/CheckoutClass'

export type CreateStripeSessionOptions = AnyOptions<true> & {
  success_url: string
  cancel_url: string
}

