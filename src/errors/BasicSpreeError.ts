import { AxiosResponse } from 'axios'
import { SpreeError } from '.'

class BasicSpreeError extends SpreeError {
  public summary: string

  constructor(serverResponse: AxiosResponse, errorsSummary: string) {
    super(serverResponse)
    this.name = 'BasicSpreeError'
    this.summary = errorsSummary
  }
}

export default BasicSpreeError
