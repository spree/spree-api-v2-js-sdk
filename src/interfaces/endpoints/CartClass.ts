import { IQuery } from '../Query'
import { IToken } from '../Token'

export interface AddItem extends IQuery {
  variant_id: string
  quantity: number
}

export interface SetQuantity extends IQuery {
  line_item_id: string
  quantity: number
}

export interface CouponCode extends IQuery {
  coupon_code: string
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
