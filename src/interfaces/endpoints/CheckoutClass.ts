import { IAddress } from '../attributes/Address'
import { IPayment } from '../attributes/Payment'
import { IPaymentSource } from '../attributes/PaymentSource'
import { IShipment } from '../attributes/Shipment'
import { IQuery } from '../Query'

export interface AddStoreCredit extends IQuery {
  amount: number
}

export interface NestedAttributes extends IQuery {
  order?: {
    email?: string
    special_instructions?: string
    bill_address_attributes?: IAddress
    ship_address_attributes?: IAddress
    payments_attributes?: IPayment[]
    shipments_attributes?: IShipment[]
  }
  payment_source?: IPaymentSource
}

export interface AddPayment extends IQuery {
  payment_method_id: string
  source_id?: string
  amount?: number
  source_attributes: {
    gateway_payment_profile_id: string
    cc_type?: string
    last_digits?: string
    month?: string
    year?: string
    name: string
  }
}
