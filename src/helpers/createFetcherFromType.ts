import MisconfigurationError from '../errors/MisconfigurationError'
import createAxiosFetcher from '../fetchers/createAxiosFetcher'
import createFetchFetcher from '../fetchers/createFetchFetcher'
import type { CreateFetcherConfig, Fetcher, IClientConfig } from '../interfaces/ClientConfig'

const createFetcherFromType = (options: IClientConfig): Fetcher => {
  const fetcherOptions: CreateFetcherConfig = { host: options.host }

  switch (options.fetcherType) {
    case 'axios':
      return createAxiosFetcher(fetcherOptions)
    case 'fetch':
      return createFetchFetcher(fetcherOptions)
    case 'custom':
      return options.createFetcher(fetcherOptions)
    default:
      throw new MisconfigurationError(`${options['fetcher']} is not supported as a fetcher type.`)
  }
}

export default createFetcherFromType
