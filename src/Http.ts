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
import { ClientBuilderOptions } from './interfaces/ClientBuilderOptions'
import type { Fetcher } from './interfaces/ClientConfig'
import type { ErrorType } from './interfaces/errors/ErrorType'
import type { FetchConfig, HttpMethod, ResponseParsing } from './interfaces/FetchConfig'
import type { JsonApiResponse } from './interfaces/JsonApi'
import type { ResultResponse } from './interfaces/ResultResponse'
import type { BearerToken, IToken } from './interfaces/Token'

export type EndpointOptions = ClientBuilderOptions & {
  fetcher: Fetcher
}

export default class Http {
  public fetcher: Fetcher
  public bearerToken: BearerToken | undefined
  public orderToken: BearerToken | undefined
  public locale: EndpointOptions['locale'] | undefined
  public currency: EndpointOptions['currency'] | undefined

  constructor({ fetcher, bearer_token, order_token, locale, currency }: EndpointOptions) {
    this.fetcher = fetcher
    this.bearerToken = bearer_token
    this.orderToken = order_token
    this.locale = locale
    this.currency = currency
  }

  protected async spreeResponse<ResponseType = JsonApiResponse>(
    method: HttpMethod,
    url: string,
    userTokens: IToken = {},
    userParams: any = {},
    responseParsing: ResponseParsing = 'automatic'
  ): Promise<ResultResponse<ResponseType>> {
    try {
      const headers = this.spreeOrderHeaders(userTokens)
      const params = this.spreeParams(userParams)

      const fetchOptions: FetchConfig = {
        url,
        params,
        method,
        headers,
        responseParsing
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
  protected classifySpreeError(error: FetchError): ErrorType {
    const { error: errorSummary, errors } = error.data

    if (typeof errorSummary === 'string') {
      if (typeof errors === 'object') {
        return 'full'
      }
      return 'basic'
    }
    return 'limited'
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
    const errorType = this.classifySpreeError(error)

    if (errorType === 'full') {
      return new ExpandedSpreeError(error.response, errorSummary, errors)
    } else if (errorType === 'basic') {
      return new BasicSpreeError(error.response, errorSummary)
    } else {
      return new SpreeError(error.response)
    }
  }

  protected spreeOrderHeaders(userTokens: IToken): { [headerName: string]: string } {
    const header = {}
    const tokens = {
      orderToken: this.orderToken,
      bearerToken: this.bearerToken,
      ...userTokens
    }

    if (tokens.orderToken) {
      header['X-Spree-Order-Token'] = tokens.orderToken
    }

    if (tokens.bearerToken) {
      header['Authorization'] = `Bearer ${tokens.bearerToken}`
    }

    return header
  }

  protected spreeParams(userParams: any): Record<string, any> {
    const params = {
      locale: this.locale,
      currency: this.currency,
      ...userParams
    }

    return params
  }
}
