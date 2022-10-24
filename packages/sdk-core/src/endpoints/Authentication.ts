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
import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'

export default class Authentication extends Http {
  public async getToken(options: GetTokenOptions): Promise<IOAuthTokenResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async getToken(params: AuthTokenAttr): Promise<IOAuthTokenResult>
  public async getToken(...allArguments: any[]): Promise<IOAuthTokenResult> {
    const [paramsOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<IOAuthToken>(
      'post',
      routes.oauthTokenPath(),
      token,
      authParams(params as AuthTokenAttr)
    )
  }

  public async refreshToken(options: RefreshTokenOptions): Promise<IOAuthTokenResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async refreshToken(params: RefreshTokenAttr): Promise<IOAuthTokenResult>
  public async refreshToken(...allArguments: any[]): Promise<IOAuthTokenResult> {
    const [paramsOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<IOAuthToken>(
      'post',
      routes.oauthTokenPath(),
      token,
      refreshParams(params as RefreshTokenAttr)
    )
  }

  public async revokeToken(optons: RevokeTokenOptions): Promise<EmptyObjectResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async revokeToken(params: RevokeTokenAttr): Promise<EmptyObjectResult>
  public async revokeToken(...allArguments: any[]): Promise<EmptyObjectResult> {
    const [paramsOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<EmptyObjectResponse>(
      'post',
      routes.oauthRevokePath(),
      token,
      revokeParams(params as RevokeTokenAttr)
    )
  }
}
