import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'
import type { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

export interface Address extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    firstname: string
    lastname: string
    address1: string
    address2: string
    city: string
    zipcode: string
    phone: string
    state_name: string
    alternative_phone: string
    company: string
    created_at: string
    updated_at: string
    deleted_at: string
    label: string
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
  relationships: IRelationships
}

export interface AddressParams extends IQuery {
  address: {
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
}

export interface IAddress extends JsonApiSingleResponse {
  data: Address
}

export interface IAddresses extends JsonApiListResponse {
  data: Address[]
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
