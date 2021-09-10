import type { JsonApiDocument, JsonApiResponse } from '../interfaces/JsonApi'
import type { RelationType } from '../interfaces/Relationships'
import { SpreeSDKError } from '../errors'

const findDocument = <DocumentType extends JsonApiDocument>(
  spreeSuccessResponse: JsonApiResponse,
  relationType: RelationType
): DocumentType | null => {
  if (!spreeSuccessResponse.included) {
    return null
  }

  return (
    (spreeSuccessResponse.included.find(
      (includedObject) => includedObject.type === relationType.type && includedObject.id === relationType.id
    ) as DocumentType) || null
  )
}

const findRelationshipDocuments = <DocumentType extends JsonApiDocument>(
  spreeSuccessResponse: JsonApiResponse,
  sourceDocument: JsonApiDocument,
  relationshipName: string
): DocumentType[] => {
  if (!spreeSuccessResponse.included) {
    return []
  }

  const oneOrManyDocumentReferences = sourceDocument.relationships[relationshipName]?.data
  let documentReferences: RelationType[]

  if (!oneOrManyDocumentReferences) {
    throw new SpreeSDKError(`Incorrect relationship ${relationshipName}.`)
  }

  if (Array.isArray(oneOrManyDocumentReferences)) {
    documentReferences = oneOrManyDocumentReferences
  } else {
    documentReferences = [oneOrManyDocumentReferences]
  }

  return documentReferences
    .map<DocumentType>((relationType: RelationType) => findDocument<DocumentType>(spreeSuccessResponse, relationType))
    .filter(Boolean)
}

export { findDocument, findRelationshipDocuments }
