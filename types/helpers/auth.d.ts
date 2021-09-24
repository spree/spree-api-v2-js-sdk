import { AuthTokenAttr, AuthTokenParams, RefreshTokenAttr, RefreshTokenParams, RevokeTokenAttr, RevokeTokenParams } from '../interfaces/Authentication';
export declare const authParams: ({ username, password }: AuthTokenAttr) => AuthTokenParams;
export declare const refreshParams: ({ refresh_token }: RefreshTokenAttr) => RefreshTokenParams;
export declare const revokeParams: ({ token }: RevokeTokenAttr) => RevokeTokenParams;
