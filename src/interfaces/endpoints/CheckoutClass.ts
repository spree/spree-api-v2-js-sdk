import { Address } from '../Address'
import { Payment } from '../Payment'
import { Shipping } from '../Shipping'
import { IToken } from '../Token'

export interface AddStoreCredit {
  amount: number
}

export interface NestedAttributes {
  email?: string
  bill_address_attributes?: Address
  ship_address_attributes?: Address
  payments_attributes?: Payment
  shipments_attributes?: Shipping
}

export interface CheckoutClass {
  orderNext(token: IToken)
  orderUpdate(token: IToken, params: NestedAttributes)
  advance(token: IToken)
  addStoreCredits(token: IToken, params: AddStoreCredit)
  removeStoreCredits(token: IToken)
  paymentMethods(token: IToken)
  shippingMethods(token: IToken)
}
