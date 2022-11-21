import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

export interface PageAttr {
  title: string
  meta_title: string
  content: string
  meta_description: string
  visible: boolean
  slug: string
  type: string
  locale: string
  deleted_at: string
  created_at: string
  updated_at: string
}

export interface PageData extends JsonApiDocument {
  type: string
  id: string
  attributes: PageAttr
  relationships: IRelationships
}

export interface PageParams extends IQuery {
  cms_page: {
    title: string
    type: string
    meta_title: string
    content: string
    meta_description: string
    visible: boolean
    slug: string
    locale: string
  }
}

export interface IPage extends JsonApiSingleResponse {
  data: PageData
}

export interface IPages extends JsonApiListResponse {
  data: PageData[]
}

export interface IPageResult extends ResultResponse<IPage> {}

export interface IPagesResult extends ResultResponse<IPages> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PageParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PageParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
