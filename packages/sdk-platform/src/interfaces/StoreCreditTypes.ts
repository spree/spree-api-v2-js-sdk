import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface StoreCreditTypeAttr {
  name: string
  priority: number
  created_at: string
  updated_at: string
}

export interface StoreCreditTypeData extends JsonApiDocument {
  type: string
  id: string
  attributes: StoreCreditTypeAttr
  relationships: IRelationships
}

export interface StoreCreditTypeParams {
  name: string
  priority: number
}

export interface IStoreCreditType extends JsonApiSingleResponse {
  data: StoreCreditTypeData
}

export interface IStoreCreditTypes extends JsonApiListResponse {
  data: StoreCreditTypeData[]
}

export interface IStoreCreditTypeResult extends ResultResponse<IStoreCreditType> {}

export interface IStoreCreditTypesResult extends ResultResponse<IStoreCreditTypes> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  StoreCreditTypeParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  StoreCreditTypeParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
