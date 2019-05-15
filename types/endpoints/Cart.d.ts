import Http from '../Http';
import { AddItem, CouponCode, EstimateShippingMethods, SetQuantity } from '../interfaces/endpoints/CartClass';
import { IEstimatedShippingMethodsResult } from '../interfaces/EstimatedShippingMethod';
import { IOrderResult } from '../interfaces/Order';
import { IQuery } from '../interfaces/Query';
import { IToken } from '../interfaces/Token';
export default class Cart extends Http {
    show(token: IToken, params?: IQuery): Promise<IOrderResult>;
    create(token?: IToken, params?: IQuery): Promise<IOrderResult>;
    addItem(token: IToken, params: AddItem): Promise<IOrderResult>;
    removeItem(token: IToken, id: string, params?: IQuery): Promise<IOrderResult>;
    emptyCart(token: IToken, params?: IQuery): Promise<IOrderResult>;
    setQuantity(token: IToken, params: SetQuantity): Promise<IOrderResult>;
    applyCouponCode(token: IToken, params: CouponCode): Promise<IOrderResult>;
    removeCouponCode(token: IToken, code?: string, params?: IQuery): Promise<IOrderResult>;
    estimateShippingMethods(token: IToken, params: EstimateShippingMethods): Promise<IEstimatedShippingMethodsResult>;
}
