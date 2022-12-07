import {
  AuthApplicationTokenAttr,
  AuthApplicationTokenParams,
  AuthUserTokenAttr,
  AuthUserTokenParams,
  AuthRefreshTokenAttr,
  AuthRefreshTokenParams
} from '../interfaces/Authentication'

export const applicationAuthParams = ({ client_id, client_secret }: AuthApplicationTokenAttr): AuthApplicationTokenParams => ({
  client_id,
  client_secret,
  grant_type: 'client_credentials',
  scope: 'admin'
})

export const userAuthParams = ({
  client_id,
  client_secret,
  username,
  password
}: AuthUserTokenAttr): AuthUserTokenParams => ({
  client_id,
  client_secret,
  username,
  password,
  grant_type: 'password',
  scope: 'admin'
})

export const refreshParams = ({ refresh_token }: AuthRefreshTokenAttr): AuthRefreshTokenParams => ({
  refresh_token,
  grant_type: 'refresh_token'
})
