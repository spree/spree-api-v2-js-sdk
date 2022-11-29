import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from '@spree/core-api-v2-sdk'
import { IQuery } from '@spree/core-api-v2-sdk'
import { IRelationships } from '@spree/core-api-v2-sdk'
import { ResultResponse } from '@spree/core-api-v2-sdk'
import { WithCommonOptions } from '@spree/core-api-v2-sdk'

export interface MenuAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    name: string
    location: 'header' | 'footer' | string
    locale: string
  }
  relationships: IRelationships
}

export interface Menu extends JsonApiSingleResponse {
  data: MenuAttr
}

export interface Menus extends JsonApiListResponse {
  data: MenuAttr[]
}

export interface MenuResult extends ResultResponse<Menu> {}

export interface MenusResult extends ResultResponse<Menus> {}

/**
 * @deprecated Use {@link ListOptions} instead.
 */
export interface MenusList extends IQuery {
  locale?: string
  filter?: IQuery['filter'] & {
    location?: string
  }
}

export type ListOptions = WithCommonOptions<{ suggestQuery: true }, MenusList>

export type ShowOptions = WithCommonOptions<{ suggestQuery: true }, { id: string }>
