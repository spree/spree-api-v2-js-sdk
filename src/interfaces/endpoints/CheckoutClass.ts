import { Address } from '../Address'
import { Payment } from '../Payment'
import { Shipping } from '../Shipping'
import { Token } from '../Token'

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
  orderNext(token: Token)
  orderUpdate(token: Token, params: NestedAttributes)
  advance(token: Token)
  addStoreCredits(token: Token, params: AddStoreCredit)
  removeStoreCredits(token: Token)
  paymentMethods(token: Token)
  shippingMethods(token: Token)
}
