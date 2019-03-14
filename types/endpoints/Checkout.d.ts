import Http from '../Http';
import { AddStoreCredit, CheckoutClass, NestedAttributes } from '../interfaces/endpoints/CheckoutClass';
import { JsonApiListResponse } from '../interfaces/JsonApi';
import { IQuery } from '../interfaces/Query';
import { ResultResponse } from '../interfaces/ResultResponse';
import { IToken } from '../interfaces/Token';
export default class Checkout extends Http implements CheckoutClass {
    orderNext(token: IToken, params?: IQuery): Promise<ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
    orderUpdate(token: IToken, params: NestedAttributes): Promise<ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
    advance(token: IToken, params?: IQuery): Promise<ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
    complete(token: IToken, params?: IQuery): Promise<ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
    addStoreCredits(token: IToken, params: AddStoreCredit): Promise<ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
    removeStoreCredits(token: IToken, params?: IQuery): Promise<ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
    paymentMethods(token: IToken): Promise<ResultResponse<JsonApiListResponse>>;
    shippingMethods(token: IToken): Promise<ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
}
