import { Relationships } from './Relationships'

export interface Country {
  type: string
  id: string,
  attributes: {
    iso: string
    iso3: string
    iso_name: string
    name: string
    states_required: boolean
    zipcode_required: boolean
    default: boolean,
  }

  relationships: Relationships
}
