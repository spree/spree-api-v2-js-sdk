import SpreeSDKError from './SpreeSDKError'

export default class NoResponseError extends SpreeSDKError {
  constructor() {
    super('No response received from Spree')
    Object.setPrototypeOf(this, NoResponseError.prototype)
    this.name = 'NoResponseError'
  }
}
