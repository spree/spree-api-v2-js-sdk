import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface DigitalAsset extends ReadableStream {}

export interface DigitalAssetResult extends ResultResponse<DigitalAsset> {}

export type DownloadOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, { asset_token: string }>
