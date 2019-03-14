import { AxiosInstance } from 'axios';
import { AuthTokenAttr, RefreshTokenAttr } from '../interfaces/Authentication';
export default class Authentication {
    host: string;
    axios: AxiosInstance;
    constructor();
    getToken(params: AuthTokenAttr): Promise<any>;
    refreshToken(params: RefreshTokenAttr): Promise<any>;
}
