import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IQuery } from './Query'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

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
