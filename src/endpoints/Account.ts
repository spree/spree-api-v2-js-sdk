import { GET } from '../constants'
import Http from '../Http'
import { IAccount } from '../interfaces/Account'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Account extends Http {
  public async accountInfo(token: IToken, params: IQuery = {}): Promise<IAccount> {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountPath(), params)
  }

  public async creditCardsList(token: IToken, params: IQuery = {}) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountCreditCardsPath(), params)
  }

  public async defaultCreditCard(token: IToken, params: IQuery = {}) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountDefaultCreditCardPath(), params)
  }

  public async completedOrdersList(token: IToken, params: IQuery = {}) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountCompletedOrdersPath(), params)
  }

  public async completedOrder(token: IToken, number: string, params: IQuery = {}) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountCompletedOrderPath(number), params)
  }
}
