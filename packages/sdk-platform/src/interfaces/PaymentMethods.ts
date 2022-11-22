import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

export interface PaymentMethodAttr {
  name: string
  type: string
  description: any
  active: boolean
  display_on: string
  auto_capture: any
  position: number
  created_at: string
  updated_at: string
  deleted_at: any
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
  preferences: {
    [key: string]: string
  }
}

export interface PaymentMethodData extends JsonApiDocument {
  type: string
  id: string
  attributes: PaymentMethodAttr
  relationships: IRelationships
}

export interface PaymentMethodParams {
  payment_method: {
    name: string
    active: boolean
    auto_capture: boolean
    description: string
    type: string
    display_on: string
    store_ids: string[]
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
}

export interface IPaymentMethod extends JsonApiSingleResponse {
  data: PaymentMethodData
}

export interface IPaymentMethods extends JsonApiListResponse {
  data: PaymentMethodData[]
}

export interface IPaymentMethodResult extends ResultResponse<IPaymentMethod> {}

export interface IPaymentMethodsResult extends ResultResponse<IPaymentMethods> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PaymentMethodParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  PaymentMethodParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
