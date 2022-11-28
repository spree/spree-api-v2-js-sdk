import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface UserAttr {
  email: string
  first_name: string
  last_name: string
  created_at: string
  updated_at: string
  average_order_value: any[]
  lifetime_value: any[]
  store_credits: any[]
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface UserData extends JsonApiDocument {
  type: string
  id: string
  attributes: UserAttr
  relationships: IRelationships
}

export interface UserParams {
  user: {
    email: string
    first_name: string
    last_name: string
    password: string
    password_confirmation: string
    ship_address_id: string
    bill_address_id: string
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
}

export interface IUser extends JsonApiSingleResponse {
  data: UserData
}

export interface IUsers extends JsonApiListResponse {
  data: UserData[]
}

export interface IUserResult extends ResultResponse<IUser> {}

export interface IUsersResult extends ResultResponse<IUsers> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  UserParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  UserParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
