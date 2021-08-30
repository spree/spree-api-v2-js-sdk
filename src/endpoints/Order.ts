import Http from '../Http'
import type { IOrder, IOrderResult } from '../interfaces/Order'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Order extends Http {
  public async status(token: IToken, orderNumber: string, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('get', routes.orderStatusPath(orderNumber), token, params)
  }
}
