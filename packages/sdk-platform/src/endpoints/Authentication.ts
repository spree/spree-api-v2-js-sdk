import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  IPlatformToken,
  IPlatformTokenResult,
  IPlatformUserToken,
  IPlatformUserTokenResult
} from '@spree/core-api-v2-sdk'
import type {
  AuthApplicationTokenAttr,
  AuthUserTokenAttr,
  AuthRefreshTokenAttr,
  GetApplicationTokenOptions,
  GetUserTokenOptions,
  RefreshTokenOptions
} from '../interfaces/Authentication'
import {
  applicationAuthParams,
  userAuthParams,
  refreshParams
} from '../helpers/auth'
import routes from '../routes'

export default class Authentication extends Http {
  /**
   * Creates a [Bearer token](../pages/tokens.html#bearer-token) required to authorize Platform API calls using application credentials.
   * 
   * **Success response schema:**
   * ```ts
   * interface res {
   *   access_token: string
   *   token_type: string = 'Bearer'
   *   expires_in: number
   *   scope: string
   *   created_at: number
   * }
   * ```
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const token = await client.authentication.getApplicationToken({
   *   client_id: '7ZY15L7crVZul8i3PZPrnpOkEURK7xnXEWRZdE6K39M',
   *   client_secret: 'cxMZ0tbe604qj_13hibNmc3GDsXUQfpzHt9PvweihFc'
   * })
   * ```
   */
  public async getApplicationToken(options: GetApplicationTokenOptions): Promise<IPlatformTokenResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPlatformToken>(
      'post',
      routes.oauthTokenPath(),
      token,
      applicationAuthParams(params as AuthApplicationTokenAttr)
    )
  }

  /**
   * Creates a [Bearer token](../pages/tokens.html#bearer-token) required to authorize Platform API calls using user credentials.
   * 
   * **Success response schema:**
   * ```ts
   * interface res {
   *   access_token: string
   *   token_type: string = 'Bearer'
   *   expires_in: number
   *   refresh_token: string
   *   scope: string
   *   created_at: number
   * }
   * ```
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const token = await client.authentication.getUserToken({
   *   client_id: '7ZY15L7crVZul8i3PZPrnpOkEURK7xnXEWRZdE6K39M',
   *   client_secret: 'cxMZ0tbe604qj_13hibNmc3GDsXUQfpzHt9PvweihFc',
   *   username: 'spree@example.com',
   *   password: 'spree123'
   * })
   * ```
   */
  public async getUserToken(options: GetUserTokenOptions): Promise<IPlatformUserTokenResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPlatformUserToken>(
      'post',
      routes.oauthTokenPath(),
      token,
      userAuthParams(params as AuthUserTokenAttr)
    )
  }

  /**
   * Refreshes the [Bearer token](../pages/tokens.html#bearer-token) required to authorize OAuth API calls.
   * 
   * **Success response schema:**
   * ```ts
   * interface res {
   *   access_token: string
   *   token_type: string = 'Bearer'
   *   expires_in: number
   *   refresh_token: string
   *   scope: string
   *   created_at: number
   * }
   * ```
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const token = await client.authentication.refreshUserToken({
   *   refresh_token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
   * })
   * ```
   */
  public async refreshUserToken(options: RefreshTokenOptions): Promise<IPlatformUserTokenResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    console.log(refreshParams(params as AuthRefreshTokenAttr));

    return await this.spreeResponse<IPlatformUserToken>(
      'post',
      routes.oauthTokenPath(),
      token,
      refreshParams(params as AuthRefreshTokenAttr)
    )
  }
}
