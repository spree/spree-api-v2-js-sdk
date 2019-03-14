import { AxiosResponse } from 'axios';
import SpreeSDKError from './SpreeSDKError';
export default class SpreeError extends SpreeSDKError {
    serverResponse: AxiosResponse;
    constructor(serverResponse: AxiosResponse);
}
