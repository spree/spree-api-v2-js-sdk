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
  public async list(options: ListOptions): Promise<WishlistsResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      is_variant_included: options.is_variant_included 
    }

    return await this.spreeResponse<WishlistsResponse>('get', routes.wishlistsPath(), token, params)
  }

  public async show(options: ShowOptions): Promise<WishlistResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      is_variant_included: options.is_variant_included 
    }

    return await this.spreeResponse<WishlistResponse>('get', routes.wishlistPath(options.wishlist_token), token, params)
  }

  public async default(options: DefaultOptions): Promise<WishlistResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      is_variant_included: options.is_variant_included 
    }

    return await this.spreeResponse<WishlistResponse>('get', routes.defaultWishlistPath(), token, params)
  }

  public async create(options: CreateOptions): Promise<WishlistResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      name: options.name,
      is_private: options.is_private,
      is_default: options.is_default
    }

    return await this.spreeResponse<WishlistResponse>('post', routes.wishlistsPath(), token, params)
  }

  public async update(options: UpdateOptions): Promise<WishlistResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      name: options.name,
      is_private: options.is_private,
      is_default: options.is_default
    }

    return await this.spreeResponse<WishlistResponse>('patch', routes.wishlistPath(options.wishlist_token), token, params)
  }

  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<NoContentResponse>('delete', routes.wishlistPath(options.wishlist_token), token, {})
  }

  public async addWishedItem(options: AddWishedItemOptions): Promise<WishedItemResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      variant_id: options.variant_id,
      quantity: options.quantity
    }

    return await this.spreeResponse<WishedItem>(
      'post',
      routes.wishlistsAddWishedItemPath(options.wishlist_token),
      token,
      params
    )
  }

  public async updateWishedItem(options: UpdateWishedItemOptions): Promise<WishedItemResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }
    const params = {
      quantity: options.quantity
    }

    return await this.spreeResponse<WishedItem>(
      'patch',
      routes.wishlistsUpdateWishedItemQuantityPath(options.wishlist_token, options.id),
      token,
      params
    )
  }

  public async removeWishedItem(options: RemoveWishedItemOptions): Promise<WishedItemResult> {
    const token = {
      orderToken: options.order_token,
      bearerToken: options.bearer_token
    }

    return await this.spreeResponse<WishedItem>(
      'delete',
      routes.wishlistsRemoveWishedItemPath(options.wishlist_token, options.id),
      token,
      {}
    )
  }
}
