import type { CreateFetcherConfig, Fetcher } from './ClientConfig'

// CreateFetchFetcherConfig allows any type for fetch and requestConstructor.
// This is done to allow fetch implementations not covering the complete, browser-side fetch interface.
// For example, node-fetch doesn't allow some browser-side configuration which would be
// ignored server-side anyway.
export type CreateFetchFetcherConfig = CreateFetcherConfig & {
  fetch: typeof globalThis.fetch | any
  requestConstructor: typeof globalThis.Request | any
}

export type CreateCustomizedFetchFetcher = (options: CreateFetchFetcherConfig) => Fetcher
