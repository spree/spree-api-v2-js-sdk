import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  IQuery,
  IToken
} from '@spree/core-api-v2-sdk'
import routes from '../routes'
import type { DigitalAsset, DigitalAssetResult, DownloadOptions } from '../interfaces/DigitalAsset'

export default class DigitalAssets extends Http {
  /**
   * Returns a stream for downloading a purchased digital product. See [api docs](https://api.spreecommerce.org/docs/api-v2/da2a29db89559-download-a-digital-asset).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   asset_token: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Many NodeJS servers allow piping a stream as the response (`digitalAssetStream.pipe(serverResponse);`).
   *
   * // The below example assumes a logged in user using SpreeSDK in the browser and downloading an image asset.
   *
   * // A digital token can be retrieved from a digital link associated to a line item in a completed order.
   * const digitalToken = '1YjXK36ZRj2w4nxtMkJutTGX'
   *
   * const response = await client.digitalAssets.download({
   *   bearer_token: '7381273269536713689562374856',
   *   asset_token: digitalToken
   * })
   *
   * const digitalAssetStream = response.success()
   *
   * // Append an <img> tag to the page to show the asset on the page.
   * const image = new Image()
   *
   * document.body.appendChild(image)
   *
   * // Convert a stream to a Blob for easier processing.
   * const digitalAssetBlob = await new Response(digitalAssetStream).blob()
   *
   * image.src = URL.createObjectURL(digitalAssetBlob)
   * ```
   */
  public async download(options: DownloadOptions): Promise<DigitalAssetResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async download(token: IToken, assetToken: string, params?: IQuery): Promise<DigitalAssetResult>
  public async download(...allArguments: any[]): Promise<DigitalAssetResult> {
    const [tokenOrOptions, positionalAssetToken, positionalParams = {}] = allArguments
    const { asset_token, token, params } = squashAndPreparePositionalArguments(
      [tokenOrOptions, { asset_token: positionalAssetToken }, positionalParams],
      ['asset_token']
    )

    return await this.spreeResponse<DigitalAsset>(
      'get',
      routes.digitalAssetsDownloadPath(asset_token),
      token,
      params,
      'stream'
    )
  }
}
