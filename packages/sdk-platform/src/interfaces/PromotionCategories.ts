import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface PromotionCategoryAttr {
  name: string
  created_at: string
  updated_at: string
  code: string
}

export interface PromotionCategoryData extends JsonApiDocument {
  type: string
  id: string
  attributes: PromotionCategoryAttr
  relationships: IRelationships
}

export interface PromotionCategoryParams {
  promotion_category: {
    name: string
    code: string
  }
}

export interface IPromotionCategory extends JsonApiSingleResponse {
  data: PromotionCategoryData
}

export interface IPromotionCategories extends JsonApiListResponse {
  data: PromotionCategoryData[]
}

export interface IPromotionCategoryResult extends ResultResponse<IPromotionCategory> {}

export interface IPromotionCategoriesResult extends ResultResponse<IPromotionCategories> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PromotionCategoryParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PromotionCategoryParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
