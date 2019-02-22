export interface IQuery {
  include?: string
  fields?: {
    [key: string]: string
  }
  filter?: {
    [key: string]: number
  }
}