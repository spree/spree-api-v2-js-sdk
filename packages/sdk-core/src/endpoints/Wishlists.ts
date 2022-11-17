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
  /**
   * Returns a list of Wishlists. See [api docs](https://api.spreecommerce.org/docs/api-v2/2b6c6c347d14b-list-all-wishlists).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   is_variant_included?: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.list({
   *   bearer_token: '7381273269536713689562374856',
   *   is_variant_included: '456'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<WishlistsResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async list(token: IToken, params?: WishlistsList): Promise<WishlistsResult>
  public async list(...allArguments: any[]): Promise<WishlistsResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<WishlistsResponse>('get', routes.wishlistsPath(), token, params)
  }

  /**
   * Returns a single Wishlist. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MjE0NTY5NDA-retrieve-a-wishlist).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   wishlist_token: string
   *   is_variant_included?: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.show({
   *   bearer_token: '7381273269536713689562374856',
   *   wishlist_token: '123',
   *   is_variant_included: '456'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<WishlistResult>
  /**
   * @hidden
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

  /**
   * Returns the default Wishlist for the logged in user. It will be created, if the user does not have a default Wishlist for the current store. See [api docs](https://api.spreecommerce.org/docs/api-v2/f29e11140c53c-retrieve-the-default-wishlist).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   is_variant_included?: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.default({
   *   bearer_token: '7381273269536713689562374856',
   *   is_variant_included: '456'
   * })
   * ```
   */
  public async default(options: DefaultOptions): Promise<WishlistResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async default(token: IToken, params?: WishlistsDefault): Promise<WishlistResult>
  public async default(...allArguments: any[]): Promise<WishlistResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<WishlistResponse>('get', routes.defaultWishlistPath(), token, params)
  }

  /**
   * Creates a new Wishlist for the logged in user.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   name: string
   *   is_private?: boolean
   *   is_default?: boolean
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.create({
   *   bearer_token: '7381273269536713689562374856',
   *   name: 'My wishlist'
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<WishlistResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async create(token: IToken, params: WishlistsCreate): Promise<WishlistResult>
  public async create(...allArguments: any[]): Promise<WishlistResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<WishlistResponse>('post', routes.wishlistsPath(), token, params)
  }

  /**
   * Updates an existing Wishlist.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   wishlist_token: string
   *   name: string
   *   is_private?: boolean
   *   is_default?: boolean
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.update({
   *   bearer_token: '7381273269536713689562374856',
   *   wishlist_token: '123',
   *   name: 'My updated wishlist',
   *   is_private: true
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<WishlistResult>
  /**
   * @hidden
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

  /**
   * Removes a Wishlist. See [api docs](https://api.spreecommerce.org/docs/api-v2/74e84b03b47e0-delete-a-wishlist).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   wishlist_token: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   wishlist_token: '123'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult>
  /**
   * @hidden
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

  /**
   * Adds a new Wished Item to a Wishlist for the logged in user. See [api docs](https://api.spreecommerce.org/docs/api-v2/486219cd63ea9-add-item-to-wishlist).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   wishlist_token: string,
   *   variant_id: string
   *   quantity: number
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.addWishedItem({
   *   bearer_token: '7381273269536713689562374856',
   *   wishlist_token: 'WyZxWS2w3BdDRHcGgtN1LKiY',
   *   variant_id: '1',
   *   quantity: 10
   * })
   * ```
   */
  public async addWishedItem(options: AddWishedItemOptions): Promise<WishedItemResult>
  /**
   * @hidden
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

  /**
   * Updates a Wished Item for the logged in user. See [api docs](https://api.spreecommerce.org/docs/api-v2/e6e478e46003d-set-wished-item-quantity).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   wishlist_token: string,
   *   id: string
   *   quantity: number
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.updateWishedItem({
   *   bearer_token: '7381273269536713689562374856',
   *   wishlist_token: 'WyZxWS2w3BdDRHcGgtN1LKiY',
   *   id: '2',
   *   quantity: 13
   * })
   * ```
   */
  public async updateWishedItem(options: UpdateWishedItemOptions): Promise<WishedItemResult>
  /**
   * @hidden
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

  /**
   * Removes a Wished Item for the logged in user. See [api docs](https://api.spreecommerce.org/docs/api-v2/766b11755bbb0-delete-item-from-wishlist).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   wishlist_token: string,
   *   id: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.wishlists.removeWishedItem({
   *   bearer_token: '7381273269536713689562374856',
   *   wishlist_token: 'WyZxWS2w3BdDRHcGgtN1LKiY',
   *   id: '2'
   * })
   * ```
   */
  public async removeWishedItem(options: RemoveWishedItemOptions): Promise<WishedItemResult>
  /**
   * @hidden
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
