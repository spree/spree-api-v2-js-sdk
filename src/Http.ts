import Axios, { AxiosInstance } from 'axios'
import { IToken } from './interfaces/Token'

export default class Http {
  public host: string;
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

  async get(q, params = {}) {
    if (this.spreeTokens) this.setHeaders()

    return await this.axios.get(q, { params: { ...params }})
  }

  async post(q, params = {}) {
    if (this.spreeTokens) this.setHeaders()

    return await this.axios.post(q, params)
  }

  async patch(q, params = {}) {
    if (this.spreeTokens) this.setHeaders()

    return await this.axios.patch(q, params)
  }

  async delete(q, params = {}) {
    if (this.spreeTokens) this.setHeaders()

    return await this.axios.delete(q, params)
  }

  private setHeaders() {
    const currentHeader = this.axios.defaults.headers
    this.axios.defaults.headers = { 
      ...currentHeader, 
      ...this.spreeOrderHeaders 
    }
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
