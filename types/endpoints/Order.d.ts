import Http from '../Http';
import { IOrderResult } from '../interfaces/Order';
import { IQuery } from '../interfaces/Query';
export default class Order extends Http {
    status(orderNumber: string, params?: IQuery): Promise<IOrderResult>;
}
