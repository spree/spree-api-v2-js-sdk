import Http from '../Http';
import { AddItem, CartClass, CouponCode, SetQuantity } from '../interfaces/endpoints/CartClass';
import { IOrderResult } from '../interfaces/Order';
import { IQuery } from '../interfaces/Query';
import { IToken } from '../interfaces/Token';
export default class Cart extends Http implements CartClass {
    show(token: IToken, params?: IQuery): Promise<IOrderResult>;
    create(token?: IToken, params?: IQuery): Promise<IOrderResult>;
    addItem(token: IToken, params: AddItem): Promise<IOrderResult>;
    removeItem(token: IToken, id: string, params?: IQuery): Promise<IOrderResult>;
    emptyCart(token: IToken, params?: IQuery): Promise<IOrderResult>;
    setQuantity(token: IToken, params: SetQuantity): Promise<IOrderResult>;
    applyCouponCode(token: IToken, params: CouponCode): Promise<IOrderResult>;
    removeCouponCode(token: IToken, code: string, params?: IQuery): Promise<IOrderResult>;
}
