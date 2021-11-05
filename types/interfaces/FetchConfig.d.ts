export declare type HttpMethod = 'get' | 'GET' | 'delete' | 'DELETE' | 'head' | 'HEAD' | 'options' | 'OPTIONS' | 'post' | 'POST' | 'put' | 'PUT' | 'patch' | 'PATCH' | 'purge' | 'PURGE' | 'link' | 'LINK' | 'unlink' | 'UNLINK';
/**
 * @deprecated Automatic parsing will be removed in the future to ensure the same behavior of different Fetchers.
 */
export declare type AutomaticResponseParsing = 'automatic';
export declare type ResponseParsing = AutomaticResponseParsing | 'text' | 'json' | 'stream';
export declare type FetchConfig = {
    url: string;
    params: {
        [key: string]: any;
    };
    method: HttpMethod;
    headers: {
        [key: string]: string;
    };
    responseParsing: ResponseParsing;
};
