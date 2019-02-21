import { GET } from '../constants'
import Http from '../Http'
import { OrderClass } from '../interfaces/endpoints/OrderClass'
import { IOrder } from '../interfaces/Order'
import { Routes } from '../routes'

export default class Order extends Http implements OrderClass {
  public async status(number: string): Promise<IOrder> {
    return await this.spreeResponse(GET, Routes.orderStatusPath(number))
  }
}
