import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface DataFeedAttr {
  spree_store_id: number
  name: string
  provider: string
  uuid: string
  enabled: boolean
}

export interface DataFeed extends JsonApiDocument {
  type: string
  id: string
  attributes: DataFeedAttr
}

export interface DataFeedParams {
  data_feed_setting: {
    spree_store_id: number
    name: string
    provider: string
    enabled: boolean
  }
}

export interface IDataFeed extends JsonApiSingleResponse {
  data: DataFeed
}

export interface IDataFeeds extends JsonApiListResponse {
  data: DataFeed[]
}

export interface IDataFeedResult extends ResultResponse<IDataFeed> {}

export interface IDataFeedsResult extends ResultResponse<IDataFeeds> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  DataFeedParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  DataFeedParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
