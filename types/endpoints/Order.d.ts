import Http from '../Http';
import { OrderClass } from '../interfaces/endpoints/OrderClass';
import { IOrderResult } from '../interfaces/Order';
import { IQuery } from '../interfaces/Query';
export default class Order extends Http implements OrderClass {
    status(orderNumber: string, params?: IQuery): Promise<IOrderResult>;
}
