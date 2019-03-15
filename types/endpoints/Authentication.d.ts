import Http from '../Http';
import { AuthTokenAttr, RefreshTokenAttr } from '../interfaces/Authentication';
import { ITokenResult } from '../interfaces/Token';
export default class Authentication extends Http {
    getToken(params: AuthTokenAttr): Promise<ITokenResult>;
    refreshToken(params: RefreshTokenAttr): Promise<ITokenResult>;
}
