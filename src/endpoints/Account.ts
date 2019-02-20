import { GET } from '../constants'
import Http from '../Http'
import { IAccount } from '../interfaces/Account'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Account extends Http {
  public async accountInfo(token: IToken): Promise<IAccount> {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountPath())
  }

  public async creditCardsList(token: IToken) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountCreditCardsPath())
  }

  public async defaultCreditCard(token: IToken) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountDefaultCreditCardPath())
  }

  public async completedOrdersList(token: IToken) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountCompletedOrdersPath())
  }

  public async completedOrder(token: IToken, number: string) {
    this.spreeTokens = token
    return await this.spreeResponse(GET, Routes.accountCompletedOrderPath(number))
  }
}
