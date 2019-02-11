export interface Payment {
  amount: number
  payment_method_id?: number
  payment_method?: {
    id: number
    type: string
    attributes: {
      type: string
      name: string
      description: string
    }
  }
}
