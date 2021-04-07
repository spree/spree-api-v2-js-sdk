import Client, { IClientConfig } from './Client'

const makeClient = (config: IClientConfig = {}): Client => new Client(config)

export default makeClient
