import SpreeSDKError from './SpreeSDKError'

export default class MisconfigurationError extends SpreeSDKError {
  constructor(message: string) {
    super(`Incorrect request setup: ${message}`)
    Object.setPrototypeOf(this, new.target.prototype)
    this.name = 'MisconfigurationError'
  }
}
