import { Address } from '../Address'
import { Payment } from '../Payment'
import { Shipping } from '../Shipping'

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
  orderNext(token: string)
  orderUpdate(token: string, params: NestedAttributes)
  advance(token: string)
  addStoreCredits(token: string, params: AddStoreCredit)
  removeStoreCredits(token: string)
  paymentMethods(token: string)
  shippingMethods(token: string)
}
