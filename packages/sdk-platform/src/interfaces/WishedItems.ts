import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface WishedItemAttr {
  quantity: number
  created_at: string
  updated_at: string
  display_total: string
  display_price: string
  price: string
  total: string
}

export interface WishedItemData extends JsonApiDocument {
  type: string
  id: string
  attributes: WishedItemAttr
  relationships: IRelationships
}

export interface WishedItemParams {
  wished_item: {
    wishlist_id: string
    variant_id: string
    quantity: number
  }
}

export interface IWishedItem extends JsonApiSingleResponse {
  data: WishedItemData
}

export interface IWishedItems extends JsonApiListResponse {
  data: WishedItemData[]
}

export interface IWishedItemResult extends ResultResponse<IWishedItem> {}

export interface IWishedItemsResult extends ResultResponse<IWishedItems> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  WishedItemParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  WishedItemParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
