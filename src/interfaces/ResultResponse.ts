import { SpreeSDKError } from '../errors'
import { Result } from './Result'

export interface ResultResponse<SuccessType> extends Result<SpreeSDKError, SuccessType> { }
