import Client from './Client'
import type { OptionalIClientConfig } from './interfaces/ClientConfig'

const makeClient = (config: OptionalIClientConfig): Client => new Client(config)

export default makeClient
