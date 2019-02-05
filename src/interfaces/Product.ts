import { Relationships } from './Relationships'

export interface Product {
  type: string
  id: string,
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
    slug: string,
  }

  relationships: Relationships
}
