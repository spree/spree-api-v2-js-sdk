import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type { IOrder, IOrderResult, StatusOptions } from '../interfaces/Order'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Order extends Http {
  public async status(options: StatusOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async status(token: IToken, orderNumber: string, params?: IQuery): Promise<IOrderResult>
  public async status(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalOrderNumber, positionalParams = {}] = allArguments
    const { order_number, token, params } = squashAndPreparePositionalArguments(
      [tokenOrOptions, { order_number: positionalOrderNumber }, positionalParams],
      ['order_number']
    )

    return await this.spreeResponse<IOrder>('get', routes.orderStatusPath(order_number), token, params)
  }
}
