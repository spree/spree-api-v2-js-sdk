import type { IQuery } from './Query'
import type { OptionalAnyToken, RequiredAnyToken } from './Token'

export type AllowedCustomizations = {
  suggestToken: boolean
  suggestQuery: boolean
  optionalToken: boolean
}

export type DefaultCustomizations = AllowedCustomizations & {
  suggestToken: false
  suggestQuery: false
  optionalToken: false
}

export type AnyOptions<
  Customizations extends Partial<AllowedCustomizations> = Partial<AllowedCustomizations>,
  IntersectedCustomizations extends Customizations & DefaultCustomizations = Customizations & DefaultCustomizations,
  FinalCustomizations extends {
    [P in keyof AllowedCustomizations]: IntersectedCustomizations[P] extends never
      ? Customizations[P]
      : DefaultCustomizations[P]
  } = {
    [P in keyof AllowedCustomizations]: IntersectedCustomizations[P] extends never
      ? Customizations[P]
      : DefaultCustomizations[P]
  }
> = Record<string, any> &
  (FinalCustomizations['suggestToken'] extends true
    ? FinalCustomizations['optionalToken'] extends true
      ? OptionalAnyToken
      : RequiredAnyToken
    : Record<string, any>) &
  (FinalCustomizations['suggestQuery'] extends true ? IQuery : Record<string, any>)
