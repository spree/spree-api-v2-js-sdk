export interface Shipping {
  id: number
  order?: any
  special_instructions: any
  stock_location_id: number
  tracking: string
  address: string
  inventory_units: any
  selected_shipping_rate_id: number
}
