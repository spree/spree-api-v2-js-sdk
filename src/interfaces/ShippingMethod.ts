import { JsonApiDocument, JsonApiListResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'

/**
 * @deprecated Use {@link ShippingRateAttr} instead.
 */
export interface ShippingMethodAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    number: string
    free: boolean
    final_price: string
    display_final_price: string
    tracking_url: string
    state: string
    shipped_at: Date
  }
  relationships: IRelationships
}

/**
 * @deprecated Use {@link ShippingRates} instead.
 */
export interface IShippingMethods extends JsonApiListResponse {
  data: ShippingMethodAttr[]
}

/**
 * @deprecated Use {@link ShippingRatesResult} instead.
 */
export interface IShippingMethodsResult extends ResultResponse<IShippingMethods> {}

export interface ShippingRateAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    number: string
    free: boolean
    final_price: string
    display_final_price: string
    tracking_url: string
    state: string
    shipped_at: Date
  }
  relationships: IRelationships
}

export interface ShippingRates extends JsonApiListResponse {
  data: ShippingRateAttr[]
}

export interface ShippingRatesResult extends ResultResponse<ShippingRates> {}
