// IMPORTANT: Place all new checkout types inside src/interfaces/Checkout instead of this file.
// TODO: Transfer all existing types inside this file to src/interfaces/Checkout.

import { IAddress } from '../attributes/Address'
import { IPayment } from '../attributes/Payment'
import { IPaymentSource } from '../attributes/PaymentSource'
import { IShipment } from '../attributes/Shipment'
import { IQuery } from '../Query'

/**
 * @deprecated Use {@link AddStoreCreditOptions} instead.
 */
export interface AddStoreCredit extends IQuery {
  amount: number
}

/**
 * @deprecated Use {@link OrderUpdateOptions} instead.
 */
export interface OrderUpdate extends IQuery {
  order?: {
    email?: string
    special_instructions?: string
    bill_address_attributes?: IAddress
    ship_address_attributes?: IAddress
    payments_attributes?: AddFullPayment[]
    shipments_attributes?: IShipment[]
  }
}

/**
 * @deprecated This type is no longer used
 */
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

export interface AddFullPayment {
  payment_method_id: string
  source_attributes?: {
    gateway_payment_profile_id: string
    cc_type?: string
    last_digits?: string
    month?: string
    year?: string
    name: string
  }
}

/**
 * @deprecated Use {@link SelectShippingMethodOptions} instead.
 */
export interface SelectShippingMethod extends IQuery {
  shipping_method_id: string
  shipment_id?: string
}

/**
 * @deprecated Use {@link AddPaymentOptions} instead.
 */
export interface AddPayment extends AddFullPayment, IQuery {
  source_id?: string
  amount?: number
}
