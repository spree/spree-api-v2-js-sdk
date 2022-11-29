import type { JsonApiDocument, JsonApiSingleResponse } from '@spree/core-api-v2-sdk'
import type { IQuery } from '@spree/core-api-v2-sdk'
import type { IRelationships } from '@spree/core-api-v2-sdk'
import type { ResultResponse } from '@spree/core-api-v2-sdk'
import type { WithCommonOptions } from '@spree/core-api-v2-sdk'

export interface WishedItemAttr extends JsonApiDocument {
  type: string
  id: string
  attributes: {
    variant_id: string
    quantity: number
  }
  relationships: IRelationships
}

export interface WishedItem extends JsonApiSingleResponse {
  data: WishedItemAttr
}

export interface WishedItemResult extends ResultResponse<WishedItem> {}

/**
 * @deprecated Use {@link AddWishedItemOptions} instead.
 */
export interface WishlistsAddWishedItem extends IQuery {
  variant_id: string
  quantity: number
}

/**
 * @deprecated Use {@link UpdateWishedItemOptions} instead.
 */
export interface WishlistsUpdateWishedItem extends IQuery {
  quantity: number
}

export type AddWishedItemOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { wishlist_token: string } & WishlistsAddWishedItem
>

export type UpdateWishedItemOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { wishlist_token: string; id: string } & WishlistsUpdateWishedItem
>

export type RemoveWishedItemOptions = WithCommonOptions<{ suggestToken: true }, { wishlist_token: string; id: string }>
