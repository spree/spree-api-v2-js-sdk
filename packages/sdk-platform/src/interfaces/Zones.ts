import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface ZoneAttr {
  name: string
  description: string
  default_tax: boolean
  zone_members_count: number
  created_at: string
  updated_at: string
  kind: string
}

export interface ZoneData extends JsonApiDocument {
  type: string
  id: string
  attributes: ZoneAttr
  relationships: IRelationships
}

export interface ZoneParams {
  zone: {
    name: string
    description: string
    default_tax: boolean
    kind: string
  }
}

export interface IZone extends JsonApiSingleResponse {
  data: ZoneData
}

export interface IZones extends JsonApiListResponse {
  data: ZoneData[]
}

export interface IZoneResult extends ResultResponse<IZone> {}

export interface IZonesResult extends ResultResponse<IZones> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ZoneParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ZoneParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
