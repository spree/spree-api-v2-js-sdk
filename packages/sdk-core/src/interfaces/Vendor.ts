import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'
import type { WithCommonOptions } from './WithCommonOptions'

export interface VendorAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    name: string
    slug: string
    instagram: string | null
    facebook: string | null
    twitter: string | null
    about_us: string | null
    logo_url: string | null
    logo_small_url: string | null
    logo_medium_url: string | null
    logo_large_url: string | null
    cover_photo_url: string | null
    cover_photo_small_url: string | null
    cover_photo_medium_url: string | null
    cover_photo_large_url: string | null
  }
  relationships: IRelationships
}

export interface Vendor extends JsonApiSingleResponse {
  data: VendorAttr
}

export interface Vendors extends JsonApiListResponse {
  data: VendorAttr[]
}

export interface VendorResult extends ResultResponse<Vendor> {}

export interface VendorsResult extends ResultResponse<Vendors> {}

export type ListOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true; optionalToken: true }>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true; optionalToken: true },
  { id: string }
>
