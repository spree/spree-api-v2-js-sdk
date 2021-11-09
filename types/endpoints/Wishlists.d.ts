import Http from '../Http';
import type { IToken } from '../interfaces/Token';
import type { WishlistsList, WishlistsResult, WishlistsShow, WishlistResult, WishlistsDefault, WishlistsCreate, WishlistsUpdate } from '../interfaces/Wishlist';
export default class Wishlists extends Http {
    list(token: IToken, params?: WishlistsList): Promise<WishlistsResult>;
    show(token: IToken, wishlistToken: string, params?: WishlistsShow): Promise<WishlistResult>;
    default(token: IToken, params?: WishlistsDefault): Promise<WishlistResult>;
    create(token: IToken, params: WishlistsCreate): Promise<WishlistResult>;
    update(token: IToken, wishlistToken: string, params: WishlistsUpdate): Promise<WishlistResult>;
}
