import Http from '../Http'
import type { IToken } from '../interfaces/Token'
import type {
  WishlistsList,
  WishlistsResult,
  Wishlists as WishlistsResponse,
  Wishlist as WishlistResponse,
  WishlistsShow,
  WishlistResult
} from '../interfaces/Wishlist'
import routes from '../routes'

export default class Wishlists extends Http {
  public async list(token: IToken, params: WishlistsList = {}): Promise<WishlistsResult> {
    return await this.spreeResponse<WishlistsResponse>('get', routes.wishlistsPath(), token, params)
  }

  public async show(token: IToken, wishlistToken: string, params: WishlistsShow = {}): Promise<WishlistResult> {
    return await this.spreeResponse<WishlistResponse>('get', routes.wishlistPath(wishlistToken), token, params)
  }
}
