import { IAddress } from '../attributes/Address';
import { IShipment } from '../attributes/Shipment';
import { IQuery } from '../Query';
export interface AddStoreCredit extends IQuery {
    amount: number;
}
export interface OrderUpdate extends IQuery {
    order?: {
        email?: string;
        special_instructions?: string;
        bill_address_attributes?: IAddress;
        ship_address_attributes?: IAddress;
        payments_attributes?: AddFullPayment[];
        shipments_attributes?: IShipment[];
    };
}
export interface AddFullPayment {
    payment_method_id: string;
    source_attributes?: {
        gateway_payment_profile_id: string;
        cc_type?: string;
        last_digits?: string;
        month?: string;
        year?: string;
        name: string;
    };
}
export interface AddPayment extends AddFullPayment, IQuery {
    source_id?: string;
    amount?: number;
}
