import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface StoreCreditAttr {
  amount: string
  amount_used: string
  memo: any
  deleted_at: any
  currency: string
  amount_authorized: string
  originator_type: any
  created_at: string
  updated_at: string
  display_amount: string
  display_amount_used: string
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface StoreCreditData extends JsonApiDocument {
  type: string
  id: string
  attributes: StoreCreditAttr
  relationships: IRelationships
}

export interface StoreCreditParams {
  store_credit: {
    user_id: string
    category_id: string
    created_by_id: string
    amount: number
    amount_used: number
    memo: string
    currency: string
    amount_authorized: number
    originator_id: string
    originator_type: string
    type_id: string
    store_id: string
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
}

export interface IStoreCredit extends JsonApiSingleResponse {
  data: StoreCreditData
}

export interface IStoreCredits extends JsonApiListResponse {
  data: StoreCreditData[]
}

export interface IStoreCreditResult extends ResultResponse<IStoreCredit> {}

export interface IStoreCreditsResult extends ResultResponse<IStoreCredits> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  StoreCreditParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  StoreCreditParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
