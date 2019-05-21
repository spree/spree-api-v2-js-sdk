import 'reflect-metadata'
import Client, { IClientConfig } from './Client'
import * as errors from './errors'
import Http from './Http'
import Result from './helpers/Result'

const makeClient = (config: IClientConfig = {}) => new Client(config)

export { Client, Http, Result, errors, makeClient }
