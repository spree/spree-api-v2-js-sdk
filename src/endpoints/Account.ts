import Http from '../Http'
import type {
  IAccountResult,
  IAccountConfirmationResult,
  IAccountConfirmation,
  AccountAddressesResult,
  AccountAddressResult,
  AccountAddressParams,
  AccountAddressResponse,
  ForgotPasswordParams,
  ResetPasswordParams,
  IAccount,
  AccountAddressesResponse
} from '../interfaces/Account'
import type { ICreditCard, ICreditCardResult, ICreditCards, ICreditCardsResult } from '../interfaces/CreditCard'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import type { IOrder, IOrderResult, IOrders, IOrdersResult } from '../interfaces/Order'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Account extends Http {
  public async accountInfo(token: IToken, params: IQuery = {}): Promise<IAccountResult> {
    return await this.spreeResponse<IAccount>('get', routes.accountPath(), token, params)
  }

  public async creditCardsList(token: IToken, params: IQuery = {}): Promise<ICreditCardsResult> {
    return await this.spreeResponse<ICreditCards>('get', routes.accountCreditCardsPath(), token, params)
  }

  public async defaultCreditCard(token: IToken, params: IQuery = {}): Promise<ICreditCardResult> {
    return await this.spreeResponse<ICreditCard>('get', routes.accountDefaultCreditCardPath(), token, params)
  }

  public async completedOrdersList(token: IToken, params: IQuery = {}): Promise<IOrdersResult> {
    return await this.spreeResponse<IOrders>('get', routes.accountCompletedOrdersPath(), token, params)
  }

  public async completedOrder(token: IToken, orderNumber: string, params: IQuery = {}): Promise<IOrderResult> {
    return await this.spreeResponse<IOrder>('get', routes.accountCompletedOrderPath(orderNumber), token, params)
  }

  public async create(params: IQuery): Promise<IAccountResult> {
    return await this.spreeResponse<IAccount>('post', routes.accountPath(), {}, params)
  }

  public async confirm(confirmationToken: string): Promise<IAccountConfirmationResult> {
    return await this.spreeResponse<IAccountConfirmation>('get', routes.accountConfirmPath(confirmationToken))
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
    return await this.spreeResponse<IAccount>('patch', routes.accountPath(), token, params)
  }

  public async addressesList(token: IToken): Promise<AccountAddressesResult> {
    return await this.spreeResponse<AccountAddressesResponse>('get', routes.accountAddressesPath(), token)
  }

  public async showAddress(token: IToken, addressId: string, params: IQuery = {}): Promise<AccountAddressResult> {
    return await this.spreeResponse<AccountAddressResponse>('get', routes.accountAddressPath(addressId), token, params)
  }

  public async createAddress(token: IToken, params: AccountAddressParams): Promise<AccountAddressResult> {
    return await this.spreeResponse<AccountAddressResponse>('post', routes.accountAddressesPath(), token, params)
  }

  public async removeAddress(token: IToken, id: string, params: IQuery = {}): Promise<NoContentResult> {
    return await this.spreeResponse<NoContentResponse>('delete', routes.accountAddressRemovePath(id), token, params)
  }

  public async updateAddress(
    token: IToken,
    addressId: string,
    params: AccountAddressParams
  ): Promise<AccountAddressResult> {
    return await this.spreeResponse<AccountAddressResponse>(
      'patch',
      routes.accountAddressPath(addressId),
      token,
      params
    )
  }
}
