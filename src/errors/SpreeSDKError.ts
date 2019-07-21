export default class SpreeSDKError extends Error {
  constructor(name: string) {
    super(name)
    Object.setPrototypeOf(this, SpreeSDKError.prototype)
  }
}
