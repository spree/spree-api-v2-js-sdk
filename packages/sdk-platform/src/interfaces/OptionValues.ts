import { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import { IRelationships } from './Relationships'
import { ResultResponse } from './ResultResponse'
import { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

export interface OptionValueAttr {
  position: number
  name: string
  presentation: string
  created_at: string
  updated_at: string
  public_metadata?: {
    [key: string]: string
  }
  private_metadata?: {
    [key: string]: string
  }
}

export interface OptionValueData extends JsonApiDocument {
  type: string
  id: string
  attributes: OptionValueAttr
  relationships: IRelationships
}

export interface OptionValueParams extends IQuery {
  option_value: {
    name: string
    presentation: string
    public_metadata?: {
      [key: string]: string
    }
    private_metadata?: {
      [key: string]: string
    }
  }
}

export interface IOptionValue extends JsonApiSingleResponse {
  data: OptionValueData
}

export interface IOptionValues extends JsonApiListResponse {
  data: OptionValueData[]
}

export interface IOptionValueResult extends ResultResponse<IOptionValue> {}

export interface IOptionValuesResult extends ResultResponse<IOptionValues> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  OptionValueParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  OptionValueParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
