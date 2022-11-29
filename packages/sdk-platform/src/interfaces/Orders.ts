import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'
import { AddressAttr } from './Addresses'

export interface OrderAttr {
  number: string
  item_total: string
  total: string
  state: string
  adjustment_total: string
  completed_at: string
  payment_total: string
  shipment_state: string
  payment_state: string
  email: string
  special_instructions: string
  created_at: string
  updated_at: string
  currency: string
  last_ip_address: string
  shipment_total: string
  additional_tax_total: string
  promo_total: string
  channel: string
  included_tax_total: string
  item_count: number
  approved_at: string
  confirmation_delivered: boolean
  canceled_at: string
  state_lock_version: number
  taxable_adjustment_total: string
  non_taxable_adjustment_total: string
  store_owner_notification_delivered: string
  internal_note: string
  display_ship_total: string
  display_shipment_total: string
  display_outstanding_balance: string
  display_item_total: string
  display_adjustment_total: string
  display_included_tax_total: string
  display_additional_tax_total: string
  display_tax_total: string
  display_promo_total: string
  display_total: string
  display_cart_promo_total: string
  display_pre_tax_item_amount: string
  display_pre_tax_total: string
  display_total_applicable_store_credit: string
  display_total_applied_store_credit: string
  display_order_total_after_store_credit: string
  display_total_available_store_credit: string
  display_store_credit_remaining_after_capture: string
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface OrderData extends JsonApiDocument {
  type: string
  id: string
  attributes: OrderAttr
  relationships: IRelationships
}

export interface OrderParams {
  order: {
    item_total: number
    total: number
    state: string
    adjustment_total: number
    user_id: string
    completed_at: string
    bill_address_id: string
    ship_address_id: string
    payment_total: number
    shipment_state: string
    payment_state: string
    email: string
    special_instructions: string
    currency: string
    last_ip_address: string
    created_by_id: string
    shipment_total: number
    additional_tax_total: number
    promo_total: number
    channel: string
    included_tax_total: number
    item_count: number
    approver_id: string
    approved_at: string
    confirmation_delivered: boolean
    considered_risky: boolean
    canceled_at: string
    canceler_id: string
    taxable_adjustment_total: number
    non_taxable_adjustment_total: number
    store_owner_notification_delivered: boolean
    bill_address_attributes: {
      address: AddressAttr
    }
    ship_address_attributes: {
      address: AddressAttr
    }
  }
}

export interface OrderCreditParams {
  amount: number
}
export interface OrderCouponParams {
  coupon_code: string
}

export interface IOrder extends JsonApiSingleResponse {
  data: OrderData
}

export interface IOrders extends JsonApiListResponse {
  data: OrderData[]
}

export interface IOrderResult extends ResultResponse<IOrder> {}

export interface IOrdersResult extends ResultResponse<IOrders> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  OrderParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  OrderParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type AdvanceOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type NextOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CompleteOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type EmptyOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type ApproveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CancelOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreditOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  OrderCreditParams & { id: string }
>

export type CouponOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  OrderCouponParams & { id: string }
>