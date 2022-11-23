import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface TaxCategoryAttr {
  name: string
  is_default: boolean
  tax_code: string
  description: string
}

export interface TaxCategoryData extends JsonApiDocument {
  type: string
  id: string
  attributes: TaxCategoryAttr
  relationships: IRelationships
}

export interface TaxCategoryParams {
  tax_category: {
    name: string
    is_default: boolean
    tax_code: string
    description: string
  }
}

export interface ITaxCategory extends JsonApiSingleResponse {
  data: TaxCategoryData
}

export interface ITaxCategories extends JsonApiListResponse {
  data: TaxCategoryData[]
}

export interface ITaxCategoryResult extends ResultResponse<ITaxCategory> {}

export interface ITaxCategoriesResult extends ResultResponse<ITaxCategories> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  TaxCategoryParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  TaxCategoryParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
