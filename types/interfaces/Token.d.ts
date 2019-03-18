import { ResultResponse } from './ResultResponse';
export interface IToken {
    orderToken?: string;
    bearerToken?: string;
}
export interface ITokenResult extends ResultResponse<IToken> {
}
