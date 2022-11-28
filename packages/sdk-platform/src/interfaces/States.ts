import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface StateAttr {
  name: string
  abbr: string
  updated_at: string
  created_at: string
}

export interface StateData extends JsonApiDocument {
  type: string
  id: string
  attributes: StateAttr
  relationships: IRelationships
}

export interface IState extends JsonApiSingleResponse {
  data: StateData
}

export interface IStates extends JsonApiListResponse {
  data: StateData[]
}

export interface IStateResult extends ResultResponse<IState> {}

export interface IStatesResult extends ResultResponse<IStates> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
