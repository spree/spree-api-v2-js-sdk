import Client from './Client'
import type { IClientConfig } from './interfaces/ClientConfig'

const makeClient = (config: IClientConfig): Client => new Client(config)

export default makeClient
