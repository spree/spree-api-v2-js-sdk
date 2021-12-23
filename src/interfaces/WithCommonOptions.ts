import type { DeepAnyObject } from './DeepAnyObject'
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

export type WithCommonOptions<
  Customizations extends Partial<AllowedCustomizations> = Partial<AllowedCustomizations>,
  CustomOptions extends Record<string, any> = Record<string, any>,
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
> = DeepAnyObject<
  ((FinalCustomizations['suggestToken'] extends true
    ? FinalCustomizations['optionalToken'] extends true
      ? OptionalAnyToken
      : RequiredAnyToken
    : Record<string, unknown>) &
    (FinalCustomizations['suggestQuery'] extends true ? IQuery : Record<string, unknown>)) &
    CustomOptions
>
