import { IQuery } from '../Query';
import { IToken } from '../Token';
export interface AddItem extends IQuery {
    variant_id: string;
    quantity: number;
}
export interface SetQuantity extends IQuery {
    line_item_id: string;
    quantity: number;
}
export interface CouponCode extends IQuery {
    coupon_code: string;
}
export interface CartClass {
    show(token: IToken): any;
    create(): any;
    addItem(token: IToken, params: AddItem): any;
    removeItem(token: IToken, id: string): any;
    emptyCart(token: IToken): any;
    setQuantity(token: IToken, params: SetQuantity): any;
    applyCouponCode(token: IToken, params: CouponCode): any;
    removeCouponCode(token: IToken, code: string): any;
}
