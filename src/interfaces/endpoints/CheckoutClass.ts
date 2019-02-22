import { IPayment } from '../attributes/Payment'
import { IPaymentSource } from '../attributes/PaymentSource'
import { IAddress } from '../attributes/Address'
import { IShipment } from '../attributes/Shipment'
import { IToken } from '../Token'

export interface AddStoreCredit {
  amount: number,
  includes?: string,
  fields?: any
}

export interface NestedAttributes {
  order?: {
    email?: string
    bill_address_attributes?: IAddress
    ship_address_attributes?: IAddress
    payments_attributes?: IPayment[]
    shipments_attributes?: IShipment[]
  },
  payment_source?: IPaymentSource,
  includes?: string
}

export interface CheckoutClass {
  orderNext(token: IToken)
  orderUpdate(token: IToken, params: NestedAttributes)
  advance(token: IToken)
  complete(token: IToken, params)
  addStoreCredits(token: IToken, params: AddStoreCredit)
  removeStoreCredits(token: IToken)
  paymentMethods(token: IToken)
  shippingMethods(token: IToken)
}
