import Http from '../Http';
import type { IOrderResult } from '../interfaces/Order';
import type { IQuery } from '../interfaces/Query';
import type { IToken } from '../interfaces/Token';
export default class Order extends Http {
    status(token: IToken, orderNumber: string, params?: IQuery): Promise<IOrderResult>;
}
