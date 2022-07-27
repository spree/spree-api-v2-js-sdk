import Http from '../Http'
import type {
  IAccountResult,
  AccountAddressesResult,
  AccountAddressResult,
  AccountAddressResponse,
  IAccount,
  AccountAddressesResponse,
  AccountInfoOptions,
  CreditCardsListOptions,
  DefaultCreditCardOptions,
  RemoveCreditCardOptions,
  CompletedOrdersListOptions,
  CompletedOrderOptions,
  CreateOptions,
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
import routes from '../routes'

export default class Account extends Http {
  public async accountInfo(options: AccountInfoOptions): Promise<IAccountResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<IAccount>('get', routes.accountPath(), token, {})
  }

  public async creditCardsList(options: CreditCardsListOptions): Promise<ICreditCardsResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<ICreditCards>('get', routes.accountCreditCardsPath(), token, {})
  }

  public async defaultCreditCard(options: DefaultCreditCardOptions): Promise<ICreditCardResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<ICreditCard>('get', routes.accountDefaultCreditCardPath(), token, {})
  }

  public async removeCreditCard(options: RemoveCreditCardOptions): Promise<NoContentResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<NoContentResponse>('delete', routes.accountCreditCardRemovePath(options.id), token, {})
  }

  public async completedOrdersList(options: CompletedOrdersListOptions): Promise<IOrdersResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<IOrders>('get', routes.accountCompletedOrdersPath(), token, {})
  }

  public async completedOrder(options: CompletedOrderOptions): Promise<IOrderResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<IOrder>('get', routes.accountCompletedOrderPath(options.order_number), token, {})
  }

  public async create(options: CreateOptions): Promise<IAccountResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = { user: options.user }

    return await this.spreeResponse<IAccount>('post', routes.accountPath(), token, params)
  }

  public async update(options: UpdateOptions): Promise<IAccountResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = { user: options.user }

    return await this.spreeResponse<IAccount>('patch', routes.accountPath(), token, params)
  }

  public async addressesList(options: AddressesListOptions): Promise<AccountAddressesResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<AccountAddressesResponse>('get', routes.accountAddressesPath(), token, {})
  }

  public async showAddress(options: ShowAddressOptions): Promise<AccountAddressResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<AccountAddressResponse>('get', routes.accountAddressPath(options.id), token, {})
  }

  public async createAddress(options: CreateAddressOptions): Promise<AccountAddressResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = { address: options.address }

    return await this.spreeResponse<AccountAddressResponse>('post', routes.accountAddressesPath(), token, params)
  }

  public async removeAddress(options: RemoveAddressOptions): Promise<NoContentResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<NoContentResponse>('delete', routes.accountAddressRemovePath(options.id), token, {})
  }

  public async updateAddress(options: UpdateAddressOptions): Promise<AccountAddressResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = { address: options.address }

    return await this.spreeResponse<AccountAddressResponse>('patch', routes.accountAddressPath(options.id), token, params)
  }
}
