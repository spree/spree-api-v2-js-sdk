import { JsonApiDocument, JsonApiListResponse } from './JsonApi'
import { ResultResponse } from './ResultResponse'

export interface PaymentMethodAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    type: string
    name: string
    description: string
  }
}

export interface IPaymentMethods extends JsonApiListResponse {
  data: PaymentMethodAttr[]
}

export interface IPaymentMethodsResult extends ResultResponse<IPaymentMethods> {}
