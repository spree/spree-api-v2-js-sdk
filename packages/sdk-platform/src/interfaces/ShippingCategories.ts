import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface ShippingCategoryAttr {
  name: string
  created_at: string
  updated_at: string
}

export interface ShippingCategoryData extends JsonApiDocument {
  type: string
  id: string
  attributes: ShippingCategoryAttr
  relationships: IRelationships
}

export interface ShippingCategoryParams {
  name: string
}

export interface IShippingCategory extends JsonApiSingleResponse {
  data: ShippingCategoryData
}

export interface IShippingCategories extends JsonApiListResponse {
  data: ShippingCategoryData[]
}

export interface IShippingCategoryResult extends ResultResponse<IShippingCategory> {}

export interface IShippingCategoriesResult extends ResultResponse<IShippingCategories> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  ShippingCategoryParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  ShippingCategoryParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
