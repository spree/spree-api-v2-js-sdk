import {
  Addresses
} from './endpoints'
import type { CreateFetcherConfig, Fetcher, IClientConfig } from './interfaces/ClientConfig'

class Client {
  public addresses: Addresses

  protected host: string
  protected fetcher: Fetcher

  constructor(customOptions: IClientConfig) {
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

    this.addEndpoints()
  }

  protected addEndpoints(): void {
    this.addresses = this.makeAddresses()
  }

  protected makeAddresses(): Addresses {
    return new Addresses({ fetcher: this.fetcher })
  }
}

export default Client
