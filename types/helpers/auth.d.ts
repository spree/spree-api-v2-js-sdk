import { AuthTokenAttr, AuthTokenParams, RefreshTokenAttr, RefreshTokenParams } from '../interfaces/Authentication';
export declare const authParams: ({ username, password }: AuthTokenAttr) => AuthTokenParams;
export declare const refreshParams: ({ refresh_token }: RefreshTokenAttr) => RefreshTokenParams;
