import Http from '../Http';
import type { AddStoreCredit, OrderUpdate, AddPayment, NestedAttributes, SelectShippingMethod } from '../interfaces/endpoints/CheckoutClass';
import type { IOrderResult } from '../interfaces/Order';
import type { IPaymentMethodsResult } from '../interfaces/PaymentMethod';
import type { IQuery } from '../interfaces/Query';
import type { IShippingMethodsResult, ShippingRatesResult } from '../interfaces/ShippingMethod';
import type { IToken } from '../interfaces/Token';
export default class Checkout extends Http {
    orderNext(token: IToken, params?: IQuery): Promise<IOrderResult>;
    orderUpdate(token: IToken, params: OrderUpdate | NestedAttributes): Promise<IOrderResult>;
    advance(token: IToken, params?: IQuery): Promise<IOrderResult>;
    complete(token: IToken, params?: IQuery): Promise<IOrderResult>;
    addStoreCredits(token: IToken, params: AddStoreCredit): Promise<IOrderResult>;
    removeStoreCredits(token: IToken, params?: IQuery): Promise<IOrderResult>;
    paymentMethods(token: IToken): Promise<IPaymentMethodsResult>;
    /**
     * @deprecated Use {@link shippingRates} instead.
     */
    shippingMethods(token: IToken, params?: IQuery): Promise<IShippingMethodsResult>;
    shippingRates(token: IToken, params?: IQuery): Promise<ShippingRatesResult>;
    selectShippingMethod(token: IToken, params: SelectShippingMethod): Promise<IOrderResult>;
    addPayment(token: IToken, addPaymentParams: AddPayment): Promise<IOrderResult>;
}
