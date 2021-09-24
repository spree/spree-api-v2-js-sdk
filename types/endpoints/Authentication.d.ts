import Http from '../Http';
import type { AuthTokenAttr, RefreshTokenAttr, RevokeTokenAttr } from '../interfaces/Authentication';
import type { IOAuthTokenResult } from '../interfaces/Token';
import type { NoContentResult } from '../interfaces/NoContent';
export default class Authentication extends Http {
    getToken(params: AuthTokenAttr): Promise<IOAuthTokenResult>;
    refreshToken(params: RefreshTokenAttr): Promise<IOAuthTokenResult>;
    revokeToken(params: RevokeTokenAttr): Promise<NoContentResult>;
}
