import Axios, { AxiosInstance } from 'axios'
import { IToken } from './interfaces/Token'

export default class Http {
  public host: string
  public spreeTokens: IToken
  public axios: AxiosInstance

  constructor() {
    this.host = process.env.SPREE_HOST || 'http://localhost:3000/'

    this.axios = Axios.create({
      baseURL: this.host + 'api/v2/storefront',
      headers: {
        'Content-Type': 'application/vnd.api+json'
      }
    })
  }

  async spreeResponse(method: string, route: string, params: any = {}) {
    if (this.spreeTokens) this.setHeaders()

    try {
      const res = await this.axios[method](route, { params })
      return res.data
    } catch (err) {
      this.errorMessage(err)
    }
  }

  private setHeaders() {
    const currentHeader = this.axios.defaults.headers
    this.axios.defaults.headers = { 
      ...currentHeader, 
      ...this.spreeOrderHeaders 
    }
  }

  errorMessage(err: string) {
    throw { error: Error(err).message }
  }

  get spreeOrderHeaders() {
    let header = {}

    if (this.spreeTokens.orderToken) {
      header['X-Spree-Order-Token'] = this.spreeTokens.orderToken
    }

    if (this.spreeTokens.bearerToken) {
      header['Authorization'] = `Bearer ${this.spreeTokens.bearerToken}`
    }

    return header
  }
}
