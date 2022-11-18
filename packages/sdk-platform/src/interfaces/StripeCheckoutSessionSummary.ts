import type { ResultResponse } from './ResultResponse'

export type StripeCheckoutSessionSummary = {
  session_id: string
  session_url: string
}

export type StripeCheckoutSessionSummaryResult = ResultResponse<StripeCheckoutSessionSummary>
