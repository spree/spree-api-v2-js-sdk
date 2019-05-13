import 'reflect-metadata';
import Client, { IClientConfig } from './Client';
import * as errors from './errors';
import Http from './Http';
import Result from './helpers/Result';
declare const makeClient: (config?: IClientConfig) => Client;
export { Client, Http, Result, errors, makeClient };
