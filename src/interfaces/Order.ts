import { IRelationships } from './Relationships'

export interface OrderAttr {
  type: string
  id: string
  attributes: {
    number: string
    item_total: string
    total: string
    ship_total: string
    adjustment_total: string
    included_tax_total: string
    additional_tax_total: string
    display_additional_tax_total: string
    display_included_tax_total: string
    tax_total: string
    currency: string
    state: string
    token: string
    email: string
    display_item_total: string
    display_ship_total: string
    display_adjustment_total: string
    display_tax_total: string
    promo_total: string
    display_promo_total: string
    item_count: number
    special_instructions: string
    display_total: string
    created_at: Date
    updated_at: Date
    completed_at: Date
  }

  relationships: IRelationships
}

export interface IOrder {
  data: OrderAttr
}

export interface IOrders {
  data: OrderAttr[]
}
