import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface PaymentAttr {
  amount: string
  source_type: string
  state: string
  response_code: string
  avs_response: string
  created_at: string
  updated_at: string
  number: string
  cvv_response_code: string
  cvv_response_message: string
  display_amount: string
}

export interface PaymentData extends JsonApiDocument {
  type: string
  id: string
  attributes: PaymentAttr
  relationships: IRelationships
}

export interface IPayment extends JsonApiSingleResponse {
  data: PaymentData
}

export interface IPayments extends JsonApiListResponse {
  data: PaymentData[]
}

export interface IPaymentResult extends ResultResponse<IPayment> {}

export interface IPaymentsResult extends ResultResponse<IPayments> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
