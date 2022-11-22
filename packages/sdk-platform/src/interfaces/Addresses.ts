import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'
import type { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

export interface AddressAttr {
  country_id: string
  state_id: string
  state_name: string
  address1: string
  address2: string
  city: string
  zipcode: string
  phone: string
  alternative_phone: string
  firstname: string
  lastname: string
  label: string
  company: string
  user_id: string
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface AddressData extends JsonApiDocument {
  type: string
  id: string
  attributes: AddressAttr
  relationships: IRelationships
}

export interface AddressParams extends IQuery {
  address: AddressAttr
}

export interface IAddress extends JsonApiSingleResponse {
  data: AddressData
}

export interface IAddresses extends JsonApiListResponse {
  data: AddressData[]
}

export interface IAddressResult extends ResultResponse<IAddress> {}

export interface IAddressesResult extends ResultResponse<IAddresses> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string; }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  AddressParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  AddressParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
