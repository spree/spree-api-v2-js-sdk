import { JsonApiDocument, JsonApiSingleResponse } from './JsonApi';
import { IQuery } from './Query';
import { IRelationships } from './Relationships';
import { ResultResponse } from './ResultResponse';
export interface WishedItemAttr extends JsonApiDocument {
    type: string;
    id: string;
    attributes: {
        variant_id: string;
        quantity: number;
    };
    relationships: IRelationships;
}
export interface WishedItem extends JsonApiSingleResponse {
    data: WishedItemAttr;
}
export interface WishedItemResult extends ResultResponse<WishedItem> {
}
export interface WishlistsAddWishedItem extends IQuery {
    variant_id: string;
    quantity: number;
}
export interface WishlistsUpdateWishedItem extends IQuery {
    quantity: number;
}
