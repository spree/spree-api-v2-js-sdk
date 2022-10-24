import type { RawFetchRequest } from '../interfaces/RawFetchRequest'
import type { RawFetchResponse } from '../interfaces/RawFetchResponse'
import SpreeSDKError from './SpreeSDKError'

export default class FetchError extends SpreeSDKError {
  public response?: RawFetchResponse
  public request?: RawFetchRequest
  public data?: any

  constructor(response?: RawFetchResponse, request?: unknown, data?: unknown, message?: string) {
    super(message)
    Object.setPrototypeOf(this, FetchError.prototype)
    this.name = 'FetchError'
    this.response = response
    this.request = request
    this.data = data
  }
}
