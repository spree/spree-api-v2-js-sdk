import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'

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
