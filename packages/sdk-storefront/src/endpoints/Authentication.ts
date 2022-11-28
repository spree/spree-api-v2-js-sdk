import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  IOAuthToken,
  IOAuthTokenResult,
  EmptyObjectResponse,
  EmptyObjectResult
} from '@spree/core-api-v2-sdk'
import type {
  AuthTokenAttr,
  GetTokenOptions,
  RefreshTokenAttr,
  RefreshTokenOptions,
  RevokeTokenAttr,
  RevokeTokenOptions
} from '../interfaces/Authentication'
import { authParams, refreshParams, revokeParams } from '../helpers/auth'
import routes from '../routes'

export default class Authentication extends Http {
  /**
   * Creates a [Bearer token](../pages/tokens.html#bearer-token) required to authorize OAuth API calls.
   * 
   * **Success response schema:**
   * ```ts
   * interface res {
   *   access_token: string
   *   token_type: string = 'Bearer'
   *   expires_in: number
   *   refresh_token: string
   *   created_at: number
   * }
   * ```
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const token = await client.authentication.getToken({
   *   username: 'spree@example.com',
   *   password: 'spree123'
   * })
   * ```
   */
  public async getToken(options: GetTokenOptions): Promise<IOAuthTokenResult>
  /**
   * @hidden
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
   *   created_at: number
   * }
   * ```
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const token = await client.authentication.refreshToken({
   *   refresh_token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
   * })
   * ```
   */
  public async refreshToken(options: RefreshTokenOptions): Promise<IOAuthTokenResult>
  /**
   * @hidden
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

  /**
   * Revokes a [Bearer token (access token)](../pages/tokens.html#bearer-token) or a refresh token.
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.authentication.revokeToken({
   *   token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
   * })
   * ```
   */
  public async revokeToken(optons: RevokeTokenOptions): Promise<EmptyObjectResult>
  /**
   * @hidden
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