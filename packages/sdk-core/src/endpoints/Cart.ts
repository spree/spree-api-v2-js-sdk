import Http from '../Http'
import type {
  AddItem,
  CouponCode,
  EstimateShippingMethods,
  SetQuantity,
  AssociateCart,
  ChangeCurrency,
  EstimateShippingRates
} from '../interfaces/endpoints/CartClass'
import type {
  EstimatedShippingRates,
  EstimatedShippingRatesResult,
  IEstimatedShippingMethods,
  IEstimatedShippingMethodsResult
} from '../interfaces/EstimatedShippingMethod'
import type { IOrder, IOrderResult } from '../interfaces/Order'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import type { IQuery } from '../interfaces/Query'
import type { IToken } from '../interfaces/Token'
import routes from '../routes'
import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import type {
  AddItemOptions,
  ApplyCouponCodeOptions,
  AssociateGuestCartOptions,
  ChangeCurrencyOptions,
  CreateOptions,
  EmptyCartOptions,
  EstimateShippingRatesOptions,
  RemoveAllCouponsOptions,
  RemoveCouponCodeOptions,
  RemoveItemOptions,
  RemoveOptions,
  SetQuantityOptions,
  ShowOptions
} from '../interfaces/Cart'

export default class Cart extends Http {
  /**
   * Creates a new Cart and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/6a57a5a49594f-create-a-cart).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) - if logged in user
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.create({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * 
   * // or guest user
   * const response = await client.cart.create()
   * ```
   */
  public async create(options?: CreateOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async create(token?: IToken, params?: IQuery): Promise<IOrderResult>
  public async create(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions = {}, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])
 
