import Client, { IClientConfig } from './Client'
import * as errors from './errors'
import Result from './helpers/Result'
import Http from './Http'
import * as routes from './routes'
import * as endpoints from './endpoints'

const makeClient = (config: IClientConfig = {}) => new Client(config)

export { Client, Http, Result, errors, makeClient, endpoints, routes }
