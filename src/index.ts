import Client, { IClientConfig } from './Client'
import * as errors from './errors'
import Result from './helpers/Result'
import Http from './Http'

const makeClient = (config: IClientConfig = {}) => new Client(config)

export { Client, Http, Result, errors, makeClient }
