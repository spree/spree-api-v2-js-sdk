import { IAddress } from '../attributes/Address';
import { IPayment } from '../attributes/Payment';
import { IPaymentSource } from '../attributes/PaymentSource';
import { IShipment } from '../attributes/Shipment';
import { IQuery } from '../Query';
export interface AddStoreCredit extends IQuery {
    amount: number;
}
export interface NestedAttributes extends IQuery {
    order?: {
        email?: string;
        bill_address_attributes?: IAddress;
        ship_address_attributes?: IAddress;
        payments_attributes?: IPayment[];
        shipments_attributes?: IShipment[];
    };
    payment_source?: IPaymentSource;
}
