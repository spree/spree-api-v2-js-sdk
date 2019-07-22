import { AxiosResponse } from 'axios'
import SpreeSDKError from './SpreeSDKError'

export default class SpreeError extends SpreeSDKError {
  public serverResponse: AxiosResponse

  constructor(serverResponse: AxiosResponse) {
    super(`Spree returned a HTTP ${serverResponse.status} error code`)
    Object.setPrototypeOf(this, SpreeError.prototype)
    this.name = 'SpreeError'
    const reducedServerResponse = { ...serverResponse }
    // Reduce logging by removing the 'enumerable' flag on some keys in AxiosResponse.
    Object.defineProperties(
      reducedServerResponse,
      {
        config: { enumerable: false },
        data: { enumerable: false },
        headers: { enumerable: false },
        request: { enumerable: false }
      }
    )
    this.serverResponse = reducedServerResponse
  }
}
