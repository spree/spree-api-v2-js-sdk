import SpreeSDKError from './SpreeSDKError'

export default class DocumentRelationshipError extends SpreeSDKError {
  constructor(message: string) {
    super(message)
    Object.setPrototypeOf(this, DocumentRelationshipError.prototype)
    this.name = 'DocumentRelationshipError'
  }
}
