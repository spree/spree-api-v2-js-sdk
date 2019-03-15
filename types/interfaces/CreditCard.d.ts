import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { IRelationships } from './Relationships';
import { ResultResponse } from './ResultResponse';
export interface CreditCardAttr extends JsonApiDocument {
    type: string;
    id: string;
    attributes: {
        cc_type: string;
        last_digits: string;
        month: number;
        year: number;
        name: string;
        default: boolean;
    };
    relationships: IRelationships;
}
export interface ICreditCard extends JsonApiSingleResponse {
    data: CreditCardAttr;
}
export interface ICreditCards extends JsonApiListResponse {
    data: CreditCardAttr[];
}
export interface ICreditCardResult extends ResultResponse<ICreditCard> {
}
export interface ICreditCardsResult extends ResultResponse<ICreditCards> {
}
