export interface ProductClass {
  list(filter?: any, sort?: any, page?: any, includes?: any)
  show(id: string, includes?: any)
}