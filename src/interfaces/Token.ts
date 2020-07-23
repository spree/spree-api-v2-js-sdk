import { ResultResponse } from './ResultResponse'

export interface IToken {
  orderToken?: string
  bearerToken?: string
}

export interface IOAuthToken {
  access_token: string
  token_type: 'Bearer'
  expires_in: number
  refresh_token: string
  created_at: number
}

export interface IOAuthTokenResult extends ResultResponse<IOAuthToken> {}
