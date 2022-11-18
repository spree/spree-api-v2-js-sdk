export type HttpMethod =
  | 'get'
  | 'GET'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'post'
  | 'POST'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'purge'
  | 'PURGE'
  | 'link'
  | 'LINK'
  | 'unlink'
  | 'UNLINK'

/**
 * @deprecated Automatic parsing will be removed in the future to ensure the same behavior of different Fetchers.
 */
export type AutomaticResponseParsing = 'automatic'

export type ResponseParsing = AutomaticResponseParsing | 'text' | 'json' | 'stream'

export type FetchConfig = {
  url: string
  params: { [key: string]: any }
  method: HttpMethod
  headers: { [key: string]: string }
  responseParsing: ResponseParsing
}
