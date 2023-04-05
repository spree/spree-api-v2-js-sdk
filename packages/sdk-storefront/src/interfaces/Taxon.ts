import {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  LocalizedSlugs,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface TaxonAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    name: string
    pretty_name: string
    permalink: string
    seo_title: string
    meta_title: string | null
    meta_description: string | null
    meta_keywords: string | null
    left: number
    right: number
    position: number
    depth: number
    is_root: boolean
    is_child: boolean
    is_leaf: string
    localized_slugs: LocalizedSlugs
    updated_at: Date
  }

  relationships: IRelationships
}

export interface ITaxon extends JsonApiSingleResponse {
  data: TaxonAttr
}

export interface ITaxons extends JsonApiListResponse {
  data: TaxonAttr[]
}

export interface ITaxonResult extends ResultResponse<ITaxon> {}

export interface ITaxonsResult extends ResultResponse<ITaxons> {}

export type ListOptions = WithCommonOptions<{ suggestQuery: true }>

export type ShowOptions = WithCommonOptions<{ suggestQuery: true }, { id: string }>
