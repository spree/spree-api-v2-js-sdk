import { IQuery } from './Query'
import { IRelationships } from './Relationships'

export interface CountryAttr extends IQuery {
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

  relationships?: IRelationships
}

export interface ICountry {
  data: CountryAttr
}

export interface ICountries {
  data: CountryAttr[]
}
