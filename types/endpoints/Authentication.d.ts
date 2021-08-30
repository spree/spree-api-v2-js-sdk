import Http from '../Http';
import type { AuthTokenAttr, RefreshTokenAttr } from '../interfaces/Authentication';
import type { IOAuthTokenResult } from '../interfaces/Token';
export default class Authentication extends Http {
    getToken(params: AuthTokenAttr): Promise<IOAuthTokenResult>;
    refreshToken(params: RefreshTokenAttr): Promise<IOAuthTokenResult>;
}
