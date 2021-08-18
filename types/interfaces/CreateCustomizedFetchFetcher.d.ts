import type { CreateFetcherConfig, Fetcher } from './ClientConfig';
export declare type CreateFetchFetcherConfig = CreateFetcherConfig & {
    fetch: typeof globalThis.fetch | any;
    requestConstructor: typeof globalThis.Request | any;
};
export declare type CreateCustomizedFetchFetcher = (options: CreateFetchFetcherConfig) => Fetcher;
