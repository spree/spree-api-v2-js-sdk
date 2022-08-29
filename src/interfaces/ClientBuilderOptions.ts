import { Currency } from './Currency'
import { Locale } from './Locale'
import { BearerToken, OrderToken } from './Token'

export type ClientBuilderOptions = Partial<{
  order_token: OrderToken
  bearer_token: BearerToken
  locale: Locale
  currency: Currency
}>

export type AllowedClientBuilderOptions = {
  [K in keyof Required<ClientBuilderOptions>]: boolean
}

export type DefaultBuilderOptions = AllowedClientBuilderOptions & { [K in keyof AllowedClientBuilderOptions]: false }
