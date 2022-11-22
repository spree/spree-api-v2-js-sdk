import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

export interface RoleAttr {
  name: string
  created_at: string
  updated_at: string
}

export interface RoleData extends JsonApiDocument {
  type: string
  id: string
  attributes: RoleAttr
  relationships: IRelationships
}

export interface RoleParams {
  name: string
}

export interface IRole extends JsonApiSingleResponse {
  data: RoleData
}

export interface IRoles extends JsonApiListResponse {
  data: RoleData[]
}

export interface IRoleResult extends ResultResponse<IRole> {}

export interface IRolesResult extends ResultResponse<IRoles> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  RoleParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  RoleParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
