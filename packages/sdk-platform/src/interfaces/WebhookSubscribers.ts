import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface WebhookSubscriberAttr {
  url: string
  active: boolean
  subscriptions: string[]
  created_at: string
  updated_at: string
}

export interface WebhookSubscriberData extends JsonApiDocument {
  type: string
  id: string
  attributes: WebhookSubscriberAttr
  relationships: IRelationships
}

export interface WebhookSubscriberParams {
  subscriber: {
    active: boolean
    subscriptions: any[]
    url: string
  }
}

export interface IWebhookSubscriber extends JsonApiSingleResponse {
  data: WebhookSubscriberData
}

export interface IWebhookSubscribers extends JsonApiListResponse {
  data: WebhookSubscriberData[]
}

export interface IWebhookSubscriberResult extends ResultResponse<IWebhookSubscriber> {}

export interface IWebhookSubscribersResult extends ResultResponse<IWebhookSubscribers> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  WebhookSubscriberParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  WebhookSubscriberParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
