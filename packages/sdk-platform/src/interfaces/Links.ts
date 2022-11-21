import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

export interface LinkAttr {
  token: string
  access_counter: number
}

export interface LinkData extends JsonApiDocument {
  type: string
  id: string
  attributes: LinkAttr
  relationships: IRelationships
}

export interface LinkParams extends IQuery {
  digital_link: {
    access_counter: number
    line_item_id: string
    digital_id: string
  }
}

export interface ILink extends JsonApiSingleResponse {
  data: LinkData
}

export interface ILinks extends JsonApiListResponse {
  data: LinkData[]
}

export interface ILinkResult extends ResultResponse<ILink> {}

export interface ILinksResult extends ResultResponse<ILinks> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  LinkParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  LinkParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type ResetOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

