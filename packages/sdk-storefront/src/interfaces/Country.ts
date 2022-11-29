import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from '@spree/core-api-v2-sdk'
import type { IRelationships } from '@spree/core-api-v2-sdk'
import type { ResultResponse } from '@spree/core-api-v2-sdk'
import type { WithCommonOptions } from '@spree/core-api-v2-sdk'

export interface CountryAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    iso: string
    iso3: string
    iso_name: string
    name: string
    states_required: boolean
    zipcode_required: boolean
    default: boolean
  }

  relationships: IRelationships
}

export interface ICountry extends JsonApiSingleResponse {
  data: CountryAttr
}

export interface ICountries extends JsonApiListResponse {
  data: CountryAttr[]
}

export interface ICountryResult extends ResultResponse<ICountry> {}

export interface ICountriesResult extends ResultResponse<ICountries> {}

export type ListOptions = WithCommonOptions

export type ShowOptions = WithCommonOptions<{ suggestQuery: true }, { iso: string }>

export type DefaultOptions = WithCommonOptions<{ suggestQuery: true }>
