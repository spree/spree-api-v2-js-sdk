import type { WithCommonOptions } from './WithCommonOptions'
import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'

export type ShowOptions = WithCommonOptions<
  { suggestQuery: true },
  { brand_permalink: string }
>

export interface BrandAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    description: string | null
    header_url: string | null
    logo_url: string | null
    meta_description: string | null
    meta_keywords: string | null
    meta_title: string | null
    name: string
    seo_title: string
    slug: string
    updated_at: string
  }
  relationships: IRelationships
}

export interface IBrand extends JsonApiSingleResponse {
  data: BrandAttr
}

export interface IBrands extends JsonApiListResponse {
  data: BrandAttr[]
}

export interface IBrandResult extends ResultResponse<IBrand> {}

export interface IBrandsResult extends ResultResponse<IBrands> {}
