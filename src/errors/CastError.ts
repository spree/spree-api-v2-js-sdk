import SpreeSDKError from './SpreeSDKError'

export default class CastError extends SpreeSDKError {
  constructor(name: string) {
    super(name)
    Object.setPrototypeOf(this, CastError.prototype)
    this.name = 'CastError'
  }
}
