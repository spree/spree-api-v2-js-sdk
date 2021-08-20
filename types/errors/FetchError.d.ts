import type { RawFetchRequest } from '../interfaces/RawFetchRequest';
import type { RawFetchResponse } from '../interfaces/RawFetchResponse';
import SpreeSDKError from './SpreeSDKError';
export default class FetchError extends SpreeSDKError {
    response?: RawFetchResponse;
    request?: RawFetchRequest;
    data?: any;
    constructor(response?: RawFetchResponse, request?: unknown, data?: unknown, message?: string);
}
