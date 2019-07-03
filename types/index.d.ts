import Client, { IClientConfig } from './Client';
import * as errors from './errors';
import Result from './helpers/Result';
import Http from './Http';
declare const makeClient: (config?: IClientConfig) => Client;
export { Client, Http, Result, errors, makeClient };
