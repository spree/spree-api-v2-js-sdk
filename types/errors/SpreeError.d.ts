import type { RawFetchResponse } from '../interfaces/RawFetchResponse';
import SpreeSDKError from './SpreeSDKError';
export default class SpreeError extends SpreeSDKError {
    serverResponse: RawFetchResponse;
    constructor(serverResponse: RawFetchResponse);
}
