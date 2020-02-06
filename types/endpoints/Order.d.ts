import Http from '../Http';
import { IOrderResult } from '../interfaces/Order';
import { IQuery } from '../interfaces/Query';
import { IToken } from '../interfaces/Token';
export default class Order extends Http {
    status(token: IToken, orderNumber: string, params?: IQuery): Promise<IOrderResult>;
}
