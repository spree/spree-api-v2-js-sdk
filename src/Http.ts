import Axios, { AxiosError, AxiosInstance, AxiosRequestConfig, Method } from 'axios'
import * as qs from 'qs'
import {
  BasicSpreeError, ExpandedSpreeError, MisconfigurationError, NoResponseError, SpreeError, SpreeSDKError
} from './errors'
import Result from './helpers/Result'
import { ErrorClass } from './interfaces/errors/ErrorClass'
import { JsonApiResponse } from './interfaces/JsonApi'
import { ResultResponse } from './interfaces/ResultResponse'
import { IToken } from './interfaces/Token'

export default class Http {
  public host: string
  public axios: AxiosInstance

  constructor(host?: string) {
    this.host = host || process.env.SPREE_HOST || 'http://localhost:3000/'

    this.axios = Axios.create({
      baseURL: this.host,
      headers: {
        'Content-Type': 'application/json'
      },
      paramsSerializer: (params) => {
        return qs.stringify(params, { arrayFormat: 'brackets' })
      }
    })
  }

  protected async spreeResponse<ResponseType = JsonApiResponse>(
    method: Method, url: string, tokens: IToken = {}, params: any = {}
  ): Promise<ResultResponse<ResponseType>> {
    try {
      const headers = this.spreeOrderHeaders(tokens)

      const axiosConfig: AxiosRequestConfig = {
        url,
        params,
        method,
        headers
      }

      const response = await this.axios(axiosConfig)

      return Result.success(response.data)
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

  private processError(error: AxiosError): SpreeSDKError {
    if (error.response) {
      // Error from Spree outside HTTP 2xx codes
      return this.processSpreeError(error)
    } else if (error.request) {
      // No response received from Spree
      return new NoResponseError()
    } else {
      // Incorrect request setup
      return new MisconfigurationError(error.message)
    }
  }

  private processSpreeError(error: AxiosError): SpreeError {
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
