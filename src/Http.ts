import {
  BasicSpreeError,
  ExpandedSpreeError,
  MisconfigurationError,
  NoResponseError,
  SpreeError,
  SpreeSDKError
} from './errors'
import FetchError from './errors/FetchError'
import * as result from './helpers/result'
import type { Fetcher } from './interfaces/ClientConfig'
import { ErrorClass } from './interfaces/errors/ErrorClass'
import type { FetchConfig, HttpMethod } from './interfaces/FetchConfig'
import type { JsonApiResponse } from './interfaces/JsonApi'
import type { ResultResponse } from './interfaces/ResultResponse'
import type { IToken } from './interfaces/Token'

export type EndpointOptions = {
  fetcher: Fetcher
}

export default class Http {
  public fetcher: Fetcher

  constructor({ fetcher }: EndpointOptions) {
    this.fetcher = fetcher
  }

  protected async spreeResponse<ResponseType = JsonApiResponse>(
    method: HttpMethod,
    url: string,
    tokens: IToken = {},
    params: any = {}
  ): Promise<ResultResponse<ResponseType>> {
    try {
      const headers = this.spreeOrderHeaders(tokens)

      const fetchOptions: FetchConfig = {
        url,
        params,
        method,
        headers
      }

      const response = await this.fetcher.fetch(fetchOptions)

      return result.makeSuccess(response.data)
    } catch (error) {
      return result.makeFail(this.processError(error))
    }
  }

  /**
   * The HTTP error code returned by Spree is not indicative of its response shape.
   * This function determines the information provided by Spree and uses everything available.
   */
  protected classifySpreeError(error: FetchError): ErrorClass {
    const { error: errorSummary, errors } = error.data

    if (typeof errorSummary === 'string') {
      if (typeof errors === 'object') {
        return ErrorClass.FULL
      }
      return ErrorClass.BASIC
    }
    return ErrorClass.LIMITED
  }

  protected processError(error: Error): SpreeSDKError {
    if (error instanceof FetchError) {
      if (error.response) {
        // Error from Spree outside HTTP 2xx codes
        return this.processSpreeError(error)
      }

      if (error.request) {
        // No response received from Spree
        return new NoResponseError()
      }

      // Incorrect request setup
      return new MisconfigurationError(error.message)
    }

    return new SpreeSDKError(error.message)
  }

  protected processSpreeError(error: FetchError): SpreeError {
    const { error: errorSummary, errors } = error.data
    const errorClass = this.classifySpreeError(error)

    if (errorClass === ErrorClass.FULL) {
      return new ExpandedSpreeError(error.response, errorSummary, errors)
    } else if (errorClass === ErrorClass.BASIC) {
      return new BasicSpreeError(error.response, errorSummary)
    } else {
      return new SpreeError(error.response)
    }
  }

  protected spreeOrderHeaders(tokens: IToken): { [headerName: string]: string } {
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
