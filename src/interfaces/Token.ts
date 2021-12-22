import { ResultResponse } from './ResultResponse'

export interface IToken {
  orderToken?: string
  bearerToken?: string
}

export type RequiredAnyToken = { orderToken: string; bearerToken?: never } | { orderToken?: never; bearerToken: string }

export type OptionalAnyToken =
  | { orderToken?: string; bearerToken?: never }
  | { orderToken?: never; bearerToken?: string }

export interface IOAuthToken {
  access_token: string
  token_type: 'Bearer'
  expires_in: number
  refresh_token: string
  created_at: number
}

export interface IOAuthTokenResult extends ResultResponse<IOAuthToken> {}
