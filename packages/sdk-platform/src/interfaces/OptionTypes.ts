import type {
  JsonApiDocument,
  JsonApiListResponse,
  JsonApiSingleResponse,
  IRelationships,
  ResultResponse,
  WithCommonOptions
} from '@spree/core-api-v2-sdk'

export interface OptionTypeAttr {
  name: string
  presentation: string
  position: number
  created_at: string
  updated_at: string
  filterable: boolean
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface OptionTypeData extends JsonApiDocument {
  type: string
  id: string
  attributes: OptionTypeAttr
  relationships: IRelationships
}

export interface OptionTypeParams {
  option_type: {
    name: 'color'
    presentation: 'Color'
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
}

export interface IOptionType extends JsonApiSingleResponse {
  data: OptionTypeData
}

export interface IOptionTypes extends JsonApiListResponse {
  data: OptionTypeData[]
}

export interface IOptionTypeResult extends ResultResponse<IOptionType> {}

export interface IOptionTypesResult extends ResultResponse<IOptionTypes> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  OptionTypeParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  OptionTypeParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
