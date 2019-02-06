import { AddItem, SetQuantity, CouponCode } from '../Order'

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
