import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'

export interface PageAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    title: string
    content: string
    locale: string
    meta_description: string
    meta_title: string
    slug: string
    type: string
  }

  relationships: IRelationships
}

export interface IPage extends JsonApiSingleResponse {
  data: PageAttr
}

export interface IPages extends JsonApiListResponse {
  data: PageAttr[]
}

export interface IPageResult extends ResultResponse<IPage> { }

export interface IPagesResult extends ResultResponse<IPages> { }
