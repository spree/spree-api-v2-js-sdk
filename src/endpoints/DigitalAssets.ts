import Http from '../Http'
import routes from '../routes'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import type { DigitalAsset, DigitalAssetResult, DownloadOptions } from '../interfaces/DigitalAsset'
import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'

export default class DigitalAssets extends Http {
  public async download(options: DownloadOptions): Promise<DigitalAssetResult> {
    return await this.spreeResponse<DigitalAsset>(
      'get',
      routes.digitalAssetsDownloadPath(options.asset_token),
      {},
      {},
      'stream'
    )
  }
}
