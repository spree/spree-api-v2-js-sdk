import type {
  JsonApiDocument,
  JsonApiListResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface WebhookEventsAttr {
  execution_time: number
  name: string
  request_errors: string
  response_code: string
  success: boolean
  url: string
  created_at: string
  updated_at: string
}

export interface WebhookEventsData extends JsonApiDocument {
  type: string
  id: string
  attributes: WebhookEventsAttr
  relationships: IRelationships
}

export interface IWebhookEvents extends JsonApiListResponse {
  data: WebhookEventsData[]
}

export interface IWebhookEventsResult extends ResultResponse<IWebhookEvents> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>