export type ClientBuilderOptions = Partial<{
  order_token: string
  bearer_token: string
  locale: string
  currency: string
}>

export type AllowedClientBuilderOptions = {
  [K in keyof ClientBuilderOptions]-?: boolean
}

export type DefaultBuilderOptions = AllowedClientBuilderOptions & { [K in keyof AllowedClientBuilderOptions]: false }
