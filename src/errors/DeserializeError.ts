import SpreeSDKError from './SpreeSDKError'

export default class DeserializeError extends SpreeSDKError {
  constructor(name: string) {
    super(name)
    Object.setPrototypeOf(this, DeserializeError.prototype)
    this.name = 'DeserializeError'
  }
}
