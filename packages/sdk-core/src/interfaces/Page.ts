import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface PageAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    title: string
    content: string
    locale: string
    meta_description: string | null
    meta_title: string | null
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

export interface IPageResult extends ResultResponse<IPage> {}

export interface IPagesResult extends ResultResponse<IPages> {}

export type ListOptions = WithCommonOptions<{ suggestQuery: true }>

export type ShowOptions = WithCommonOptions<{ suggestQuery: true }, { id: string }>
