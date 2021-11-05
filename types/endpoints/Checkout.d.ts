import Http from '../Http';
import type { AddStoreCredit, OrderUpdate, AddPayment, NestedAttributes } from '../interfaces/endpoints/CheckoutClass';
import type { IOrderResult } from '../interfaces/Order';
import type { IPaymentMethodsResult } from '../interfaces/PaymentMethod';
import type { IQuery } from '../interfaces/Query';
import type { IShippingMethodsResult } from '../interfaces/ShippingMethod';
import type { IToken } from '../interfaces/Token';
export default class Checkout extends Http {
    orderNext(token: IToken, params?: IQuery): Promise<IOrderResult>;
    orderUpdate(token: IToken, params: OrderUpdate | NestedAttributes): Promise<IOrderResult>;
    advance(token: IToken, params?: IQuery): Promise<IOrderResult>;
    complete(token: IToken, params?: IQuery): Promise<IOrderResult>;
    addStoreCredits(token: IToken, params: AddStoreCredit): Promise<IOrderResult>;
    removeStoreCredits(token: IToken, params?: IQuery): Promise<IOrderResult>;
    paymentMethods(token: IToken): Promise<IPaymentMethodsResult>;
    shippingMethods(token: IToken, params?: IQuery): Promise<IShippingMethodsResult>;
    addPayment(token: IToken, addPaymentParams: AddPayment): Promise<IOrderResult>;
}
