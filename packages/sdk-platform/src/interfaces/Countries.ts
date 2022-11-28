import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

interface CountriesAttr {
  iso_name: string
  iso: string
  iso3: string
  name: string
  numcode: number
  states_required: boolean
  updated_at: string
  zipcode_required: boolean
  created_at: string
}

export interface CountryData extends JsonApiDocument {
  type: string
  id: string
  attributes: CountriesAttr
  relationships: IRelationships
}
export interface ICountry extends JsonApiSingleResponse {
  data: CountryData
}

export interface ICountries extends JsonApiListResponse {
  data: CountryData[]
}

export interface ICountryResult extends ResultResponse<ICountry> {}

export interface ICountriesResult extends ResultResponse<ICountries> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string; }
>