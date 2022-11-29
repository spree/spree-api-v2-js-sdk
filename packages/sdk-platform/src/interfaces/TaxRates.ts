import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface TaxRateAttr {
  amount: string
  included_in_price: boolean
  created_at: string
  updated_at: string
  name: string
  show_rate_in_label: boolean
  deleted_at: any
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface TaxRateData extends JsonApiDocument {
  type: string
  id: string
  attributes: TaxRateAttr
  relationships: IRelationships
}

export interface TaxRateParams {
  tax_rate: {
    amount: number
    zone_id: string
    tax_category_id: string
    included_in_price: boolean
    name: string
    show_rate_in_label: boolean
    calculator_attributes: {
      type: string,
      preferences: {
        amount: number,
        currency: string
      }
    }
  }
}

export interface ITaxRate extends JsonApiSingleResponse {
  data: TaxRateData
}

export interface ITaxRates extends JsonApiListResponse {
  data: TaxRateData[]
}

export interface ITaxRateResult extends ResultResponse<ITaxRate> {}

export interface ITaxRatesResult extends ResultResponse<ITaxRates> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  TaxRateParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  TaxRateParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
