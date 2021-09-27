import { authParams, refreshParams, revokeParams } from '../helpers/auth'
import Http from '../Http'
import type { AuthTokenAttr, RefreshTokenAttr, RevokeTokenAttr } from '../interfaces/Authentication'
import type { IOAuthToken, IOAuthTokenResult } from '../interfaces/Token'
import type { EmptyObjectResponse, EmptyObjectResult } from '../interfaces/EmptyObject'
import routes from '../routes'

export default class Authentication extends Http {
  public async getToken(params: AuthTokenAttr): Promise<IOAuthTokenResult> {
    return await this.spreeResponse<IOAuthToken>('post', routes.oauthTokenPath(), {}, authParams(params))
  }
  public async refreshToken(params: RefreshTokenAttr): Promise<IOAuthTokenResult> {
    return await this.spreeResponse<IOAuthToken>('post', routes.oauthTokenPath(), {}, refreshParams(params))
  }
  public async revokeToken(params: RevokeTokenAttr): Promise<EmptyObjectResult> {
    return await this.spreeResponse<EmptyObjectResponse>('post', routes.oauthRevokePath(), {}, revokeParams(params))
  }
}
