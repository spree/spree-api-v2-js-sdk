import { JsonApiDocument, JsonApiListResponse } from './JsonApi'
import { ResultResponse } from './ResultResponse'

export interface EstimatedShippingMethodAttr extends JsonApiDocument {
  type: 'shipping_rate'
  id: string
  attributes: {
    name: string
    selected: boolean
    cost: string
    tax_amount: string
    shipping_method_id: number
    final_price: string
    display_cost: string
    display_final_price: string
    display_tax_amount: string
    free: boolean
  }
}

/**
 * @deprecated Use {@link EstimatedShippingRates} instead.
 */
export interface IEstimatedShippingMethods extends JsonApiListResponse {
  data: EstimatedShippingMethodAttr[]
}

/**
 * @deprecated Use {@link EstimatedShippingRatesResult} instead.
 */
export interface IEstimatedShippingMethodsResult extends ResultResponse<IEstimatedShippingMethods> {}

export interface EstimatedShippingRates extends JsonApiListResponse {
  data: EstimatedShippingMethodAttr[]
}

export interface EstimatedShippingRatesResult extends ResultResponse<EstimatedShippingRates> {}
