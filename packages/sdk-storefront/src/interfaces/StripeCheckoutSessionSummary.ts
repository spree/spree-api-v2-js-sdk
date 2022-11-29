import type { ResultResponse } from '@spree/core-api-v2-sdk'

export type StripeCheckoutSessionSummary = {
  session_id: string
  session_url: string
}

export type StripeCheckoutSessionSummaryResult = ResultResponse<StripeCheckoutSessionSummary>
