export interface Address {
  id?: number
  firstname: string
  lastname: string
  address1: string
  address2?: string
  city: string
  country_iso?: string
  country_id?: string
  state_id?: string
  state_name?: string
  zipcode: string
  phone?: string
  alternative_phone?: string
  company?: string
  country?: {
    iso: string
    iso3: string
    name: string
    iso_name: string,
  }
  state?: {
    name: string
    abbr: string,
  }
}
