export * from '@spree/core-api-v2-sdk'
import routes, { platformPath } from './routes'
import * as endpoints from './endpoints'
import makeClient from './makeClient'

export { makeClient, endpoints, routes, platformPath }
