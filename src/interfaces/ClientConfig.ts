import type { FetchConfig } from './FetchConfig'

export type Fetcher = {
  fetch: (options: FetchConfig) => Promise<{ data: any }>
}

export type CreateFetcher = (options: CreateFetcherConfig) => Fetcher

export type CreateFetcherConfig = {
  host: string
}

export type FetcherConfig = {
  createFetcher: CreateFetcher
}

export type IClientConfig = CreateFetcherConfig & FetcherConfig
