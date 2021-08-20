import Client from './Client';
import type { OptionalIClientConfig } from './interfaces/ClientConfig';
declare const makeClient: (config: OptionalIClientConfig) => Client;
export default makeClient;
