import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type { IOrder, IOrderResult, StatusOptions } from '../interfaces/Order'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Order extends Http {
  /**
   * Returns a placed Order.
   * 
   * **Required token:** [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   order_number: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.order.status({
   *   order_token: '7381273269536713689562374856',
   *   order_number: 'R653163382'
   * })
   * ```
   */
  public async status(options: StatusOptions): Promise<IOrderResult>
  /**
   * @hidden
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
