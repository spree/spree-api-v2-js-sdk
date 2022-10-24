import SpreeSDKError from './SpreeSDKError'

export default class DeserializeError extends SpreeSDKError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, DeserializeError.prototype)
    this.name = 'DeserializeError'
  }
}
