import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface WishlistAttr {
  name: string
  is_private: boolean
  is_default: boolean
  created_at: string
  updated_at: string
  token: string
  variant_included: boolean
}

export interface WishlistData extends JsonApiDocument {
  type: string
  id: string
  attributes: WishlistAttr
  relationships: IRelationships
}

export interface WishlistParams {
  wishlist: {
    name: string
    user_id: string
    is_default: boolean
    is_private: boolean
  }
}

export interface IWishlist extends JsonApiSingleResponse {
  data: WishlistData
}

export interface IWishlists extends JsonApiListResponse {
  data: WishlistData[]
}

export interface IWishlistResult extends ResultResponse<IWishlist> {}

export interface IWishlistsResult extends ResultResponse<IWishlists> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  WishlistParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  WishlistParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
