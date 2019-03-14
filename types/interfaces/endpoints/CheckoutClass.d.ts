import { IAddress } from '../attributes/Address';
import { IPayment } from '../attributes/Payment';
import { IPaymentSource } from '../attributes/PaymentSource';
import { IShipment } from '../attributes/Shipment';
import { IQuery } from '../Query';
import { IToken } from '../Token';
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
export interface CheckoutClass {
    orderNext(token: IToken): any;
    orderUpdate(token: IToken, params: NestedAttributes): any;
    advance(token: IToken): any;
    complete(token: IToken, params: any): any;
    addStoreCredits(token: IToken, params: AddStoreCredit): any;
    removeStoreCredits(token: IToken): any;
    paymentMethods(token: IToken): any;
    shippingMethods(token: IToken): any;
}
