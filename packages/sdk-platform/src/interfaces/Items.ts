import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface PageAttr {
  quantity: number
  price: string
  created_at: string
  updated_at: string
  currency: string
  cost_price: string
  adjustment_total: string
  additional_tax_total: string
  promo_total: string
  included_tax_total: string
  pre_tax_amount: string
  taxable_adjustment_total: string
  non_taxable_adjustment_total: string
  display_discounted_amount: string
  display_amount: string
  display_final_amount: string
  display_subtotal: string
  display_pre_tax_amount: string
  display_price: string
  display_adjustment_total: string
  display_additional_tax_total: string
  display_promo_total: string
  display_total: string
  display_included_tax_total: string
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface ItemData extends JsonApiDocument {
  type: string
  id: string
  attributes: PageAttr
  relationships: IRelationships
}

export interface ItemParams {
  line_item: {
    order_id: string
    variant_id: string
    quantity: number
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
}

export interface IItem extends JsonApiSingleResponse {
  data: ItemData
}

export interface IItems extends JsonApiListResponse {
  data: ItemData[]
}

export interface IItemResult extends ResultResponse<IItem> {}

export interface IItemsResult extends ResultResponse<IItems> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ItemParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ItemParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
