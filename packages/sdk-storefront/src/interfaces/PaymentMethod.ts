import { JsonApiDocument, JsonApiListResponse } from '@spree/core-api-v2-sdk'
import { ResultResponse } from '@spree/core-api-v2-sdk'

export interface PaymentMethodAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    type: string
    name: string
    description: string
    preferences: {
      [key: string]: string
    }
  }
}

export interface IPaymentMethods extends JsonApiListResponse {
  data: PaymentMethodAttr[]
}

export interface IPaymentMethodsResult extends ResultResponse<IPaymentMethods> {}
