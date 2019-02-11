import { IRelationships } from './Relationships'

export interface ProductAttr {
  type: string
  id: string
  attributes: {
    name: string
    description: string
    price: string
    currency: string
    display_price: string
    available_on: Date
    meta_description: string
    meta_keywords: string
    updated_at: Date
    purchasable: boolean
    in_stock: boolean
    backorderable: boolean
    slug: string
  }

  relationships: IRelationships
}

export interface IProduct {
  data: ProductAttr
}

export interface IProducts {
  data: ProductAttr[]
}
