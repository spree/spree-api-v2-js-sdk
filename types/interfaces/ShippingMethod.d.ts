import { JsonApiDocument, JsonApiListResponse } from './JsonApi';
import { IRelationships } from './Relationships';
import { ResultResponse } from './ResultResponse';
export interface ShippingMethodAttr extends JsonApiDocument {
    type: string;
    id: string;
    attributes: {
        number: string;
        free: boolean;
        final_price: string;
        display_final_price: string;
        tracking_url: string;
        state: string;
        shipped_at: Date;
    };
    relationships: IRelationships;
}
export interface IShippingMethods extends JsonApiListResponse {
    data: ShippingMethodAttr[];
}
export interface IShippingMethodsResult extends ResultResponse<IShippingMethods> {
}
