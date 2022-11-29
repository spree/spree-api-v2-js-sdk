import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface ProductAttr {
  name: string
  description: string
  available_on: string
  deleted_at: any
  slug: string
  meta_description: any
  meta_keywords: any
  created_at: string
  updated_at: string
  promotionable: boolean
  meta_title: any
  discontinue_on: any
  status: string
  make_active_at: string
  display_compare_at_price: any
  display_price: string
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

export interface ProductData extends JsonApiDocument {
  type: string
  id: string
  attributes: ProductAttr
  relationships: IRelationships
}

export interface ProductParams {
  product: {
    name: string
    description: string
    available_on: string
    discontinue_on: string
    permalink: string
    meta_description: string
    meta_keywords: string
    price: string
    sku: string
    deleted_at: string
    prototype_id: string
    option_values_hash: string
    weight: string
    height: string
    width: string
    depth: string
    shipping_category_id: string
    tax_category_id: string
    cost_currency: string
    cost_price: string
    compare_at_price: string
    option_type_ids: string
    taxon_ids: string
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
}

export interface IProduct extends JsonApiSingleResponse {
  data: ProductData
}

export interface IProducts extends JsonApiListResponse {
  data: ProductData[]
}

export interface IProductResult extends ResultResponse<IProduct> {}

export interface IProductsResult extends ResultResponse<IProducts> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ProductParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ProductParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
