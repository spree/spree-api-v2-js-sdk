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

export interface IEstimatedShippingMethods extends JsonApiListResponse {
  data: EstimatedShippingMethodAttr[]
}

export interface IEstimatedShippingMethodsResult extends ResultResponse<IEstimatedShippingMethods> {}
