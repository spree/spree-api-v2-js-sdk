import { ResultResponse } from './ResultResponse'

export type BearerToken = string

export type OrderToken = string

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
  orderToken?: OrderToken
  bearerToken?: BearerToken
}

export type RequiredAnyToken =
  | { order_token: OrderToken; bearer_token?: never }
  | { order_token?: never; bearer_token: BearerToken }

export type OptionalAnyToken =
  | { order_token?: OrderToken; bearer_token?: never }
  | { order_token?: never; bearer_token?: BearerToken }

export type RequiredAccountToken = { bearer_token: BearerToken }

export type OptionalAccountToken = { bearer_token?: BearerToken }

export interface IOAuthToken {
  access_token: string
  token_type: 'Bearer'
  expires_in: number
  refresh_token: string
  created_at: number
}

export interface IOAuthTokenResult extends ResultResponse<IOAuthToken> {}
