import * as qs from 'qs'
import FetchError from '../errors/FetchError'
import type { CreateFetcher } from '../interfaces/ClientConfig'
import type { CreateCustomizedFetchFetcher } from '../interfaces/CreateCustomizedFetchFetcher'

// declare const FETCH_TYPE: string
declare const __non_webpack_require__: (module: string) => any

const createCustomizedFetchFetcher: CreateCustomizedFetchFetcher = (fetcherOptions) => {
  const sharedHeaders = { 'Content-Type': 'application/json' }

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
          throw new FetchError(null, request, null, error.message)
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

  if (globalThis.fetch && globalThis.Request) {
    fetch = globalThis.fetch
    Request = globalThis.Request
  } else {
    const nodeFetch = __non_webpack_require__('node-fetch')

    fetch = nodeFetch.default
    Request = nodeFetch.Request
  }

  return createCustomizedFetchFetcher({ fetch, requestConstructor: Request, ...fetcherOptions })
}

export { createCustomizedFetchFetcher }

export default createFetchFetcher
