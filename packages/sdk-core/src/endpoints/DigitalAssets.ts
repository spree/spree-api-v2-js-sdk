import Http from '../Http'
import routes from '../routes'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import type { DigitalAsset, DigitalAssetResult, DownloadOptions } from '../interfaces/DigitalAsset'
import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'

export default class DigitalAssets extends Http {
  public async download(options: DownloadOptions): Promise<DigitalAssetResult>
  /**
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
