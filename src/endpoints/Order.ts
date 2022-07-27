import Http from '../Http'
import type { IOrder, IOrderResult, StatusOptions } from '../interfaces/Order'
import routes from '../routes'

export default class Order extends Http {
  public async status(options: StatusOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<IOrder>('get', routes.orderStatusPath(options.order_number), token, {})
  }
}
