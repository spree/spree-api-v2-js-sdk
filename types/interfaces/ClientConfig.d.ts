import type { FetchConfig } from './FetchConfig';
export declare type FetcherStrategies = 'axios' | 'fetch' | 'custom';
export declare type Fetcher = {
    fetch: (options: FetchConfig) => Promise<{
        data: any;
    }>;
};
export declare type CreateFetcher = (options: CreateFetcherConfig) => Fetcher;
export declare type CreateFetcherConfig = {
    host: string;
};
export declare type FetcherConfig = {
    fetcherType: Exclude<FetcherStrategies, 'custom'>;
} | {
    fetcherType: Extract<FetcherStrategies, 'custom'>;
    createFetcher: CreateFetcher;
};
export declare type IClientConfig = CreateFetcherConfig & FetcherConfig;
export declare type OptionalIClientConfig = IClientConfig | CreateFetcherConfig | FetcherConfig;
