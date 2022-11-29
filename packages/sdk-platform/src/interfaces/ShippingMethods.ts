import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface ShippingMethodAttr {
  name: string
  admin_name: string
  code: string
  tracking_url: string
  display_on: string
  tax_category_id: string
  shipping_category_ids: string[]
  calculator_attributes: {
    type: string
  }
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface ShippingMethodData extends JsonApiDocument {
  type: string
  id: string
  attributes: ShippingMethodAttr
  relationships: IRelationships
}

export interface ShippingMethodParams {
  name: string
  admin_name: string
  code: string
  tracking_url: string
  display_on: string
  tax_category_id: string
  shipping_category_ids: string[]
  calculator_attributes: {
    type: string
  }
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface IShippingMethod extends JsonApiSingleResponse {
  data: ShippingMethodData
}

export interface IShippingMethods extends JsonApiListResponse {
  data: ShippingMethodData[]
}

export interface IShippingMethodResult extends ResultResponse<IShippingMethod> {}

export interface IShippingMethodsResult extends ResultResponse<IShippingMethods> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ShippingMethodParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ShippingMethodParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
