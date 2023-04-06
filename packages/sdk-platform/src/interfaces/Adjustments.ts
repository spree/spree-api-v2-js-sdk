import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface AdjustmentAttr {
  source_type: string
  adjustable_type: string
  amount: string
  label: string
  mandatory: boolean | null
  eligible: boolean
  created_at: string
  updated_at: string
  state: string
  included: boolean
  display_amount: string
}

export interface AdjustmentData extends JsonApiDocument {
  type: string
  id: string
  attributes: AdjustmentAttr
  relationships: IRelationships
}

export interface AdjustmentParams {
  adjustment: {
    order_id: string
    label: string
    adjustable_id: string
    adjustable_type: string
    source_id: string
    source_type: string
    amount: number
    mandatory: boolean
    eligible: boolean
    state: string
    included: boolean
  }
}

export interface IAdjustment extends JsonApiSingleResponse {
  data: AdjustmentData
}

export interface IAdjustments extends JsonApiListResponse {
  data: AdjustmentData[]
}

export interface IAdjustmentResult extends ResultResponse<IAdjustment> {}

export interface IAdjustmentsResult extends ResultResponse<IAdjustments> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string; }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  AdjustmentParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  AdjustmentParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
