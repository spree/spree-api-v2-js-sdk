import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import type { IToken } from '../interfaces/Token'
import type {
  WishedItem,
  WishedItemResult,
  WishlistsAddWishedItem,
  WishlistsUpdateWishedItem,
  AddWishedItemOptions,
  UpdateWishedItemOptions,
  RemoveWishedItemOptions
} from '../interfaces/WishedItem'
import type {
  WishlistsList,
  WishlistsResult,
  Wishlists as WishlistsResponse,
  Wishlist as WishlistResponse,
  WishlistsShow,
  WishlistResult,
  WishlistsDefault,
  WishlistsCreate,
  WishlistsUpdate,
  ListOptions,
  ShowOptions,
  DefaultOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Wishlist'
import routes from '../routes'

export default class Wishlists extends Http {
  public async list(options: ListOptions): Promise<WishlistsResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async list(token: IToken, params?: WishlistsList): Promise<WishlistsResult>
  public async list(...allArguments: any[]): Promise<WishlistsResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<WishlistsResponse>('get', routes.wishlistsPath(), token, params)
  }

  public async show(options: ShowOptions): Promise<WishlistResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async show(token: IToken, wishlistToken: string, params?: WishlistsShow): Promise<WishlistResult>
  public async show(...allArguments: any[]): Promise<WishlistResult> {
    const [tokenOrOptions, positionalWishlistToken, positionalParams = {}] = allArguments
    const { wishlist_token, token, params } = squashAndPreparePositionalArguments(
      [tokenOrOptions, { wishlist_token: positionalWishlistToken }, positionalParams],
      ['wishlist_token']
    )

    return await this.spreeResponse<WishlistResponse>('get', routes.wishlistPath(wishlist_token), token, params)
  }

  public async default(options: DefaultOptions): Promise<WishlistResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async default(token: IToken, params?: WishlistsDefault): Promise<WishlistResult>
  public async default(...allArguments: any[]): Promise<WishlistResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<WishlistResponse>('get', routes.defaultWishlistPath(), token, params)
  }

  public async create(options: CreateOptions): Promise<WishlistResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async create(token: IToken, params: WishlistsCreate): Promise<WishlistResult>
  public async create(...allArguments: any[]): Promise<WishlistResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<WishlistResponse>('post', routes.wishlistsPath(), token, params)
  }

  public async update(options: UpdateOptions): Promise<WishlistResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async update(token: IToken, wishlistToken: string, params: WishlistsUpdate): Promise<WishlistResult>
  public async update(...allArguments: any[]): Promise<WishlistResult> {
    const [tokenOrOptions, positionalWishlistToken, positionalParams] = allArguments
    const { wishlist_token, token, params } = squashAndPreparePositionalArguments(
      [tokenOrOptions, { wishlist_token: positionalWishlistToken }, positionalParams],
      ['wishlist_token']
    )

    return await this.spreeResponse<WishlistResponse>('patch', routes.wishlistPath(wishlist_token), token, params)
  }

  public async remove(options: RemoveOptions): Promise<NoContentResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async remove(token: IToken, wishlistToken: string): Promise<NoContentResult>
  public async remove(...allArguments: any[]): Promise<NoContentResult> {
    const [tokenOrOptions, positionalWishlistToken] = allArguments
    const { wishlist_token, token, params } = squashAndPreparePositionalArguments(
      [tokenOrOptions, { wishlist_token: positionalWishlistToken }],
      ['wishlist_token']
    )

    return await this.spreeResponse<NoContentResponse>('delete', routes.wishlistPath(wishlist_token), token, params)
  }

  public async addWishedItem(options: AddWishedItemOptions): Promise<WishedItemResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async addWishedItem(
    token: IToken,
    wishlistToken: string,
    params: WishlistsAddWishedItem
  ): Promise<WishedItemResult>
  public async addWishedItem(...allArguments: any[]): Promise<WishedItemResult> {
    const [tokenOrOptions, positionalWishlistToken, positionalParams] = allArguments
    const { wishlist_token, token, params } = squashAndPreparePositionalArguments(
      [tokenOrOptions, { wishlist_token: positionalWishlistToken }, positionalParams],
      ['wishlist_token']
    )

    return await this.spreeResponse<WishedItem>(
      'post',
      routes.wishlistsAddWishedItemPath(wishlist_token),
      token,
      params
    )
  }

  public async updateWishedItem(options: UpdateWishedItemOptions): Promise<WishedItemResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async updateWishedItem(
    token: IToken,
    wishlistToken: string,
    id: string,
    params: WishlistsUpdateWishedItem
  ): Promise<WishedItemResult>
  public async updateWishedItem(...allArguments: any[]): Promise<WishedItemResult> {
    const [tokenOrOptions, positionalWishlistToken, positionalId, positionalParams] = allArguments
    const { wishlist_token, id, token, params } = squashAndPreparePositionalArguments(
      [tokenOrOptions, { wishlist_token: positionalWishlistToken }, { id: positionalId }, positionalParams],
      ['wishlist_token', 'id']
    )

    return await this.spreeResponse<WishedItem>(
      'patch',
      routes.wishlistsUpdateWishedItemQuantityPath(wishlist_token, id),
      token,
      params
    )
  }

  public async removeWishedItem(options: RemoveWishedItemOptions): Promise<WishedItemResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async removeWishedItem(token: IToken, wishlistToken: string, id: string): Promise<WishedItemResult>
  public async removeWishedItem(...allArguments: any[]): Promise<WishedItemResult> {
    const [tokenOrOptions, positionalWishlistToken, positionalId] = allArguments
    const { wishlist_token, id, token, params } = squashAndPreparePositionalArguments(
      [tokenOrOptions, { wishlist_token: positionalWishlistToken }, { id: positionalId }],
      ['wishlist_token', 'id']
    )

    return await this.spreeResponse<WishedItem>(
      'delete',
      routes.wishlistsRemoveWishedItemPath(wishlist_token, id),
      token,
      params
    )
  }
}
