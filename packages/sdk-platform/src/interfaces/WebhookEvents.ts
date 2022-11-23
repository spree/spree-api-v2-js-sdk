import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

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