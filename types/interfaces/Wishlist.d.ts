import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { IQuery } from './Query';
import { IRelationships } from './Relationships';
import { ResultResponse } from './ResultResponse';
export interface WishlistAttr extends JsonApiDocument {
    type: string;
    id: string;
    attributes: {
        token: string;
        name: string;
        is_private: boolean;
        is_default: boolean;
        variant_included: boolean;
    };
    relationships: IRelationships;
}
export interface Wishlist extends JsonApiSingleResponse {
    data: WishlistAttr;
}
export interface Wishlists extends JsonApiListResponse {
    data: WishlistAttr[];
}
export interface WishlistResult extends ResultResponse<Wishlist> {
}
export interface WishlistsResult extends ResultResponse<Wishlists> {
}
export interface WishlistsList extends IQuery {
    is_variant_included?: string;
}
export interface WishlistsShow extends IQuery {
    is_variant_included?: string;
}
export interface WishlistsDefault extends IQuery {
    is_variant_included?: string;
}
export interface WishlistsCreate extends IQuery {
    name: string;
    is_private?: boolean;
    is_default?: boolean;
}
export interface WishlistsUpdate extends IQuery {
    name: string;
    is_private?: boolean;
    is_default?: boolean;
}
