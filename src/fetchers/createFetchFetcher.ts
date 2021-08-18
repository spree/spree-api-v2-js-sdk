import * as qs from 'qs'
import { SpreeSDKError } from '../errors'
import FetchError from '../errors/FetchError'
import type { CreateFetcher } from '../interfaces/ClientConfig'
import type { CreateCustomizedFetchFetcher } from '../interfaces/CreateCustomizedFetchFetcher'

declare const FETCH_TYPE: string

const createCustomizedFetchFetcher: CreateCustomizedFetchFetcher = (fetcherOptions) => {
  const sharedHeaders = {
    'Content-Type': 'application/json'
  }

  const { host, fetch, requestConstructor } = fetcherOptions

  return {
    fetch: async (fetchOptions) => {
      try {
        const { url, params, method, headers } = fetchOptions
        const absoluteUrl = new URL(url, host)
        let payload

        switch (method.toUpperCase()) {
          case 'PUT':
          case 'POST':
          case 'DELETE':
          case 'PATCH':
            payload = { body: JSON.stringify(params) }
            break
          default:
            payload = null
            absoluteUrl.search = qs.stringify(params, { arrayFormat: 'brackets' })
        }

        const request = new requestConstructor(absoluteUrl.toString(), {
          method: method.toUpperCase(),
          headers: { ...sharedHeaders, ...headers },
          ...payload
        })

        try {
          const response = await fetch(request)
          const data = await response.json()

          if (!response.ok) {
            // Use the "traditional" approach and reject non 2xx responses.
            throw new FetchError(response, request, data)
          }

          return { data }
        } catch (error) {
          if (error instanceof TypeError) {
            throw new FetchError(null, request, null)
          }

          throw error
        }
      } catch (error) {
        if (error instanceof FetchError) {
          throw error
        }

        throw new FetchError(null, null, null, error.message)
      }
    }
  }
}

const createFetchFetcher: CreateFetcher = (fetcherOptions) => {
  let fetch
  let Request

  if (FETCH_TYPE === 'node-fetch') {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const nodeFetch = require('node-fetch')

    fetch = nodeFetch.default
    Request = fetch.Request
  } else if (FETCH_TYPE === 'browser-native') {
    fetch = globalThis.fetch
    Request = globalThis.Request
  } else {
    throw new SpreeSDKError(`FETCH_TYPE equal ${FETCH_TYPE} not recognized.`)
  }

  return createCustomizedFetchFetcher({ fetch, requestConstructor: Request, ...fetcherOptions })
}

export { createCustomizedFetchFetcher }

export default createFetchFetcher
