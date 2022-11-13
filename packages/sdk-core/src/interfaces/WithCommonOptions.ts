import type { DeepAnyObject } from './DeepAnyObject'
import type { IQuery } from './Query'
import type { OptionalAccountToken, OptionalAnyToken, RequiredAccountToken, RequiredAnyToken } from './Token'

export type AllowedCustomizations = {
  suggestToken: boolean
  suggestQuery: boolean
  optionalToken: boolean
  onlyAccountToken: boolean
}

export type DefaultCustomizations = AllowedCustomizations & {
  suggestToken: false
  suggestQuery: false
  optionalToken: false
  onlyAccountToken: false
}

export type WithCommonOptions<
  CustomizationsOrNull extends Partial<AllowedCustomizations> | null = Partial<AllowedCustomizations> | null,
  CustomOptions extends Record<string, any> = Record<string, any>,
  Customizations extends CustomizationsOrNull extends null
    ? Record<string, unknown>
    : CustomizationsOrNull = CustomizationsOrNull extends null ? Record<string, unknown> : CustomizationsOrNull,
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
    ? FinalCustomizations['onlyAccountToken'] extends true
      ? FinalCustomizations['optionalToken'] extends true
        ? OptionalAccountToken
        : RequiredAccountToken
      : FinalCustomizations['optionalToken'] extends true
      ? OptionalAnyToken
      : RequiredAnyToken
    : Record<string, unknown>) &
    (FinalCustomizations['suggestQuery'] extends true ? IQuery : Record<string, unknown>)) &
    CustomOptions
>
