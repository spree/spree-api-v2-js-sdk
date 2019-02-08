import { Token } from '../Token'

export interface AddItem {
  variant_id: number
  quantity: number
  options?: any
}

export interface SetQuantity {
  line_item_id: number
  quantity: number
}

export interface CouponCode {
  coupon_code: string
}

export interface CartClass {
  show(token: Token)
  create()
  addItem(token: Token, params: AddItem)
  removeItem(token: Token, id: string)
  emptyCart(token: Token)
  setQuantity(token: Token, params: SetQuantity)
  applyCouponCode(token: Token, params: CouponCode)
  removeCouponCode(token: Token, code: string)
} 
