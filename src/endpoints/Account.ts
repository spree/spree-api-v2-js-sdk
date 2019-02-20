import Http from '../Http'
import { IAccount } from '../interfaces/Account'
import { IToken } from '../interfaces/Token'
import { Routes } from '../routes'

export default class Account extends Http {
  public async accountInfo(token: IToken): Promise<IAccount | Error> {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.accountPath())
      return await res.data
    } catch (err) {
      return this.errorMessage
    }
  }

  public async creditCardsList(token: IToken) {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.accountCreditCardsPath())
      return await res.data
    } catch (err) {
      return this.errorMessage
    }
  }

  public async defaultCreditCard(token: IToken) {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.accountDefaultCreditCardPath())
      return await res.data
    } catch (err) {
      return this.errorMessage
    }
  }

  public async completedOrdersList(token: IToken) {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.accountCompletedOrdersPath())
      return await res.data
    } catch (err) {
      return this.errorMessage
    }
  }

  public async completedOrder(token: IToken, number: string) {
    this.spreeTokens = token

    try {
      const res = await this.get(Routes.accountCompletedOrderPath(number))
      return await res.data
    } catch (err) {
      return this.errorMessage
    }
  }
}