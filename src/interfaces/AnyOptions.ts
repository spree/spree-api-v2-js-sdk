import type { IQuery } from './Query'
import type { OptionalAnyToken, RequiredAnyToken } from './Token'

export type AnyOptions<
  SuggestToken extends boolean = false,
  SuggestQuery extends boolean = false,
  OptionalToken extends boolean = false
> = Record<string, any> &
  (SuggestToken extends true
    ? OptionalToken extends true
      ? OptionalAnyToken
      : RequiredAnyToken
    : Record<string, any>) &
  (SuggestQuery extends true ? IQuery : Record<string, any>)
