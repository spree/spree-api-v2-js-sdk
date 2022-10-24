import type { JsonApiDocument, JsonApiResponse } from '../interfaces/JsonApi'
import type { RelationType } from '../interfaces/Relationships'
import { DocumentRelationshipError } from '../errors'

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

  const oneOrManyDocumentReferences = (sourceDocument.relationships[relationshipName] || {}).data

  if (!oneOrManyDocumentReferences) {
    throw new DocumentRelationshipError(`Incorrect relationship ${relationshipName}.`)
  }

  let documentReferences: RelationType[]

  if (Array.isArray(oneOrManyDocumentReferences)) {
    documentReferences = oneOrManyDocumentReferences
  } else {
    documentReferences = [oneOrManyDocumentReferences]
  }

  return documentReferences
    .map<DocumentType>((relationType: RelationType) => findDocument<DocumentType>(spreeSuccessResponse, relationType))
    .filter(Boolean)
}

const findSingleRelationshipDocument = <DocumentType extends JsonApiDocument>(
  spreeSuccessResponse: JsonApiResponse,
  sourceDocument: JsonApiDocument,
  relationshipName: string
): DocumentType | null => {
  const documents = findRelationshipDocuments<DocumentType>(spreeSuccessResponse, sourceDocument, relationshipName)

  if (documents.length === 0) {
    return null
  }

  return documents[0]
}

export { findDocument, findRelationshipDocuments, findSingleRelationshipDocument }
