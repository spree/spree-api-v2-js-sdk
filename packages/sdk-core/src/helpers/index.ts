// export * from './jsonApi'
// export * from './request'
// export * from './result'
// export * from './squashAndPreparePositionalArguments'
import {
  findDocument, findRelationshipDocuments, findSingleRelationshipDocument
} from './jsonApi'

import {
  objectToQuerystring
} from './request'

import {
  makeSuccess, makeFail, toJson, fromJson, extractSuccess
} from './result'

import {
  squashAndPreparePositionalArguments
} from './squashAndPreparePositionalArguments'

export {
  findDocument,
  findRelationshipDocuments,
  findSingleRelationshipDocument,
  objectToQuerystring,
  makeSuccess,
  makeFail,
  toJson,
  fromJson,
  extractSuccess,
  squashAndPreparePositionalArguments
}