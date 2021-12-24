import type { JsonApiDocument, JsonApiSingleResponse } from './JsonApi'
import type { IQuery } from './Query'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'
import type { WithCommonOptions } from './WithCommonOptions'

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
  { wishlistToken: string }
>

export type UpdateWishedItemOptions = WithCommonOptions<
  { suggestToken: true; suggestQuery: true },
  { wishlistToken: string; id: string } & WishlistsUpdateWishedItem
>

export type RemoveWishedItemOptions = WithCommonOptions<{ suggestToken: true }, { wishlistToken: string; id: string }>
