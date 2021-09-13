import type { JsonApiDocument, JsonApiResponse } from '../interfaces/JsonApi';
import type { RelationType } from '../interfaces/Relationships';
declare const findDocument: <DocumentType_1 extends JsonApiDocument>(spreeSuccessResponse: JsonApiResponse, relationType: RelationType) => DocumentType_1;
declare const findRelationshipDocuments: <DocumentType_1 extends JsonApiDocument>(spreeSuccessResponse: JsonApiResponse, sourceDocument: JsonApiDocument, relationshipName: string) => DocumentType_1[];
declare const findSingleRelationshipDocument: <DocumentType_1 extends JsonApiDocument>(spreeSuccessResponse: JsonApiResponse, sourceDocument: JsonApiDocument, relationshipName: string) => DocumentType_1;
export { findDocument, findRelationshipDocuments, findSingleRelationshipDocument };
