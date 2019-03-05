import Axios, { AxiosError, AxiosInstance } from 'axios'
import { Validation, Validation as Result } from 'monet'
import qs from 'qs'
import { DELETE, GET } from './constants'
import { BasicSpreeError, ExpandedSpreeError, SpreeError } from './errors'
import { ErrorClass } from './interfaces/errors/ErrorClass'
import { JsonApiResponse } from './interfaces/JsonApi'
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

  protected async spreeResponse(
    method: string, route: string, tokens: IToken = {}, params: any = {}
  ): Promise<Validation<SpreeError, JsonApiResponse>> {
    try {
      let res
      const reqFunc = this.axios[method]
      const headers = this.spreeOrderHeaders(tokens)

      if (method === GET || method === DELETE) {
        res = await reqFunc(route, { params, headers })
      } else {
        res = await reqFunc(route, params, { headers })
      }

      return Result.success(res.data)
    } catch (error) {
      return Result.fail(this.processError(error))
    }
  }

  /**
   * HTTP error code returned by Spree is not indicative of its response shape. This function attempts to figure out the
   * information provided from Spree and use whatever is available.
   */
  private classifyError(error: AxiosError): ErrorClass {
    const { error: errorSummary, errors } = error.response.data

    if (typeof errorSummary === 'string') {
      if (typeof errors === 'object') {
        return ErrorClass.FULL
      }
      return ErrorClass.BASIC
    }
    return ErrorClass.LIMITED
  }

  private processError(error: AxiosError): SpreeError {
    const { error: errorSummary, errors } = error.response.data
    const errorClass = this.classifyError(error)

    if (errorClass === ErrorClass.FULL) {
      return new ExpandedSpreeError(error.response, errorSummary, errors)
    } else if (errorClass === ErrorClass.BASIC) {
      return new BasicSpreeError(error.response, errorSummary)
    } else {
      return new SpreeError(error.response)
    }
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
