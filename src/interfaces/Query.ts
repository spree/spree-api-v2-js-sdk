export interface IQueryAttr {
  include?: string
  fields?: {
    [key: string]: string
  }
  filter?: {
    [key: string]: number
  }
  page?: number
  per_page?: number
}

export interface IQuery {
  params?: IQueryAttr
}