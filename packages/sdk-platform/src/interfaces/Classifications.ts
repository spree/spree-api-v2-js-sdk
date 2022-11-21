import type { JsonApiDocument, JsonApiListResponse, JsonApiSingleResponse } from './JsonApi'
import type { IRelationships } from './Relationships'
import type { ResultResponse } from './ResultResponse'
import type { WithCommonOptions } from './WithCommonOptions'
import type { IQuery } from './Query'

interface ClassificationAttr {
  position: number
  created_at: string
  updated_at: string
}

export interface ClassificationData extends JsonApiDocument {
  type: string
  id: string
  attributes: ClassificationAttr
  relationships: IRelationships
}

export interface ClassificationParams extends IQuery {
  classification: {
    product_id: string
    taxon_id: string
    position: number
  }
}

export interface IClassification extends JsonApiSingleResponse {
  data: ClassificationData
}

export interface IClassifications extends JsonApiListResponse {
  data: ClassificationData[]
}

export interface IClassificationResult extends ResultResponse<IClassification> {}

export interface IClassificationsResult extends ResultResponse<IClassifications> {}

export type ListOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true }
>

export type ShowOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  { id: string; }
>

export type CreateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ClassificationParams
>

export type UpdateOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true; suggestQuery: true },
  ClassificationParams & { id: string }
>

export type RemoveOptions = WithCommonOptions<
  { suggestToken: true; onlyAccountToken: true },
  { id: string }
>
