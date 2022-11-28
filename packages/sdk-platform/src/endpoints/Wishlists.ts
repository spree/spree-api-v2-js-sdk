import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IWishlist,
  IWishlistResult,
  IWishlists,
  IWishlistsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Wishlists'
import routes from '../routes'

export default class Wishlists extends Http {
  /**
   * Returns a list of Wishlists. See [api docs](https://api.spreecommerce.org/docs/api-v2/76edd42ab5e93-return-a-list-of-wishlists).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IWishlistsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IWishlists>('get', routes.wishlistsPath(), token, params)
  }

  /**
   * Returns a single Wishlist by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/c1bfaa798cfbc-return-a-wishlist).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IWishlistResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IWishlist>('get', routes.wishlistPath(id), token, params)
  }

  /**
   * Creates a new Wishlist and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/987709a3cfbe6-create-a-wishlist).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.create({
   *   bearer_token: '7381273269536713689562374856',
   *   wishlist: {
   *     name: 'string',
   *     user_id: 'string',
   *     is_default: true,
   *     is_private: true
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IWishlistResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IWishlist>('post', routes.wishlistsPath(), token, params)
  }

  /**
   * Update selected Wishlist. See [api docs](https://api.spreecommerce.org/docs/api-v2/684863802446e-update-a-wishlist).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   wishlist: {
   *     name: 'string',
   *     user_id: 'string',
   *     is_default: true,
   *     is_private: true
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IWishlistResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IWishlist>('patch', routes.wishlistPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Wishlist. See [api docs](https://api.spreecommerce.org/docs/api-v2/462ee0103f3d5-delete-a-wishlist).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.wishlistPath(id), token, params)
  }
}
