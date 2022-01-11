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
    price: string
    currency: string
    display_price: string
    available_on: Date
    meta_description: string | null
    meta_keywords: string | null
    updated_at: Date
    purchasable: boolean
    in_stock: boolean
    backorderable: boolean
    slug: string
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
