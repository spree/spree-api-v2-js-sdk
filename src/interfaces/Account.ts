import type { IAddress } from './attributes/Address'
import { AllowedClientBuilderOptions, ClientBuilderOptions } from './ClientBuilderOptions'
import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { MakeOptional } from './MakeOptional'
import { MakeRequired } from './MakeRequired'
import type { IQuery } from './Query'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'
import { WithClientBuilderOptions } from './WithClientBuilderOptions'
import type { WithCommonOptions } from './WithCommonOptions'

export interface AccountAttr extends JsonApiDocument {
  data: {
    id: string
    type: string
    attributes: {
      email: string
      store_credits: number
      completed_orders: number
    }

    relationships: IRelationships
  }
}

export interface IAccount extends JsonApiSingleResponse {
  data: AccountAttr
}

export interface IAccountResult extends ResultResponse<IAccount> {}

export interface IAccountConfirmation {
  data: {
    state: string
  }
}

export interface IAccountConfirmationResult extends ResultResponse<IAccountConfirmation> {}

/**
 * @deprecated Use {@link ForgotPasswordOptions} instead.
 */
export interface ForgotPasswordParams extends IQuery {
  user: {
    email: string
  }
}

/**
 * @deprecated Use {@link ResetPasswordOptions} instead.
 */
export interface ResetPasswordParams extends IQuery {
  user: {
    password: string
    password_confirmation: string
  }
}

/**
 * @deprecated Use {@link CreateAddressOptions} instead.
 */
export interface AccountAddressParams extends IQuery {
  address: IAddress
}

export interface AccountAddressAttr extends JsonApiDocument {
  attributes: IAddress
}

export interface AccountAddressResponse extends JsonApiSingleResponse {
  data: AccountAddressAttr
}

export interface AccountAddressesResponse extends JsonApiListResponse {
  data: AccountAddressAttr[]
}

export interface AccountAddressResult extends ResultResponse<AccountAddressResponse> {}

export interface AccountAddressesResult extends ResultResponse<AccountAddressesResponse> {}

export type AccountContractTestOptions<ClientOptions extends AllowedClientBuilderOptions> = WithClientBuilderOptions<
  ClientOptions,
  MakeRequired<Partial<ClientBuilderOptions>, 'locale'>
>

export type AccountInfoOptions<ClientOptions extends AllowedClientBuilderOptions> = WithClientBuilderOptions<
  ClientOptions,
  MakeRequired<ClientBuilderOptions, 'bearer_token'>
>

export type CreditCardsListOptions = WithCommonOptions<{
  suggestToken: true
  onlyAccountToken: true
  suggestQuery: true
}>

export type DefaultCreditCardOptions = WithCommonOptions<{
  suggestToken: true
  onlyAccountToken: true
  suggestQuery: true
}>

export type RemoveCreditCardOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CompletedOrdersListOptions = WithCommonOptions<{
  suggestToken: true
  onlyAccountToken: true
  suggestQuery: true
}>

export type CompletedOrderOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { order_number: string }
>

export type CreateOptions = WithCommonOptions<
  null,
  {
    user: {
      email: string
      password: string
      password_confirmation: string
    }
  }
>

export type ConfirmOptions = WithCommonOptions<null, { confirmation_token: string }>

export type ForgotPasswordOptions = WithCommonOptions<null, ForgotPasswordParams>

export type ResetPasswordOptions = WithCommonOptions<null, ResetPasswordParams & { reset_password_token: string }>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  {
    user: {
      email: string
      password: string
      password_confirmation: string
    }
  }
>

export type AddressesListOptions = WithCommonOptions<{ suggestToken: true; onlyAccountToken: true }>

export type ShowAddressOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateAddressOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  AccountAddressParams
>

export type RemoveAddressOptions = WithCommonOptions<{ suggestToken: true; onlyAccountToken: true }, { id: string }>

export type UpdateAddressOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  AccountAddressParams & { id: string }
>
