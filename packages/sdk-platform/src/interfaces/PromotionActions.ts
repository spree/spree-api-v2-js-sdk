import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

export interface PromotionActionAttr {
  position: any
  type: any
  deleted_at: any
  created_at: string
  updated_at: string
}

export interface PromotionActionData extends JsonApiDocument {
  type: string
  id: string
  attributes: PromotionActionAttr
  relationships: IRelationships
}

export interface PromotionActionParams {
  promotion_action: {
    type: string
    promotion_id: string
  }
}

export interface IPromotionAction extends JsonApiSingleResponse {
  data: PromotionActionData
}

export interface IPromotionActions extends JsonApiListResponse {
  data: PromotionActionData[]
}

export interface IPromotionActionResult extends ResultResponse<IPromotionAction> {}

export interface IPromotionActionsResult extends ResultResponse<IPromotionActions> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PromotionActionParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PromotionActionParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
