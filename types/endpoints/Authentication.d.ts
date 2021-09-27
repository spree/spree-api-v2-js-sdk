import Http from '../Http';
import type { AuthTokenAttr, RefreshTokenAttr, RevokeTokenAttr } from '../interfaces/Authentication';
import type { IOAuthTokenResult } from '../interfaces/Token';
import type { EmptyObjectResult } from '../interfaces/EmptyObject';
export default class Authentication extends Http {
    getToken(params: AuthTokenAttr): Promise<IOAuthTokenResult>;
    refreshToken(params: RefreshTokenAttr): Promise<IOAuthTokenResult>;
    revokeToken(params: RevokeTokenAttr): Promise<EmptyObjectResult>;
}
