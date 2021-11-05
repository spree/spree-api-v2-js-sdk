import Http from '../Http';
import type { AddItem, CouponCode, EstimateShippingMethods, SetQuantity, AssociateCart } from '../interfaces/endpoints/CartClass';
import type { IEstimatedShippingMethodsResult } from '../interfaces/EstimatedShippingMethod';
import type { IOrderResult } from '../interfaces/Order';
import type { NoContentResult } from '../interfaces/NoContent';
import type { IQuery } from '../interfaces/Query';
import type { IToken } from '../interfaces/Token';
export default class Cart extends Http {
    show(token: IToken, params?: IQuery): Promise<IOrderResult>;
    create(token?: IToken, params?: IQuery): Promise<IOrderResult>;
    addItem(token: IToken, params: AddItem): Promise<IOrderResult>;
    removeItem(token: IToken, id: string, params?: IQuery): Promise<IOrderResult>;
    emptyCart(token: IToken, params?: IQuery): Promise<IOrderResult>;
    remove(token: IToken, params?: IQuery): Promise<NoContentResult>;
    setQuantity(token: IToken, params: SetQuantity): Promise<IOrderResult>;
    applyCouponCode(token: IToken, params: CouponCode): Promise<IOrderResult>;
    removeCouponCode(token: IToken, code?: string, params?: IQuery): Promise<IOrderResult>;
    removeAllCoupons(token: IToken, params: IQuery): Promise<IOrderResult>;
    estimateShippingMethods(token: IToken, params: EstimateShippingMethods): Promise<IEstimatedShippingMethodsResult>;
    associateGuestCart(token: IToken, params: AssociateCart): Promise<IOrderResult>;
}
