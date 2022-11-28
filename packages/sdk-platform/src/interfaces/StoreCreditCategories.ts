import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface StoreCreditCategoryAttr {
  name: string
  created_at: string
  updated_at: string
}

export interface StoreCreditCategoryData extends JsonApiDocument {
  type: string
  id: string
  attributes: StoreCreditCategoryAttr
  relationships: IRelationships
}

export interface StoreCreditCategoryParams {
  store_credit_category: {
    name: string
  }
}

export interface IStoreCreditCategory extends JsonApiSingleResponse {
  data: StoreCreditCategoryData
}

export interface IStoreCreditCategories extends JsonApiListResponse {
  data: StoreCreditCategoryData[]
}

export interface IStoreCreditCategoryResult extends ResultResponse<IStoreCreditCategory> {}

export interface IStoreCreditCategoriesResult extends ResultResponse<IStoreCreditCategories> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  StoreCreditCategoryParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  StoreCreditCategoryParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
