import { IToken } from '../Token'

export interface AddItem {
  variant_id: number
  quantity: number
  options?: any
  include?: string
  fields?: any
}

export interface SetQuantity {
  line_item_id: number
  quantity: number
  include?: string
  fields?: any
}

export interface CouponCode {
  coupon_code: string
  include?: string
  fields?: any
}

export interface CartClass {
  show(token: IToken)
  create()
  addItem(token: IToken, params: AddItem)
  removeItem(token: IToken, id: string)
  emptyCart(token: IToken)
  setQuantity(token: IToken, params: SetQuantity)
  applyCouponCode(token: IToken, params: CouponCode)
  removeCouponCode(token: IToken, code: string)
} 
