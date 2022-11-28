import { ResultResponse } from '@spree/core-api-v2-sdk'
import { WithCommonOptions } from '@spree/core-api-v2-sdk'

export interface DigitalAsset extends ReadableStream {}

export interface DigitalAssetResult extends ResultResponse<DigitalAsset> {}

export type DownloadOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, { asset_token: string }>
