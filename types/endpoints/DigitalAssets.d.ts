import Http from '../Http';
import type { IQuery } from '../interfaces/Query';
import type { IToken } from '../interfaces/Token';
import type { DigitalAssetResult } from '../interfaces/DigitalAsset';
export default class DigitalAssets extends Http {
    download(token: IToken, assetToken: string, params?: IQuery): Promise<DigitalAssetResult>;
}
