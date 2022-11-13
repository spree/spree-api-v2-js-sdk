import { Errors, FieldErrors } from '../interfaces/errors/Errors'
import type { RawFetchResponse } from '../interfaces/RawFetchResponse'
import BasicSpreeError from './BasicSpreeError'

export default class ExpandedSpreeError extends BasicSpreeError {
  public errors: Errors

  constructor(serverResponse: RawFetchResponse, errorsSummary: string, errors: { [fieldPath: string]: FieldErrors }) {
    super(serverResponse, errorsSummary)
    Object.setPrototypeOf(this, ExpandedSpreeError.prototype)
    this.name = 'ExpandedSpreeError'
    this.errors = Object.keys(errors).reduce((acc, fieldPath) => {
      const keys = fieldPath.split('.')
      let key = keys.shift()
      let node = acc

      while (key) {
        if (!node[key]) {
          if (keys.length === 0) {
            node[key] = errors[fieldPath]
          } else {
            node[key] = {}
          }
        }

        node = node[key]
        key = keys.shift()
      }

      return acc
    }, {})
  }

  /**
   * @deprecated This method will be removed in future versions.
   * Use optional chaining, lodash/get, Final Form's getIn or another
   * 3rd party library to recreate the behavior of this method.
   */
  public getErrors(path: string[]): Errors | FieldErrors | null {
    let pathPartIndex = 0
    let node: any = this.errors
    let pathPossible = true

    while (pathPartIndex < path.length && pathPossible) {
      const pathPart = path[pathPartIndex]

      if (!(pathPart in Object(node))) {
        pathPossible = false
      } else {
        node = node[pathPart]
        pathPartIndex += 1
      }
    }

    if (!pathPossible) {
      return null
    }

    return node
  }
}
