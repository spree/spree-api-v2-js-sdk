import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface VariantAttr {
  sku: string
  weight: string
  height: any
  depth: any
  deleted_at: any
  is_master: boolean
  cost_price: string
  position: number
  cost_currency: string
  track_inventory: boolean
  updated_at: string
  discontinue_on: any
  created_at: string
  barcode: any
  display_price: string
  display_compare_at_price: any
  name: string
  options_text: string
  total_on_hand: number
  purchasable: boolean
  in_stock: boolean
  backorderable: boolean
  available: boolean
  currency: string
  price: string
  compare_at_price: any
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface VariantData extends JsonApiDocument {
  type: string
  id: string
  attributes: VariantAttr
  relationships: IRelationships
}

export interface IVariant extends JsonApiSingleResponse {
  data: VariantData
}

export interface IVariants extends JsonApiListResponse {
  data: VariantData[]
}

export interface IVariantResult extends ResultResponse<IVariant> {}

export interface IVariantsResult extends ResultResponse<IVariants> {}

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
