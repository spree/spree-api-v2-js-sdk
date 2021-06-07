import Http from '../Http'
import {
  IAccountResult,
  IAccountConfirmationResult,
  IAccountConfirmation,
  AccountAddressesResult,
  AccountAddressResult,
  AccountAddressParams,
  AccountAddressResponse,
  ForgotPasswordParams,
  ResetPasswordParams
} from '../interfaces/Account'
import { ICreditCardResult, ICreditCardsResult } from '../interfaces/CreditCard'
import { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import { IOrderResult, IOrdersResult } from '../interfaces/Order'
import { IQuery } from '../interfaces/Query'
import { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Account extends Http {
  public async accountInfo(token: IToken, params: IQuery = {}): Promise<IAccountResult> {
    return (await this.spreeResponse('get', routes.accountPath(), token, params)) as IAccountResult
  }

  public async creditCardsList(token: IToken, params: IQuery = {}): Promise<ICreditCardsResult> {
    return (await this.spreeResponse('get', routes.accountCreditCardsPath(), token, params)) as ICreditCardsResult
  }

  public async defaultCreditCard(token: IToken, params: IQuery = {}): Promise<ICreditCardResult> {
    return (await this.spreeResponse('get', routes.accountDefaultCreditCardPath(), token, params)) as ICreditCardResult
  }

  public async completedOrdersList(token: IToken, params: IQuery = {}): Promise<IOrdersResult> {
    return (await this.spreeResponse('get', routes.accountCompletedOrdersPath(), token, params)) as IOrdersResult
  }

  public async completedOrder(token: IToken, orderNumber: string, params: IQuery = {}): Promise<IOrderResult> {
    return (await this.spreeResponse(
      'get',
      routes.accountCompletedOrderPath(orderNumber),
      token,
      params
    )) as IOrderResult
  }

  public async create(params: IQuery): Promise<IAccountResult> {
    return (await this.spreeResponse('post', routes.accountPath(), {}, params)) as IAccountResult
  }

  public async confirm(confirmationToken: string): Promise<IAccountConfirmationResult> {
    return (await this.spreeResponse<IAccountConfirmation>(
      'get',
      routes.accountConfirmPath(confirmationToken)
    )) as IAccountConfirmationResult
  }

  public async forgotPassword(params: ForgotPasswordParams): Promise<NoContentResult> {
    return await this.spreeResponse<NoContentResponse>('post', routes.forgotPasswordPath(), {}, params)
  }

  public async resetPassword(resetPasswordToken: string, params: ResetPasswordParams): Promise<NoContentResult> {
    return await this.spreeResponse<NoContentResponse>(
      'patch',
      routes.resetPasswordPath(resetPasswordToken),
      {},
      params
    )
  }

  public async update(token: IToken, params: IQuery): Promise<IAccountResult> {
    return (await this.spreeResponse('patch', routes.accountPath(), token, params)) as IAccountResult
  }

  public async addressesList(token: IToken): Promise<AccountAddressesResult> {
    return (await this.spreeResponse('get', routes.accountAddressesPath(), token)) as AccountAddressesResult
  }

  public async showAddress(token: IToken, addressId: string, params: IQuery = {}): Promise<AccountAddressResult> {
    return await this.spreeResponse<AccountAddressResponse>('get', routes.accountAddressPath(addressId), token, params)
  }

  public async createAddress(token: IToken, params: AccountAddressParams): Promise<AccountAddressResult> {
    return (await this.spreeResponse('post', routes.accountAddressesPath(), token, params)) as AccountAddressResult
  }

  public async removeAddress(token: IToken, id: string, params: IQuery = {}): Promise<NoContentResult> {
    return await this.spreeResponse<NoContentResponse>('delete', routes.accountAddressRemovePath(id), token, params)
  }

  public async updateAddress(
    token: IToken,
    addressId: string,
    params: AccountAddressParams
  ): Promise<AccountAddressResult> {
    return (await this.spreeResponse(
      'patch',
      routes.accountAddressPath(addressId),
      token,
      params
    )) as AccountAddressResult
  }
}
