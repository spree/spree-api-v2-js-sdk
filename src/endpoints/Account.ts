import { GET } from '../constants'
import Http from '../Http'
import { IAccountResult } from '../interfaces/Account'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Account extends Http {
  public async accountInfo(token: IToken, params: IQuery = {}): Promise<IAccountResult> {
    return await this.spreeResponse(GET, Routes.accountPath(), token, params) as IAccountResult
  }

  public async creditCardsList(token: IToken, params: IQuery = {}) {
    return await this.spreeResponse(GET, Routes.accountCreditCardsPath(), token, params)
  }

  public async defaultCreditCard(token: IToken, params: IQuery = {}) {
    return await this.spreeResponse(GET, Routes.accountDefaultCreditCardPath(), token, params)
  }

  public async completedOrdersList(token: IToken, params: IQuery = {}) {
    return await this.spreeResponse(GET, Routes.accountCompletedOrdersPath(), token, params)
  }

  public async completedOrder(token: IToken, orderNumber: string, params: IQuery = {}) {
    return await this.spreeResponse(GET, Routes.accountCompletedOrderPath(orderNumber), token, params)
  }
}
