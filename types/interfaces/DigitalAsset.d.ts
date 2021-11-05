import { ResultResponse } from './ResultResponse';
export interface DigitalAsset extends ReadableStream {
}
export interface DigitalAssetResult extends ResultResponse<DigitalAsset> {
}
