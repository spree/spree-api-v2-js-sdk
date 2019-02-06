import Axios, { AxiosInstance } from 'axios'

export default class Http {
  public host: string;
  public axios: AxiosInstance

  constructor() {
    this.host = process.env.SPREE_HOST || 'http://localhost:3000/api/v2/storefront'

    this.axios = Axios.create({
      baseURL: this.host,
      headers: {
        'Content-Type': 'application/vnd.api+json'
      }
    })
  }

  async get(q, params = {}, headers = null) {
    if (headers) this.setHeaders(headers)

    return await this.axios.get(q, { params: { ...params }})
  }

  async post(q, params = {}, headers = null) {
    if (headers) this.setHeaders(headers)

    return await this.axios.post(q, params)
  }

  async patch(q, params = {}, headers = null) {
    if (headers) this.setHeaders(headers)

    return await this.axios.patch(q, params)
  }

  async delete(q, params = {}, headers = null) {
    if (headers) this.setHeaders(headers)

    return await this.axios.delete(q, params)
  }

  private setHeaders(headers = {}) {
    const currentHeader = this.axios.defaults.headers
    this.axios.defaults.headers = { 
      ...currentHeader, 
      ...headers 
    }
  }
}
