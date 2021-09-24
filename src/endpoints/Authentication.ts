import { authParams, refreshParams, revokeParams } from '../helpers/auth'
import Http from '../Http'
import type { AuthTokenAttr, RefreshTokenAttr, RevokeTokenAttr } from '../interfaces/Authentication'
import type { IOAuthToken, IOAuthTokenResult } from '../interfaces/Token'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class Authentication extends Http {
  public async getToken(params: AuthTokenAttr): Promise<IOAuthTokenResult> {
    return await this.spreeResponse<IOAuthToken>('post', routes.oauthTokenPath(), {}, authParams(params))
  }
  public async refreshToken(params: RefreshTokenAttr): Promise<IOAuthTokenResult> {
    return await this.spreeResponse<IOAuthToken>('post', routes.oauthTokenPath(), {}, refreshParams(params))
  }
  public async revokeToken(params: RevokeTokenAttr): Promise<NoContentResult> {
    return await this.spreeResponse<NoContentResponse>('post', routes.oauthRevokePath(), {}, revokeParams(params))
  }
}
