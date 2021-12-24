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
    const { orderNumber, token, params } = squashAndPreparePositionalArguments(
      [tokenOrOptions, { orderNumber: positionalOrderNumber }, positionalParams],
      ['orderNumber']
    )

    return await this.spreeResponse<IOrder>('get', routes.orderStatusPath(orderNumber), token, params)
  }
}
