import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

export interface ShipmentAttr {
  tracking: string
  number: string
  cost: string
  shipped_at: any
  state: string
  created_at: string
  updated_at: string
  adjustment_total: string
  additional_tax_total: string
  promo_total: string
  included_tax_total: string
  pre_tax_amount: string
  taxable_adjustment_total: string
  non_taxable_adjustment_total: string
  display_discounted_cost: string
  display_item_cost: string
  display_amount: string
  display_final_price: string
  display_cost: string
  tracking_url: any
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface ShipmentData extends JsonApiDocument {
  type: string
  id: string
  attributes: ShipmentAttr
  relationships: IRelationships
}

export interface ShipmentParams {
  shipment: {
    stock_location_id: string
    order_id: string
    variant_id: string
    quantity: number
  }
}

export interface ShipmentUpdateParams {
  shipment: {
    tracking: string
  }
}

export interface ShipmentAddItemParams {
  shipment: {
    variant_id: string
    quantity: number
  }
}

export interface ShipmentRemoveItemParams {
  shipment: {
    variant_id: string
    quantity: number
  }
}

export interface IShipment extends JsonApiSingleResponse {
  data: ShipmentData
}

export interface IShipments extends JsonApiListResponse {
  data: ShipmentData[]
}

export interface IShipmentResult extends ResultResponse<IShipment> {}

export interface IShipmentsResult extends ResultResponse<IShipments> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ShipmentParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ShipmentUpdateParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type AddItemOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ShipmentAddItemParams & { id: string }
>

export type RemoveItemOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ShipmentRemoveItemParams & { id: string }
>

export type MarkReadyOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type MarkShipOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CancelOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type ResumeOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type PendOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>
