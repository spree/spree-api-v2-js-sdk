import { GET } from '../constants'
import Http from '../Http'
import { IOrderResult } from '../interfaces/Order'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Order extends Http {
  public async status(token: IToken, orderNumber: string, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse(GET, Routes.orderStatusPath(orderNumber), token, params) as IOrderResult
  }
}
