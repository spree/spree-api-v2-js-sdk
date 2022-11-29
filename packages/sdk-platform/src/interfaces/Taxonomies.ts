import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface TaxonomyAttr {
  name: string
  created_at: string
  updated_at: string
  position: number
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface TaxonomyData extends JsonApiDocument {
  type: string
  id: string
  attributes: TaxonomyAttr
  relationships: IRelationships
}

export interface TaxonomyParams {
  taxonomy: {
    name: string
    position: number
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
}

export interface ITaxonomy extends JsonApiSingleResponse {
  data: TaxonomyData
}

export interface ITaxonomies extends JsonApiListResponse {
  data: TaxonomyData[]
}

export interface ITaxonomyResult extends ResultResponse<ITaxonomy> {}

export interface ITaxonomiesResult extends ResultResponse<ITaxonomies> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  TaxonomyParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  TaxonomyParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
