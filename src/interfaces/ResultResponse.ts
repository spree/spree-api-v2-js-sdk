import { Validation } from 'monet'
import { SpreeSDKError } from '../errors';

export interface ResultResponse<SuccessType> extends Validation<SpreeSDKError, SuccessType> { }
