import { WithCommonOptions } from '@spree/core-api-v2-sdk'

export interface AuthApplicationTokenAttr {
  client_id: string
  client_secret: string
}

export interface AuthUserTokenAttr extends AuthApplicationTokenAttr {
  username: string
  password: string
}

export interface AuthRefreshTokenAttr {
  refresh_token: string
}

export interface AuthApplicationTokenParams {
  grant_type: 'client_credentials'
  scope: 'admin'
  client_id: string
  client_secret: string
}

export interface AuthUserTokenParams {
  grant_type: 'password'
  scope: 'admin'
  client_id: string
  client_secret: string
  username: string
  password: string
}

export interface AuthRefreshTokenParams {
  grant_type: 'refresh_token'
  refresh_token: string
}

export type GetApplicationTokenOptions = WithCommonOptions<null, AuthApplicationTokenAttr>

export type GetUserTokenOptions = WithCommonOptions<null, AuthUserTokenAttr>

export type RefreshTokenOptions = WithCommonOptions<null, AuthRefreshTokenAttr>
