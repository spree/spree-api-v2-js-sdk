import type { RawFetchResponse } from '../interfaces/RawFetchResponse'
import SpreeError from './SpreeError'

class BasicSpreeError extends SpreeError {
  public summary: string

  constructor(serverResponse: RawFetchResponse, errorsSummary: string) {
    super(serverResponse)
    Object.setPrototypeOf(this, BasicSpreeError.prototype)
    this.name = 'BasicSpreeError'
    this.summary = errorsSummary
  }
}

export default BasicSpreeError
