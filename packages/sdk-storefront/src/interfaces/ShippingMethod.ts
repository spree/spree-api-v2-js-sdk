import { JsonApiDocument, JsonApiListResponse } from '@spree/core-api-v2-sdk'
import { IRelationships } from '@spree/core-api-v2-sdk'
import { ResultResponse } from '@spree/core-api-v2-sdk'

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
