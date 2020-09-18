import { IAddress } from './attributes/Address';
import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi';
import { IQuery } from './Query';
import { IRelationships } from './Relationships';
import { ResultResponse } from './ResultResponse';
export interface AccountAttr extends JsonApiDocument {
    data: {
        id: string;
        type: string;
        attributes: {
            email: string;
            store_credits: number;
            completed_orders: number;
        };
        relationships: IRelationships;
    };
}
export interface IAccount extends JsonApiSingleResponse {
    data: AccountAttr;
}
export interface IAccountResult extends ResultResponse<IAccount> {
}
export interface IAccountConfirmation {
    data: {
        state: string;
    };
}
export interface IAccountConfirmationResult extends ResultResponse<IAccountConfirmation> {
}
export interface AccountAddressParams extends IQuery {
    address: IAddress;
}
export interface AccountAddressAttr extends JsonApiDocument {
    attributes: IAddress;
}
export interface AccountAddressResponse extends JsonApiSingleResponse {
    data: AccountAddressAttr;
}
export interface AccountAddressesResponse extends JsonApiListResponse {
    data: AccountAddressAttr[];
}
export interface AccountAddressResult extends ResultResponse<AccountAddressResponse> {
}
export interface AccountAddressesResult extends ResultResponse<AccountAddressesResponse> {
}
