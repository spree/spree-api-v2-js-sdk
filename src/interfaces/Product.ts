export interface Product {
  dat
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
    slug: string
  }

   relationships: {
    variants: {
      [key: string]: {
        data: Array<any>
      }
    }
    option_types: {
      [key: string]: {
        data: Array<any>
      }
    }
    product_properties: {
      [key: string]: {
        data: Array<any>
      }
    }
    taxons: {
      [key: string]: {
        data: Array<any>
      }
    }
    images: {
      [key: string]: {
        data: Array<any>
      }
    }
  } 
} 
