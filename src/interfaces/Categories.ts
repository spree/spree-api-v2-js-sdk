import type { WithCommonOptions } from './WithCommonOptions'
import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'

export type ShowOptions = WithCommonOptions<
  { suggestQuery: true },
  { category_permalink: string }
>

export interface CategoryAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    depth: number,
    description: string | null,
    is_child: boolean,
    is_leaf: boolean,
    is_root: boolean,
    left: number,
    meta_description: string | null,
    meta_keywords: string | null,
    meta_title: string | null,
    name: string,
    permalink: string,
    position: number,
    pretty_name: string,
    right: number,
    seo_title: string | null,
    updated_at: string
  }
  relationships: IRelationships
}

export interface ICategory extends JsonApiSingleResponse {
  data: CategoryAttr
}

export interface ICategories extends JsonApiListResponse {
  data: CategoryAttr[]
}

export interface ICategoryResult extends ResultResponse<ICategory> {}

export interface ICategoriesResult extends ResultResponse<ICategories> {}
