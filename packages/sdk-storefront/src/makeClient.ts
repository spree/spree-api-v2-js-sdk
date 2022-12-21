import type { IClientConfig } from '@spree/core-api-v2-sdk'
import Client from './Client'

const makeClient = (config: IClientConfig): Client => new Client(config)

export default makeClient
