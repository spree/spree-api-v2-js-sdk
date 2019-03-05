export default class SpreeError extends Error {
  public serverResponse

  constructor(serverResponse) {
    super(`Spree returned a HTTP ${serverResponse.status} error code`)
    this.name = 'SpreeError'
    this.serverResponse = serverResponse
  }
}
