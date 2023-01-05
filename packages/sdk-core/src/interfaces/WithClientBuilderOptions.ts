import { AllowedClientBuilderOptions, ClientBuilderOptions } from './ClientBuilderOptions'
import { FilterOptionalKeys } from './FilterOptionalKeys'
import { FilterRequiredKeys } from './FilterRequiredKeys'
import type { MakeRequired } from './MakeRequired'

/**
 * Transforms {@link ClientBuilderOptions} properties of {@link UserOptions} into optional types based on
 * a type of boolean-valued object {@link ClientOptions} that describes already configured options of {@link AllowedClientBuilderOptions}.
 *
 * @returns modified type of {@link UserOptions}.
 *
 * @example
 * type AllowedClientBuilderOptions = { locale: boolean, currency: boolean };
 * type UserBuilderOptions = { locale?: string, currency?: string };
 * type MyClientOptions = AllowedClientBuilderOptions & { locale: true, currency: false };
 * type MyUserOptions = { locale: string; currency: string; };
 * type Options = WithBuilderOptions<MyClientOptions, MyUserOptions>
 * Options = { locale?: string, currency: string }
 * // "locale" MyUserOptions's locale is required, but Options' locale transforms into optional, because MyClientOptions's locale is true
 * // "currency" stays required, because MyClientOptions's locale is false, and MyUserOptions's currency is required.
 */
type WithSingleClientBuilderOptions<
  ClientOptions extends AllowedClientBuilderOptions,
  UserOptions extends ClientBuilderOptions,
  UserCustomOptionsOnly extends Record<string, unknown> = {},
  UserEndpointOptionsOnly extends ClientBuilderOptions = Omit<UserOptions, keyof UserCustomOptionsOnly>,
  OptionalEndpointOptionsOnly extends ClientBuilderOptions = FilterOptionalKeys<UserEndpointOptionsOnly>,
  RequiredEndpointOptionsOnly extends ClientBuilderOptions = FilterRequiredKeys<UserEndpointOptionsOnly>,
  Options extends ClientBuilderOptions = UserCustomOptionsOnly &
    Partial<OptionalEndpointOptionsOnly> &
    Partial<RequiredEndpointOptionsOnly> & Required<{
      [K in keyof Required<ClientBuilderOptions> as RequiredEndpointOptionsOnly extends Pick<
        Required<ClientBuilderOptions>,
        K
      >
        ? ClientOptions[K] extends true
          ? never
          : K
        : never]-?: UserOptions[K]
    }>
> = {} extends Options ? Options | void : Options

export type WithClientBuilderOptions<
  ClientOptions extends AllowedClientBuilderOptions,
  UserOptions extends keyof ClientBuilderOptions,
  UserCustomOptionsOnly extends Record<string, unknown> = {}
> = {
  [K in UserOptions]-?:
    WithSingleClientBuilderOptions<ClientOptions, MakeRequired<ClientBuilderOptions, K>, UserCustomOptionsOnly>
}[UserOptions]
