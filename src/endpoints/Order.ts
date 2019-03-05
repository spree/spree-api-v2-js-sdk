import { GET } from '../constants'
import Http from '../Http'
import { OrderClass } from '../interfaces/endpoints/OrderClass'
import { IOrder } from '../interfaces/Order'
import { IQuery } from '../interfaces/Query'
import { Routes } from '../routes'

export default class Order extends Http implements OrderClass {
  public async status(orderNumber: string, params: IQuery = {}): Promise<IOrder> {
    return await this.spreeResponse(GET, Routes.orderStatusPath(orderNumber), params)
  }
}
