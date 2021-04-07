import { authParams, refreshParams } from '../helpers/auth'
import Http from '../Http'
import { AuthTokenAttr, RefreshTokenAttr } from '../interfaces/Authentication'
import { IOAuthTokenResult } from '../interfaces/Token'
import { routes } from '../routes'

export default class Authentication extends Http {
  public async getToken(params: AuthTokenAttr): Promise<IOAuthTokenResult> {
    return (await this.spreeResponse('post', routes.oauthTokenPath(), {}, authParams(params))) as IOAuthTokenResult
  }
  public async refreshToken(params: RefreshTokenAttr): Promise<IOAuthTokenResult> {
    return (await this.spreeResponse('post', routes.oauthTokenPath(), {}, refreshParams(params))) as IOAuthTokenResult
  }
}
