import type { FetchConfig } from './FetchConfig'
import { AxiosInstance } from 'axios';

export type Fetcher = {
  fetch: (options: FetchConfig) => Promise<{ data: any }>
}

export type CreateFetcher = (options: CreateFetcherConfig) => Fetcher

export type CreateFetcherConfig = {
  host: string
  beforeRequestFunction?(axios?: AxiosInstance): any
}

export type FetcherConfig = {
  createFetcher: CreateFetcher
}


export type IClientConfig = CreateFetcherConfig & FetcherConfig
