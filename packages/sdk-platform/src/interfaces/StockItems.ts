import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface StockItemAttr {
  count_on_hand: number
  created_at: string
  updated_at: string
  backorderable: boolean
  deleted_at: any
  is_available: boolean
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface StockItemData extends JsonApiDocument {
  type: string
  id: string
  attributes: StockItemAttr
  relationships: IRelationships
}

export interface StockItemParams {
  stock_item: {
    variant_id: string
    stock_location_id: string
    count_on_hand: number
    backorderable: boolean
  }
}

export interface IStockItem extends JsonApiSingleResponse {
  data: StockItemData
}

export interface IStockItems extends JsonApiListResponse {
  data: StockItemData[]
}

export interface IStockItemResult extends ResultResponse<IStockItem> {}

export interface IStockItemsResult extends ResultResponse<IStockItems> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  StockItemParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  StockItemParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
