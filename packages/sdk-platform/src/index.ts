export * from '@spree/core-api-v2-sdk'
import routes, { platformPath } from './routes'
import * as endpoints from './endpoints'
import makeClient, { Client, Endpoints } from './makeClient'

export { makeClient, endpoints, routes, platformPath }
export type { Client, Endpoints }
