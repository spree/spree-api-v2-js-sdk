import Http from '../Http';
import { IAccountResult } from '../interfaces/Account';
import { IQuery } from '../interfaces/Query';
import { IToken } from '../interfaces/Token';
export default class Account extends Http {
    accountInfo(token: IToken, params?: IQuery): Promise<IAccountResult>;
    creditCardsList(token: IToken, params?: IQuery): Promise<import("../interfaces/ResultResponse").ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
    defaultCreditCard(token: IToken, params?: IQuery): Promise<import("../interfaces/ResultResponse").ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
    completedOrdersList(token: IToken, params?: IQuery): Promise<import("../interfaces/ResultResponse").ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
    completedOrder(token: IToken, orderNumber: string, params?: IQuery): Promise<import("../interfaces/ResultResponse").ResultResponse<import("../interfaces/JsonApi").JsonApiResponse>>;
}
