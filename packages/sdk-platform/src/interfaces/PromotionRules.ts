import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface PromotionRuleAttr {
  type: any
  created_at: string
  updated_at: string
  code: any
  preferences: {
    [key: string]: string
  }
}

export interface PromotionRuleData extends JsonApiDocument {
  type: string
  id: string
  attributes: PromotionRuleAttr
  relationships: IRelationships
}

export interface PromotionRuleParams {
  promotion_rule: {
    promotion_id: string
    type: string
  }
}

export interface IPromotionRule extends JsonApiSingleResponse {
  data: PromotionRuleData
}

export interface IPromotionRules extends JsonApiListResponse {
  data: PromotionRuleData[]
}

export interface IPromotionRuleResult extends ResultResponse<IPromotionRule> {}

export interface IPromotionRulesResult extends ResultResponse<IPromotionRules> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PromotionRuleParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PromotionRuleParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
