import Http from '../Http';
import { AuthTokenAttr, RefreshTokenAttr } from '../interfaces/Authentication';
import { IOAuthTokenResult } from '../interfaces/Token';
export default class Authentication extends Http {
    getToken(params: AuthTokenAttr): Promise<IOAuthTokenResult>;
    refreshToken(params: RefreshTokenAttr): Promise<IOAuthTokenResult>;
}
