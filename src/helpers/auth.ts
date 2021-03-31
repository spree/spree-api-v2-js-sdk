import { AuthTokenAttr, AuthTokenParams, RefreshTokenAttr, RefreshTokenParams } from '../interfaces/Authentication'

export const authParams = ({ username, password }: AuthTokenAttr): AuthTokenParams => ({
  username,
  password,
  grant_type: 'password'
})

export const refreshParams = ({ refresh_token }: RefreshTokenAttr): RefreshTokenParams => ({
  refresh_token,
  grant_type: 'refresh_token'
})
