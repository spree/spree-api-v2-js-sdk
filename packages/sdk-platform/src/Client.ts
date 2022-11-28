import type { CreateFetcherConfig, Fetcher, IClientConfig } from './interfaces/ClientConfig'
import { EndpointOptions } from './Http'

interface IEndpoints {
  [key: string]: (x: EndpointOptions) => void
}

class Client {
  protected host: string
  protected fetcher: Fetcher

  constructor(customOptions: IClientConfig, endpoints: IEndpoints) {
    const spreeHostEnvironmentValue: string | null = (globalThis.process && globalThis.process.env.SPREE_HOST) || null

    const defaultOptions: Partial<IClientConfig> = {
      host: spreeHostEnvironmentValue || 'http://localhost:3000/'
    }

    const options: IClientConfig = {
      ...defaultOptions,
      ...customOptions
    }

    const fetcherOptions: CreateFetcherConfig = { host: options.host }

    this.fetcher = options.createFetcher(fetcherOptions)

    for (const endpoint in endpoints) {
      this[endpoint] = new endpoints[endpoint]({ fetcher: this.fetcher })
    }
  }
}

export default Client
