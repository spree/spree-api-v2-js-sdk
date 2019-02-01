export interface Product {
  type: string
  id: string,
  attributes: {
    name: string
    description: string
    price: string
    currency: string
    slug: string
  }

  relationships: {
    [key: string]: {
      data: Array<any>
    }
  } 
}