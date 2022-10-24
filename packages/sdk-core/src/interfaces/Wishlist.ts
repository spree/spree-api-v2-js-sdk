import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IQuery } from './Query'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'

export interface WishlistAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    token: string
    name: string
    is_private: boolean
    is_default: boolean
    variant_included: boolean
  }
  relationships: IRelationships
}

export interface Wishlist extends JsonApiSingleResponse {
  data: WishlistAttr
}

export interface Wishlists extends JsonApiListResponse {
  data: WishlistAttr[]
}

export interface WishlistResult extends ResultResponse<Wishlist> {}

export interface WishlistsResult extends ResultResponse<Wishlists> {}

/**
 * @deprecated Use {@link ListOptions} instead.
 */
export interface WishlistsList extends IQuery {
  is_variant_included?: string
}

/**
 * @deprecated Use {@link ShowOptions} instead.
 */
export interface WishlistsShow extends IQuery {
  is_variant_included?: string
}

/**
 * @deprecated Use {@link DefaultOptions} instead.
 */
export interface WishlistsDefault extends IQuery {
  is_variant_included?: string
}

/**
 * @deprecated Use {@link CreateOptions} instead.
 */
export interface WishlistsCreate extends IQuery {
  name: string
  is_private?: boolean
  is_default?: boolean
}

/**
 * @deprecated Use {@link UpdateOptions} instead.
 */
export interface WishlistsUpdate extends IQuery {
  name: string
  is_private?: boolean
  is_default?: boolean
}

export type ListOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, WishlistsList>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { wishlist_token: string } & WishlistsShow
>

export type DefaultOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, WishlistsDefault>

export type CreateOptions = WithCommonOptions<{ suggestToken: true; suggestQuery: true }, WishlistsCreate>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { wishlist_token: string } & WishlistsUpdate
>

export type RemoveOptions = WithCommonOptions<{ suggestToken: true }, { wishlist_token: string }>
