import type { FetchConfig } from './FetchConfig'

export type FetcherStrategies = 'axios' | 'fetch' | 'custom'

export type Fetcher = {
  fetch: (options: FetchConfig) => Promise<{ data: any }>
}

export type CreateFetcher = (options: CreateFetcherConfig) => Fetcher

export type CreateFetcherConfig = {
  host: string
}

export type FetcherConfig =
  | {
      fetcherType: Exclude<FetcherStrategies, 'custom'>
    }
  | {
      fetcherType: Extract<FetcherStrategies, 'custom'>
      createFetcher: CreateFetcher
    }

export type IClientConfig = CreateFetcherConfig & FetcherConfig

export type OptionalIClientConfig = IClientConfig | CreateFetcherConfig | FetcherConfig
