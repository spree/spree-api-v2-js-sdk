export default class SpreeSDKError extends Error {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, SpreeSDKError.prototype)
    this.name = 'SpreeSDKError'
  }
}
