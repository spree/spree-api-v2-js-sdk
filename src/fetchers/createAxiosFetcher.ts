import * as qs from 'qs'
import type { AxiosInstance } from 'axios'
import type { CreateFetcher } from '../interfaces/ClientConfig'
import FetchError from '../errors/FetchError'

const createAxiosFetcher: CreateFetcher = (fetcherOptions) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const Axios = require('axios')

  const axios: AxiosInstance = Axios.create({
    baseURL: fetcherOptions.host,
    headers: {
      'Content-Type': 'application/json'
    },
    paramsSerializer: (params) => {
      return qs.stringify(params, { arrayFormat: 'brackets' })
    }
  })

  return {
    fetch: async (fetchOptions) => {
      try {
        const { url, params, method, headers } = fetchOptions
        let payload

        switch (method.toUpperCase()) {
          case 'PUT':
          case 'POST':
          case 'DELETE':
          case 'PATCH':
            payload = { body: params }
            break
          default:
            payload = { params }
        }

        const response = await axios({
          url,
          method: method.toUpperCase(),
          headers,
          ...payload
        })

        return { data: response.data }
      } catch (error) {
        if (Axios.isAxiosError(error)) {
          throw new FetchError(error.response, error.request, error.response.data)
        }

        throw new FetchError(null, null, null, error.message)
      }
    }
  }
}

export default createAxiosFetcher