    return await this.spreeResponse<IOrder>('post', routes.cartPath(), token, params)
  }
  
  /**
   * Returns contents of the cart. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc0Ng-retrieve-a-cart).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.show({
   *   bearer_token: '7381273269536713689562374856'
   * })
   *
   * // or guest user
   * const response = await client.cart.show({
   *   order_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async show(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async show(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('get', routes.cartPath(), token, params)
  }

  /**
   * Adds a Product Variant to the Cart. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc0Nw-add-an-item-to-cart).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   variant_id: string
   *   quantity: number
   *   options?: {
   *     [key: string]: string
   *   }
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.addItem({
   *   bearer_token: '7381273269536713689562374856',
   *   variant_id: '1',
   *   quantity: 1
   * })
   *
   * // or guest user
   * const response = await client.cart.addItem({
   *   order_token: '7381273269536713689562374856',
   *   variant_id: '1',
   *   quantity: 1
   * })
   * ```
   */
  public async addItem(options: AddItemOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async addItem(token: IToken, params: AddItem): Promise<IOrderResult>
  public async addItem(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('post', routes.cartAddItemPath(), token, params)
  }

  /**
   * Sets the quantity of a given line item. It has to be a positive integer greater than 0. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc0OA-set-line-item-quantity).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   line_item_id: string
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
   * // Logged in user
   * const response = await client.cart.setQuantity({
   *   bearer_token: '7381273269536713689562374856',
   *   line_item_id: '9',
   *   quantity: 100
   * })
   *
   * // or guest user
   * const response = await client.cart.setQuantity({
   *   order_token: '7381273269536713689562374856',
   *   line_item_id: '9',
   *   quantity: 100
   * })
   * ```
   */
   public async setQuantity(options: SetQuantityOptions): Promise<IOrderResult>
   /**
    * @hidden
    * @deprecated Use the combined options signature instead.
    */
   public async setQuantity(token: IToken, params: SetQuantity): Promise<IOrderResult>
   public async setQuantity(...allArguments: any[]): Promise<IOrderResult> {
     const [tokenOrOptions, positionalParams] = allArguments
     const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])
 
     return await this.spreeResponse<IOrder>('patch', routes.cartSetItemQuantity(), token, params)
   }

  /**
   * Removes Line Item from Cart. See [api docs](https://api.spreecommerce.org/docs/api-v2/8b7783ed322f1-remove-a-line-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
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
   * // Logged in user
   * const response = await client.cart.removeItem({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   *
   * // or guest user
   * const response = await client.cart.removeItem({
   *   order_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async removeItem(options: RemoveItemOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async removeItem(token: IToken, id: string, params?: IQuery): Promise<IOrderResult>
  public async removeItem(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalId, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [{ id: positionalId }, tokenOrOptions, positionalParams],
      ['id']
    )

    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveItemPath(id), token, params)
  }

  /**
   * Empties the Cart. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1MA-empty-the-cart).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.emptyCart({
   *   bearer_token: '7381273269536713689562374856'
   * })
   *
   * // or guest user
   * const response = await client.cart.emptyCart({
   *   order_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async emptyCart(options: EmptyCartOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async emptyCart(token: IToken, params?: IQuery): Promise<IOrderResult>
  public async emptyCart(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.cartEmptyPath(), token, params)
  }

  /**
   * Removes the Cart. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MTcyNTA0NDc-delete-a-cart).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.remove({
   *   bearer_token: '7381273269536713689562374856'
   * })
   *
   * // or guest user
   * const response = await client.cart.remove({
   *   order_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async remove(token: IToken): Promise<NoContentResult>
  public async remove(...allArguments: any[]): Promise<NoContentResult> {
    const [tokenOrOptions] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions], [])

    return await this.spreeResponse<NoContentResponse>('delete', routes.cartPath(), token, params)
  }

  /**
   * Applies a coupon code to the Cart. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1MQ-apply-a-coupon-code).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   coupon_code: string
   * }
   * ```
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.applyCouponCode({
   *   bearer_token: '7381273269536713689562374856',
   *   coupon_code: 'promo_test'
   * })
   *
   * // or guest user
   * const response = await client.cart.applyCouponCode({
   *   order_token: '7381273269536713689562374856',
   *   coupon_code: 'promo_test'
   * })  
   * ```
   */
  public async applyCouponCode(options: ApplyCouponCodeOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async applyCouponCode(token: IToken, params: CouponCode): Promise<IOrderResult>
  public async applyCouponCode(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.cartApplyCodePath(), token, params)
  }

  /**
   * Removes a coupon code from the Cart. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1Mg-remove-a-coupon).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   code?: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.removeCouponCode({
   *   bearer_token: '7381273269536713689562374856',
   *   code: 'promo_test'
   * })
   *
   * // or guest user
   * const response = await client.cart.removeCouponCode({
   *   order_token: '7381273269536713689562374856',
   *   code: 'promo_test'
   * }) 
   * ```
   */
  public async removeCouponCode(options: RemoveCouponCodeOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async removeCouponCode(token: IToken, code: string, params?: IQuery): Promise<IOrderResult>
  public async removeCouponCode(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalCode = null, positionalParams = {}] = allArguments
    const { code, token, params } = squashAndPreparePositionalArguments(
      [{ code: positionalCode }, tokenOrOptions, positionalParams],
      ['code']
    )

    let route: string

    if (code) {
      route = routes.cartRemoveCodePath(code)
    } else {
      route = routes.cartRemoveAllCoupons()
    }

    return await this.spreeResponse<IOrder>('delete', route, token, params)
  }

  /**
   * Removes all coupon codes from the Cart. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MjM5NTU3NTg-remove-all-coupons).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.removeAllCoupons({
   *   bearer_token: '7381273269536713689562374856'
   * })
   *
   * // or guest user
   * const response = await client.cart.removeAllCoupons({
   *   order_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async removeAllCoupons(options: RemoveAllCouponsOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async removeAllCoupons(token: IToken, params: IQuery): Promise<IOrderResult>
  public async removeAllCoupons(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('delete', routes.cartRemoveAllCoupons(), token, params)
  }

  /**
   * @hidden
   * @deprecated Use {@link estimateShippingRates} instead.
   */
  public async estimateShippingMethods(
    token: IToken,
    params: EstimateShippingMethods
  ): Promise<IEstimatedShippingMethodsResult> {
    return await this.spreeResponse<IEstimatedShippingMethods>(
      'get',
      routes.cartEstimateShippingMethodsPath(),
      token,
      params
    )
  }

  /**
   * Returns a list of Estimated Shipping Rates for Cart. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1Mw-list-estimated-shipping-rates).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   country_iso: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.estimateShippingRates({
   *   bearer_token: '7381273269536713689562374856',
   *   country_iso: 'USA'
   * })
   *
   * // or guest user
   * const response = await client.cart.estimateShippingRates({
   *   order_token: '7381273269536713689562374856',
   *   country_iso: 'USA'
   * })
   * ```
   */
  public async estimateShippingRates(options: EstimateShippingRatesOptions): Promise<EstimatedShippingRatesResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async estimateShippingRates(
    token: IToken,
    params: EstimateShippingRates
  ): Promise<EstimatedShippingRatesResult>
  public async estimateShippingRates(...allArguments: any[]): Promise<EstimatedShippingRatesResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<EstimatedShippingRates>(
      'get',
      routes.cartEstimateShippingRatesPath(),
      token,
      params
    )
  }

  /**
   * Associates a guest cart with the currently signed in user. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MjAxMTAyMzM-associate-a-cart-with-a-user).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   guest_order_token: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.associateGuestCart({
   *   bearer_token: '7381273269536713689562374856',
   *   guest_order_token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
   * })
   * ```
   */
  public async associateGuestCart(options: AssociateGuestCartOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async associateGuestCart(token: IToken, params: AssociateCart): Promise<IOrderResult>
  public async associateGuestCart(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.cartAssociatePath(), token, params)
  }

  /**
   * Changes the Cart's currency. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MjA2OTMwMDM-change-cart-currency).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token) or [Order token](../pages/tokens.html#order-token)
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   new_currency: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * // Logged in user
   * const response = await client.cart.changeCurrency({
   *   bearer_token: '7381273269536713689562374856',
   *   new_currency: 'CAD'
   * })
   * ```
   */
  public async changeCurrency(options: ChangeCurrencyOptions): Promise<IOrderResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async changeCurrency(token: IToken, params: ChangeCurrency): Promise<IOrderResult>
  public async changeCurrency(...allArguments: any[]): Promise<IOrderResult> {
    const [tokenOrOptions, positionalParams] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([tokenOrOptions, positionalParams], [])

    return await this.spreeResponse<IOrder>('patch', routes.cartChangeCurrencyPath(), token, params)
  }
}
