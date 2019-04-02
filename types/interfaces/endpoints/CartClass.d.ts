import { IQuery } from '../Query';
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
export interface EstimateShippingMethods extends IQuery {
    country_iso: string;
}
