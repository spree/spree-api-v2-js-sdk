import Http from '../Http';
import type { IToken } from '../interfaces/Token';
import type { WishlistsList, WishlistsResult, WishlistsShow, WishlistResult } from '../interfaces/Wishlist';
export default class Wishlists extends Http {
    list(token: IToken, params?: WishlistsList): Promise<WishlistsResult>;
    show(token: IToken, wishlistToken: string, params?: WishlistsShow): Promise<WishlistResult>;
}
