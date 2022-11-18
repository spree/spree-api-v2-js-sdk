import { ResultResponse } from './ResultResponse'

/**
 * @deprecated Use
 * {@link RequiredAnyToken},
 * {@link OptionalAnyToken},
 * {@link RequiredAccountToken},
 * {@link OptionalAccountToken} or
 * {@link WithCommonOptions} specific to the endpoint you're attempting to call
 * instead.
 */
export interface IToken {
  orderToken?: string
  bearerToken?: string
}

export type RequiredAnyToken =
  | { order_token: string; bearer_token?: never }
  | { order_token?: never; bearer_token: string }

export type OptionalAnyToken =
  | { order_token?: string; bearer_token?: never }
  | { order_token?: never; bearer_token?: string }

export type RequiredAccountToken = { bearer_token: string }

export type OptionalAccountToken = { bearer_token?: string }

export interface IOAuthToken {
  access_token: string
  token_type: 'Bearer'
  expires_in: number
  refresh_token: string
  created_at: number
}

export interface IOAuthTokenResult extends ResultResponse<IOAuthToken> {}
