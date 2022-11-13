import type { WithCommonOptions } from './WithCommonOptions'
import type { ImageTransformation } from './ImageTransformation'
import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'

export interface ProductAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    name: string
    description: string
    available_on: string
    slug: string
    meta_description: string | null
    meta_keywords: string | null
    updated_at: string
    sku: string
    purchasable: boolean
    in_stock: boolean
    backorderable: boolean
    available: boolean
    currency: string
    price: string
    display_price: string
    compare_at_price: string | null
    display_compare_at_price: string | null
  }
  relationships: IRelationships
}

export interface IProduct extends JsonApiSingleResponse {
  data: ProductAttr
}

export interface IProducts extends JsonApiListResponse {
  data: ProductAttr[]
}

export interface IProductResult extends ResultResponse<IProduct> {}

export interface IProductsResult extends ResultResponse<IProducts> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true; optionalToken: true },
  {
    image_transformation?: ImageTransformation
  }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true; optionalToken: true },
  { id: string; image_transformation?: ImageTransformation }
>
