import { authParams, refreshParams, revokeParams } from '../helpers/auth'
import Http from '../Http'
import type {
  AuthTokenAttr,
  GetTokenOptions,
  RefreshTokenAttr,
  RefreshTokenOptions,
  RevokeTokenAttr,
  RevokeTokenOptions
} from '../interfaces/Authentication'
import type { IOAuthToken, IOAuthTokenResult } from '../interfaces/Token'
import type { EmptyObjectResponse, EmptyObjectResult } from '../interfaces/EmptyObject'
import routes from '../routes'

export default class Authentication extends Http {
  public async getToken(options: GetTokenOptions): Promise<IOAuthTokenResult> {
    return await this.spreeResponse<IOAuthToken>(
      'post',
      routes.oauthTokenPath(),
      {},
      authParams(options as AuthTokenAttr)
    )
  }

  public async refreshToken(options: RefreshTokenOptions): Promise<IOAuthTokenResult> {
    return await this.spreeResponse<IOAuthToken>(
      'post',
      routes.oauthTokenPath(),
      {},
      refreshParams(options as RefreshTokenAttr)
    )
  }

  public async revokeToken(options: RevokeTokenOptions): Promise<EmptyObjectResult> {
    return await this.spreeResponse<EmptyObjectResponse>(
      'post',
      routes.oauthRevokePath(),
      {},
      revokeParams(options as RevokeTokenAttr)
    )
  }
}
