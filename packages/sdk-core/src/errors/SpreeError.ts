import type { RawFetchResponse } from '../interfaces/RawFetchResponse'
import SpreeSDKError from './SpreeSDKError'

export default class SpreeError extends SpreeSDKError {
  public serverResponse: RawFetchResponse

  constructor(serverResponse: RawFetchResponse) {
    super(`Spree returned a HTTP ${serverResponse.status} error code`)
    Object.setPrototypeOf(this, SpreeError.prototype)
    this.name = 'SpreeError'
    this.serverResponse = serverResponse
  }
}
