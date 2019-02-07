export interface AddItem {
  variant_id: number
  quantity: number
  options: any
}

export interface SetQuantity {
  line_item_id: number
  quantity: number
}

export interface CouponCode {
  coupon_code: string
}

export interface CartClass {
  show(token: string)
  create()
  addItem(token: string, params: AddItem)
  removeItem(token: string, id: string)
  emptyCart(token: string)
  setQuantity(token: string, params: SetQuantity)
  applyCouponCode(token: string, params: CouponCode)
  removeCouponCode(token: string, code: string)
} 
