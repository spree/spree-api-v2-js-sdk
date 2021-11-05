import { SpreeError, SpreeSDKError } from './errors';
import FetchError from './errors/FetchError';
import type { Fetcher } from './interfaces/ClientConfig';
import { ErrorClass } from './interfaces/errors/ErrorClass';
import type { HttpMethod, ResponseParsing } from './interfaces/FetchConfig';
import type { JsonApiResponse } from './interfaces/JsonApi';
import type { ResultResponse } from './interfaces/ResultResponse';
import type { IToken } from './interfaces/Token';
export declare type EndpointOptions = {
    fetcher: Fetcher;
};
export default class Http {
    fetcher: Fetcher;
    constructor({ fetcher }: EndpointOptions);
    protected spreeResponse<ResponseType = JsonApiResponse>(method: HttpMethod, url: string, tokens?: IToken, params?: any, responseParsing?: ResponseParsing): Promise<ResultResponse<ResponseType>>;
    /**
     * The HTTP error code returned by Spree is not indicative of its response shape.
     * This function determines the information provided by Spree and uses everything available.
     */
    protected classifySpreeError(error: FetchError): ErrorClass;
    protected processError(error: Error): SpreeSDKError;
    protected processSpreeError(error: FetchError): SpreeError;
    protected spreeOrderHeaders(tokens: IToken): {
        [headerName: string]: string;
    };
}
