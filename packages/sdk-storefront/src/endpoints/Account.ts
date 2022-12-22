import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  IQuery,
  IToken,
  NoContentResponse,
  NoContentResult,
  AllowedClientBuilderOptions
} from '@spree/core-api-v2-sdk'
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
import type { IOrder, IOrderResult, IOrders, IOrdersResult } from '../interfaces/Order'
import routes from '../routes'

export default class Account<ClientOptions extends AllowedClientBuilderOptions> extends Http {
  /**
   * Creates new account and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/534a12ece987f-create-an-account).
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.create({
   *   user: {
   *     email: 'john@snow.org',
   *     password: 'spree123',
   *     password_confirmation: 'spree123'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IAccountResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   * Creates new account and returns its attributes.
   */
  public async create(params: IQuery): Promise<IAccountResult>
  public async create(...allArguments: any[]): Promise<IAccountResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<IAccount>('post', routes.accountPath(), token, params)
  }

  /**
   * Confirms new account e-mail and returns account registration status. See [reference](https://github.com/spree/spree_auth_devise/blob/db4ccf202f42cdb713931e9915b213ab9c9b2062/config/routes.rb).
   * 
   * **Success response schema:**
   * ```ts
   * {
   *   data: {
   *     state: string
   *   }
   * }
   * ```
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.confirm({ confirmation_token: '2xssfC9Hzf8DJXyRZGmB' })
   * ```
   */
  public async confirm(option: ConfirmOptions): Promise<IAccountConfirmationResult>
  /**
   * @hidden
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

  /**
   * Sends an account recovery link to the provided email address. The link allows resetting the password for the account.
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.forgotPassword({
   *   user: {
   *     email: 'spree@example.com'
   *   }
   * })
   * ```
   */
  public async forgotPassword(options: ForgotPasswordOptions): Promise<NoContentResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async forgotPassword(params: ForgotPasswordParams): Promise<NoContentResult>
  public async forgotPassword(...allArguments: any[]): Promise<NoContentResult> {
    const [paramsOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<NoContentResponse>('post', routes.forgotPasswordPath(), token, params)
  }

  /**
   * Changes the password associated with the account using an account recovery token.
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.resetPassword({
   *   reset_password_token: '7381273269536713689562374856',
   *   user: {
   *     password: '123!@#asdASD',
   *     password_confirmation: '123!@#asdASD'
   *   }
   * })
   * ```
   */
  public async resetPassword(options: ResetPasswordOptions): Promise<NoContentResult>
  /**
   * @hidden
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

  /**
   * Updates account and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/9f8e112bbb91f-update-an-account).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.update({
   *   bearer_token: '7381273269536713689562374856',
   *   user: {
   *     email: 'john@snow.org',
   *     password: 'new_spree123',
   *     password_confirmation: 'new_spree123'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IAccountResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async update(token: IToken, params: IQuery): Promise<IAccountResult>
  public async update(...allArguments: any[]): Promise<IAccountResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IAccount>('patch', routes.accountPath(), token, params)
  }

  /**
   * Returns current user information. See [api docs](https://api.spreecommerce.org/docs/api-v2/a531029531471-retrieve-an-account).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.accountInfo({ bearer_token: '7381273269536713689562374856' })
   * ```
   */
  public async accountInfo(options: AccountInfoOptions<ClientOptions>): Promise<IAccountResult> {
    const { token, params } = squashAndPreparePositionalArguments([options || {}], [])

    return await this.spreeResponse<IAccount>('get', routes.accountPath(), token, params)
  }

  /**
   * Returns a list of Credit Cards for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/eae76f03a90db-list-all-credit-cards).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.creditCardsList({ bearer_token: '7381273269536713689562374856' })
   * ```
   */
  public async creditCardsList(options: CreditCardsListOptions): Promise<ICreditCardsResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async creditCardsList(token: IToken, params?: IQuery): Promise<ICreditCardsResult>
  public async creditCardsList(...allArguments: any[]): Promise<ICreditCardsResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<ICreditCards>('get', routes.accountCreditCardsPath(), token, params)
  }

  /**
   * Return the User's default Credit Card. See [api docs](https://api.spreecommerce.org/docs/api-v2/1054d9230daf4-retrieve-the-default-credit-card).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.defaultCreditCard({ bearer_token: '7381273269536713689562374856' })
   * ```
   */
  public async defaultCreditCard(options: DefaultCreditCardOptions): Promise<ICreditCardResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async defaultCreditCard(token: IToken, params?: IQuery): Promise<ICreditCardResult>
  public async defaultCreditCard(...allArguments: any[]): Promise<ICreditCardResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<ICreditCard>('get', routes.accountDefaultCreditCardPath(), token, params)
  }

  /**
   * Remove a User's Credit Card. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MTc1NjU3NDM-remove-a-credit-card).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.removeCreditCard({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '14'
   * })
   * ```
   */
  public async removeCreditCard(options: RemoveCreditCardOptions): Promise<NoContentResult>
  /**
   * @hidden
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

  /**
   * Returns Orders placed by the User. Only completed ones. See [api docs](https://api.spreecommerce.org/docs/api-v2/94d319dfe8909-list-all-orders).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.completedOrdersList({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async completedOrdersList(options: CompletedOrdersListOptions): Promise<IOrdersResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async completedOrdersList(token: IToken, params?: IQuery): Promise<IOrdersResult>
  public async completedOrdersList(...allArguments: any[]): Promise<IOrdersResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrders>('get', routes.accountCompletedOrdersPath(), token, params)
  }

  /**
   * Return the User's completed Order. See [api docs](https://api.spreecommerce.org/docs/api-v2/ab4c5da10fbba-retrieve-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.completedOrder({
   *   bearer_token: '7381273269536713689562374856',
   *   order_number: 'R653163382'
   * })
   * ```
   */
  public async completedOrder(options: CompletedOrderOptions): Promise<IOrderResult>
  /**
   * @hidden
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

  /**
   * Returns a list of Addresses for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/c8ebb212f75bf-list-all-addresses).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.addressesList({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async addressesList(options: AddressesListOptions): Promise<AccountAddressesResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async addressesList(token: IToken): Promise<AccountAddressesResult>
  public async addressesList(...allArguments: any[]): Promise<AccountAddressesResult> {
    const [tokenOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions], [])

    return await this.spreeResponse<AccountAddressesResponse>('get', routes.accountAddressesPath(), token, params)
  }

  /**
   * Returns a single address for the signed in User.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.showAddress({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async showAddress(options: ShowAddressOptions): Promise<AccountAddressResult>
  /**
   * @hidden
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

  /**
   * Create a new Address for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/daacab4666dfc-create-an-address).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   address: {
   *     firstname: string
   *     lastname: string
   *     address1: string
   *     address2?: string
   *     city: string
   *     phone?: string
   *     zipcode: string
   *     state_name: string // State Abbreviations
   *     country_iso: string // Country ISO (2-chars) or ISO3 (3-chars)
   *     company?: string
   *   }
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.createAddress({
   *   bearer_token: '7381273269536713689562374856',
   *   address: {
   *     firstname: 'John',
   *     lastname: 'Snow',
   *     address1: '7735 Old Georgetown Road',
   *     address2: '2nd Floor',
   *     city: 'Bethesda',
   *     phone: '3014445002',
   *     zipcode: '20814',
   *     state_name: 'MD',
   *     country_iso: 'US',
   *     company: 'Spark'
   *   }
   * })
   * ```
   */
  public async createAddress(options: CreateAddressOptions): Promise<AccountAddressResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async createAddress(token: IToken, params: AccountAddressParams): Promise<AccountAddressResult>
  public async createAddress(...allArguments: any[]): Promise<AccountAddressResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<AccountAddressResponse>('post', routes.accountAddressesPath(), token, params)
  }

  /**
   * Removes selected Address for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MTAwNjA3Njg-remove-an-address).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.removeAddress({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async removeAddress(options: RemoveAddressOptions): Promise<NoContentResult>
  /**
   * @hidden
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

  /**
   * Update selected Address for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/fbae19a10190d-update-an-address).
   * 
   * Required token: Bearer token
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   id: string
   *   address: {
   *     firstname: string
   *     lastname: string
   *     address1: string
   *     address2?: string
   *     city: string
   *     phone?: string
   *     zipcode: string
   *     state_name: string // State Abbreviations
   *     country_iso: string // Country ISO (2-chars) or ISO3 (3-chars)
   *     company?: string
   *   }
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.account.updateAddress({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   address: {
   *     firstname: 'John',
   *     lastname: 'Snow',
   *     address1: '7735 Old Georgetown Road',
   *     address2: '2nd Floor',
   *     city: 'Bethesda',
   *     phone: '3014445002',
   *     zipcode: '20814',
   *     state_name: 'MD',
   *     country_iso: 'US',
   *     company: 'Spark'
   *   }
   * })
   * ```
   */
  public async updateAddress(options: UpdateAddressOptions): Promise<AccountAddressResult>
  /**
   * @hidden
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