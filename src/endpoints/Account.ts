import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
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
  AccountAddressesResponse,
  AccountInfoOptions,
  CreditCardsListOptions,
  DefaultCreditCardOptions,
  RemoveCreditCardOptions,
  CompletedOrdersListOptions,
  CompletedOrderOptions,
  CreateOptions,
  ConfirmOptions,
  ForgotPasswordOptions,
  ResetPasswordOptions,
  UpdateOptions,
  AddressesListOptions,
  ShowAddressOptions,
  CreateAddressOptions,
  RemoveAddressOptions,
  UpdateAddressOptions
} from '../interfaces/Account'
import type { ICreditCard, ICreditCardResult, ICreditCards, ICreditCardsResult } from '../interfaces/CreditCard'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import type { IOrder, IOrderResult, IOrders, IOrdersResult } from '../interfaces/Order'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'

export default class Account extends Http {
  public async accountInfo(options: AccountInfoOptions): Promise<IAccountResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async accountInfo(token: IToken, params?: IQuery): Promise<IAccountResult>
  public async accountInfo(...allArguments: any[]): Promise<IAccountResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IAccount>('get', routes.accountPath(), token, params)
  }

  public async creditCardsList(options: CreditCardsListOptions): Promise<ICreditCardsResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async creditCardsList(token: IToken, params?: IQuery): Promise<ICreditCardsResult>
  public async creditCardsList(...allArguments: any[]): Promise<ICreditCardsResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<ICreditCards>('get', routes.accountCreditCardsPath(), token, params)
  }

  public async defaultCreditCard(options: DefaultCreditCardOptions): Promise<ICreditCardResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async defaultCreditCard(token: IToken, params?: IQuery): Promise<ICreditCardResult>
  public async defaultCreditCard(...allArguments: any[]): Promise<ICreditCardResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<ICreditCard>('get', routes.accountDefaultCreditCardPath(), token, params)
  }

  public async removeCreditCard(options: RemoveCreditCardOptions): Promise<NoContentResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async removeCreditCard(token: IToken, id: string, params?: IQuery): Promise<NoContentResult>
  public async removeCreditCard(...allArguments: any[]): Promise<NoContentResult> {
    const [tokenOrOptions, positionalId, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [{ id: positionalId }, tokenOrOptions, positionalParams],
      ['id']
    )

    return await this.spreeResponse<NoContentResponse>('delete', routes.accountCreditCardRemovePath(id), token, params)
  }

  public async completedOrdersList(options: CompletedOrdersListOptions): Promise<IOrdersResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async completedOrdersList(token: IToken, params?: IQuery): Promise<IOrdersResult>
  public async completedOrdersList(...allArguments: any[]): Promise<IOrdersResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrders>('get', routes.accountCompletedOrdersPath(), token, params)
  }

  public async completedOrder(options: CompletedOrderOptions): Promise<IOrderResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async completedOrder(token: IToken, orderNumber: string, params?: IQuery): Promise<IOrderResult>
  public async completedOrder(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalOrderNumber, positionalParams = {}] = allArguments
    const { order_number, token, params } = squashAndPreparePositionalArguments(
      [{ order_number: positionalOrderNumber }, tokenOrOptions, positionalParams],
      ['order_number']
    )

    return await this.spreeResponse<IOrder>('get', routes.accountCompletedOrderPath(order_number), token, params)
  }

  public async create(options: CreateOptions): Promise<IAccountResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async create(params: IQuery): Promise<IAccountResult>
  public async create(...allArguments: any[]): Promise<IAccountResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<IAccount>('post', routes.accountPath(), token, params)
  }

  public async confirm(option: ConfirmOptions): Promise<IAccountConfirmationResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async confirm(confirmationToken: string): Promise<IAccountConfirmationResult>
  public async confirm(...allArguments: any[]): Promise<IAccountConfirmationResult> {
    const [confirmationTokenOrOptions] = allArguments
    const { confirmation_token, token, params } = squashAndPreparePositionalArguments(
      [
        typeof confirmationTokenOrOptions === 'object'
          ? confirmationTokenOrOptions
          : { confirmation_token: confirmationTokenOrOptions }
      ],
      ['confirmation_token']
    )

    return await this.spreeResponse<IAccountConfirmation>(
      'get',
      routes.accountConfirmPath(confirmation_token),
      token,
      params
    )
  }

  public async forgotPassword(options: ForgotPasswordOptions): Promise<NoContentResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async forgotPassword(params: ForgotPasswordParams): Promise<NoContentResult>
  public async forgotPassword(...allArguments: any[]): Promise<NoContentResult> {
    const [paramsOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<NoContentResponse>('post', routes.forgotPasswordPath(), token, params)
  }

  public async resetPassword(options: ResetPasswordOptions): Promise<NoContentResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async resetPassword(resetPasswordToken: string, params: ResetPasswordParams): Promise<NoContentResult>
  public async resetPassword(...allArguments: any[]): Promise<NoContentResult> {
    const [resetPasswordTokenOrOptions, positionalParams] = allArguments
    const { reset_password_token, token, params } = squashAndPreparePositionalArguments(
      [
        typeof resetPasswordTokenOrOptions === 'object'
          ? resetPasswordTokenOrOptions
          : { resetPasswordToken: resetPasswordTokenOrOptions },
        positionalParams
      ],
      ['reset_password_token']
    )

    return await this.spreeResponse<NoContentResponse>(
      'patch',
      routes.resetPasswordPath(reset_password_token),
      token,
      params
    )
  }

  public async update(options: UpdateOptions): Promise<IAccountResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async update(token: IToken, params: IQuery): Promise<IAccountResult>
  public async update(...allArguments: any[]): Promise<IAccountResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IAccount>('patch', routes.accountPath(), token, params)
  }

  public async addressesList(options: AddressesListOptions): Promise<AccountAddressesResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async addressesList(token: IToken): Promise<AccountAddressesResult>
  public async addressesList(...allArguments: any[]): Promise<AccountAddressesResult> {
    const [tokenOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions], [])

    return await this.spreeResponse<AccountAddressesResponse>('get', routes.accountAddressesPath(), token, params)
  }

  public async showAddress(options: ShowAddressOptions): Promise<AccountAddressResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async showAddress(token: IToken, addressId: string, params?: IQuery): Promise<AccountAddressResult>
  public async showAddress(...allArguments: any[]): Promise<AccountAddressResult> {
    const [tokenOrOptions, positionalId, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [{ id: positionalId }, tokenOrOptions, positionalParams],
      ['id']
    )

    return await this.spreeResponse<AccountAddressResponse>('get', routes.accountAddressPath(id), token, params)
  }

  public async createAddress(options: CreateAddressOptions): Promise<AccountAddressResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async createAddress(token: IToken, params: AccountAddressParams): Promise<AccountAddressResult>
  public async createAddress(...allArguments: any[]): Promise<AccountAddressResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<AccountAddressResponse>('post', routes.accountAddressesPath(), token, params)
  }

  public async removeAddress(options: RemoveAddressOptions): Promise<NoContentResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async removeAddress(token: IToken, id: string, params?: IQuery): Promise<NoContentResult>
  public async removeAddress(...allArguments: any[]): Promise<NoContentResult> {
    const [tokenOrOptions, positionalId, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [{ id: positionalId }, tokenOrOptions, positionalParams],
      ['id']
    )

    return await this.spreeResponse<NoContentResponse>('delete', routes.accountAddressRemovePath(id), token, params)
  }

  public async updateAddress(options: UpdateAddressOptions): Promise<AccountAddressResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async updateAddress(
    token: IToken,
    addressId: string,
    params: AccountAddressParams
  ): Promise<AccountAddressResult>
  public async updateAddress(...allArguments: any[]): Promise<AccountAddressResult> {
    const [tokenOrOptions, positionalId, positionalParams] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [{ id: positionalId }, tokenOrOptions, positionalParams],
      ['id']
    )

    return await this.spreeResponse<AccountAddressResponse>('patch', routes.accountAddressPath(id), token, params)
  }
}
