import SpreeSDKError from './SpreeSDKError'

export default class CastError extends SpreeSDKError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, CastError.prototype)
    this.name = 'CastError'
  }
}
