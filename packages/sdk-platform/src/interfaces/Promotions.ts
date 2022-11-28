import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface PromotionAttr {
  description: any
  expires_at: any
  starts_at: any
  name: string
  type: any
  usage_limit: any
  match_policy: string
  code: any
  advertise: boolean
  path: any
  created_at: string
  updated_at: string
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface PromotionData extends JsonApiDocument {
  type: string
  id: string
  attributes: PromotionAttr
  relationships: IRelationships
}

export interface PromotionParams {
  promotion: {
    name: string
    code: string
    description: string
    usage_limit: number
    advertise: boolean
    starts_at: string
    ends_at: string
    store_ids: string[]
  }
}

export interface IPromotion extends JsonApiSingleResponse {
  data: PromotionData
}

export interface IPromotions extends JsonApiListResponse {
  data: PromotionData[]
}

export interface IPromotionResult extends ResultResponse<IPromotion> {}

export interface IPromotionsResult extends ResultResponse<IPromotions> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PromotionParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PromotionParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
