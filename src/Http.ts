import Axios, { AxiosInstance } from 'axios'
import qs from 'qs'
import { DELETE, GET } from './constants'
import { IToken } from './interfaces/Token'

export default class Http {
  public host: string
  public axios: AxiosInstance

  constructor() {
    this.host = process.env.SPREE_HOST || 'http://localhost:3000/'

    this.axios = Axios.create({
      baseURL: this.host + 'api/v2/storefront',
      headers: {
        'Content-Type': 'application/json'
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      }
    })
  }

  protected async spreeResponse(method: string, route: string, tokens: any = {}, params: any = {}) {
    try {
      let res
      const reqFunc = this.axios[method]
      const headers = this.spreeOrderHeaders(tokens)

      if (method === GET || method === DELETE) {
        res = await reqFunc(route, { params, headers })
      } else {
        res = await reqFunc(route, params, { headers })
      }

      return res.data
    } catch (err) {
      this.errorMessage(err)
    }
  }

  private errorMessage(err: string) {
    throw { error: Error(err).message }
  }

  private spreeOrderHeaders(tokens) {
    const header = {}

    if (tokens.orderToken) {
      header['X-Spree-Order-Token'] = tokens.orderToken
    }

    if (tokens.bearerToken) {
      header['Authorization'] = `Bearer ${tokens.bearerToken}`
    }

    return header
  }
}
