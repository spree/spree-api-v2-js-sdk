export interface IQuery {
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

export interface IProductsQuery extends IQuery {
  image_transformation?: {
    size?: string
    quality?: number
  }
}
