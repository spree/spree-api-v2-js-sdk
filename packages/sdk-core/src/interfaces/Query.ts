export interface IQuery {
  currency?: string
  locale?: string
  include?: string
  fields?: {
    [key: string]: string
  }
  filter?: {
    [key: string]: number | string
  }
  page?: number
  per_page?: number
  sort?: string
  [customSpreeExtensionKey: string]: any
}

/**
 * @deprecated Use {@link ListOptions} instead.
 */
export interface IProductsQuery extends IQuery {
  image_transformation?: {
    size?: string
    quality?: number
  }
}
