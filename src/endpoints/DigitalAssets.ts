import Http from '../Http'
import routes from '../routes'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import type { DigitalAsset, DigitalAssetResult } from '../interfaces/DigitalAsset'

export default class DigitalAssets extends Http {
  public async download(token: IToken, assetToken: string, params: IQuery = {}): Promise<DigitalAssetResult> {
    return await this.spreeResponse<DigitalAsset>(
      'get',
      routes.digitalAssetsDownloadPath(assetToken),
      token,
      params,
      'stream'
    )
  }
}
