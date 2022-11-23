import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface StockLocationAttr {
  name: string
  created_at: string
  updated_at: string
  default: boolean
  address1: string
  address2: any
  city: string
  state_name: any
  zipcode: string
  phone: string
  active: boolean
  backorderable_default: boolean
  propagate_all_variants: boolean
  admin_name: any
}

export interface StockLocationData extends JsonApiDocument {
  type: string
  id: string
  attributes: StockLocationAttr
  relationships: IRelationships
}

export interface StockLocationParams {
  stock_location: {
    name: string
    default: boolean
    address1: string
    address2: string
    country_id: string
    state_id: string
    city: string
    state_name: string
    zipcode: string
    phone: string
    active: boolean
    backorderable_default: boolean
    propagate_all_variants: boolean
    admin_name: string
  }
}

export interface IStockLocation extends JsonApiSingleResponse {
  data: StockLocationData
}

export interface IStockLocations extends JsonApiListResponse {
  data: StockLocationData[]
}

export interface IStockLocationResult extends ResultResponse<IStockLocation> {}

export interface IStockLocationsResult extends ResultResponse<IStockLocations> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  StockLocationParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  StockLocationParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
