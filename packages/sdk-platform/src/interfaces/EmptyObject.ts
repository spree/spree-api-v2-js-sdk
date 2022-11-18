import { ResultResponse } from './ResultResponse'

export type EmptyObjectResponse = Record<string, never>

export interface EmptyObjectResult extends ResultResponse<EmptyObjectResponse> {}
