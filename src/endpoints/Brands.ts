import Http from '../Http'
import type { WithCommonOptions } from '../Interfaces/WithCommonOptions'
import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from '../Interfaces/JsonApi'
import type { IRelationships } from '../Interfaces/Relationships'
import type { ResultResponse } from '../Interfaces/ResultResponse'
import routes from '../routes'

export type ListOptions = WithCommonOptions<
  { suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestQuery: true },
  { brand_permalink: string }
>

export interface BrandAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    description: string | null
    header_url: string | null
    logo_url: string | null
    meta_description: string | null
    meta_keywords: string | null
    meta_title: string | null
    name: string
    seo_title: string
    slug: string
    updated_at: string
  }
  relationships: IRelationships
}

export interface IBrand extends JsonApiSingleResponse {
  data: BrandAttr
}

export interface IBrands extends JsonApiListResponse {
  data: BrandAttr[]
}

export interface IBrandResult extends ResultResponse<IBrand> {}

export interface IBrandsResult extends ResultResponse<IBrands> {}

export default class Brands extends Http {
  public async list(): Promise<IBrandsResult> {
    return await this.spreeResponse<IBrands>('get', routes.brandsPath(), {}, {})
  }

  public async show(options: ShowOptions): Promise<IBrandResult> {
    return await this.spreeResponse<IBrand>('get', routes.brandPath(options.brand_permalink), {}, {})
  }
}
