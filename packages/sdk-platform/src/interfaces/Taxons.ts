import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface TaxonAttr {
  position: number
  name: string
  permalink: string
  lft: number
  rgt: number
  description: any
  created_at: string
  updated_at: string
  meta_title: any
  meta_description: any
  meta_keywords: any
  depth: number
  pretty_name: string
  seo_title: string
  is_root: boolean
  is_child: boolean
  is_leaf: boolean
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface TaxonData extends JsonApiDocument {
  type: string
  id: string
  attributes: TaxonAttr
  relationships: IRelationships
}

export interface TaxonParams {
  taxon: {
    taxonomy_id: string
    parent_id: string
    name: string
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
}

export interface TaxonRepositionParams {
  taxon: {
    new_parent_id: number
    new_position_idx: number
  }
}

export interface ITaxon extends JsonApiSingleResponse {
  data: TaxonData
}

export interface ITaxons extends JsonApiListResponse {
  data: TaxonData[]
}

export interface ITaxonResult extends ResultResponse<ITaxon> {}

export interface ITaxonsResult extends ResultResponse<ITaxons> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  TaxonParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  TaxonParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type RepositionOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  TaxonRepositionParams & { id: string }
>