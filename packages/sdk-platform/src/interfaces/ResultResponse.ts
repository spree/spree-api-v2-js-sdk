import type { SpreeSDKError } from '../errors'
import type { Result } from './Result'

export interface ResultResponse<SuccessType> extends Result<SpreeSDKError, SuccessType> {}
