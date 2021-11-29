import type { AxiosInstance } from 'axios'
import type { CreateFetcher } from '../interfaces/ClientConfig'
import FetchError from '../errors/FetchError'
import { objectToQuerystring } from '../helpers/request'

const createAxiosFetcher: CreateFetcher = (fetcherOptions) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Axios = require('axios')

  const axios: AxiosInstance = Axios.create({
    baseURL: fetcherOptions.host,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: (params) => {
      return objectToQuerystring(params)
    }
  })

  return {
    fetch: async (fetchOptions) => {
      try {
        const { url, params, method, headers, responseParsing } = fetchOptions
        let payload

        switch (method.toUpperCase()) {
          case 'PUT':
          case 'POST':
          case 'DELETE':
          case 'PATCH':
            payload = { data: params }
            break
          default:
            payload = { params }
        }

        let responseType: string

        const isBrowser = RUNTIME_TYPE === 'browser'

        switch (responseParsing) {
          case 'json':
          case 'text':
            responseType = responseParsing
            break
          case 'stream':
            responseType = isBrowser ? 'blob' : 'stream'
            break
          default:
            responseType = undefined
        }

        const response = await axios({
          url,
          method: method.toUpperCase(),
          headers,
          responseType,
          ...payload
        })

        if (responseParsing === 'stream' && isBrowser) {
          return { data: response.data.stream() }
        }

        return { data: response.data }
      } catch (error) {
        if (Axios.isAxiosError(error)) {
          const { response } = error

          if (!response) {
            throw new FetchError(null, error.request, null, error.message)
          }

          const reducedResponse = { ...response }

          // Reduce logging by removing the 'enumerable' flag on some keys in AxiosResponse.
          Object.defineProperties(reducedResponse, {
            config: { enumerable: false },
            data: { enumerable: false },
            headers: { enumerable: false },
            request: { enumerable: false }
          })

          throw new FetchError(reducedResponse, error.request, reducedResponse.data, error.message)
        }

        throw new FetchError(null, null, null, error.message)
      }
    }
  }
}

export default createAxiosFetcher
