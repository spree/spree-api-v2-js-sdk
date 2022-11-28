import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface SectionAttr {
  name: string
  content: any
  settings: {
    gutters: string
  },
  fit: string
  destination: string
  type: string
  position: number
  linked_resource_type: string
  created_at: string
  updated_at: string
}

export interface SectionData extends JsonApiDocument {
  type: string
  id: string
  attributes: SectionAttr
  relationships: IRelationships
}

export interface PageParams {
  cms_page: {
    name: string
    cms_page_id: string
    type: string
    linked_resource_type: string
    linked_resource_id: string
    fit: string
    position: number
    gutters: string
    button_text: string
    title: string
  }
}

export interface ISection extends JsonApiSingleResponse {
  data: SectionData
}

export interface ISections extends JsonApiListResponse {
  data: SectionData[]
}

export interface ISectionResult extends ResultResponse<ISection> {}

export interface ISectionsResult extends ResultResponse<ISections> {}

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
