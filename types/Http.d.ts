import { AxiosInstance } from 'axios';
import { JsonApiResponse } from './interfaces/JsonApi';
import { ResultResponse } from './interfaces/ResultResponse';
import { IToken } from './interfaces/Token';
export default class Http {
    host: string;
    axios: AxiosInstance;
    constructor(host?: string);
    protected spreeResponse(method: string, route: string, tokens?: IToken, params?: any): Promise<ResultResponse<JsonApiResponse>>;
    /**
     * HTTP error code returned by Spree is not indicative of its response shape. This function attempts to figure out the
     * information provided from Spree and use whatever is available.
     */
    private classifyError;
    private processError;
    private processSpreeError;
    private spreeOrderHeaders;
}
