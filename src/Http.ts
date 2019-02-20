import Axios, { AxiosInstance } from 'axios'
import { IToken } from './interfaces/Token'

export default class Http {
  public error: any
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

  setErrorMessage(err: string) {
    this.error = { error: Error(err).message }
  }

  get errorMessage() {
    throw this.error
    return this.error
  }

  async get(q, params = {}) {
    if (this.spreeTokens) this.setHeaders()

    try {
      return await this.axios.get(q, { params: { ...params }})
    } catch (err) { this.setErrorMessage(err) }
  }

  async post(q, params = {}) {
    if (this.spreeTokens) this.setHeaders()

    try {
      return await this.axios.post(q, params)      
    } catch (err) { this.setErrorMessage(err) }
  }

  async patch(q, params = {}) {
    if (this.spreeTokens) this.setHeaders()

    try {
      return await this.axios.patch(q, params)
    } catch (err) { this.setErrorMessage(err) }
  }

  async delete(q, params = {}) {
    if (this.spreeTokens) this.setHeaders()

    try {
      return await this.axios.delete(q, params)
    } catch (err) { this.setErrorMessage(err) }
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
