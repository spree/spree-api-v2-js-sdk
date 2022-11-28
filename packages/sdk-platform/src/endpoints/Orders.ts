import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IOrders,
  IOrdersResult,
  IOrder,
  IOrderResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions,
  AdvanceOptions,
  NextOptions,
  CompleteOptions,
  EmptyOptions,
  ApproveOptions,
  CancelOptions,
  CreditOptions,
  CouponOptions
} from '../interfaces/Orders'
import routes from '../routes'

export default class Orders extends Http {
  /**
   * Returns a list of all Orders. See [api docs](https://api.spreecommerce.org/docs/api-v2/fdb5c2570ebff-return-a-list-of-orders).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IOrdersResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IOrders>('get', routes.ordersPath(), token, params)
  }

  /**
   * Returns a single Order by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/1432cc02f2ef4-return-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IOrderResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOrder>('get', routes.orderPath(id), token, params)
  }

  /**
   * Creates a new Order and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/0832e7c540abe-creates-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.create({
   *   bearer_token: '7381273269536713689562374856',
   *   order: {
   *     item_total: 170.9,
   *     total: 190.9,
   *     state: "cart",
   *     adjustment_total: 20,
   *     user_id: "1",
   *     completed_at: "2022-11-08 19:33:50 UTC",
   *     bill_address_id: "1",
   *     ship_address_id: "1",
   *     payment_total: 190.9,
   *     shipment_state: "backorder",
   *     payment_state: "balance_due",
   *     email: "hi@getvendo.com",
   *     special_instructions: "I need it ASAP!",
   *     currency: "USD",
   *     last_ip_address: "127.0.0.1",
   *     created_by_id: "1",
   *     shipment_total: 10,
   *     additional_tax_total: 10,
   *     promo_total: 0,
   *     channel: "online",
   *     included_tax_total: 0,
   *     item_count: 2,
   *     approver_id: "string",
   *     approved_at: "2022-11-08 19:33:50 UTC",
   *     confirmation_delivered: false,
   *     considered_risky: false,
   *     canceled_at: "string",
   *     canceler_id: "string",
   *     taxable_adjustment_total: 170.9,
   *     non_taxable_adjustment_total: 10,
   *     store_owner_notification_delivered: false,
   *     bill_address_attributes: {
   *       address: {
   *         country_id: "224",
   *         state_id: "516",
   *         state_name: "New York",
   *         address1: "5th ave",
   *         address2: "1st suite",
   *         city: "NY",
   *         zipcode: "10001",
   *         phone: "+1 123 456 789",
   *         alternative_phone: "string",
   *         firstname: "John",
   *         lastname: "Snow",
   *         label: "My home address",
   *         company: "Vendo Cloud Inc",
   *         user_id: "string",
   *         public_metadata: {
   *           distance_from_city_in_km: 10,
   *           location_type: "building"
   *         },
   *         private_metadata: {
   *           close_to_shop: true
   *         }
   *       }
   *     },
   *     ship_address_attributes: {
   *       address: {
   *         country_id: "224",
   *         state_id: "516",
   *         state_name: "New York",
   *         address1: "5th ave",
   *         address2: "1st suite",
   *         city: "NY",
   *         zipcode: "10001",
   *         phone: "+1 123 456 789",
   *         alternative_phone: "string",
   *         firstname: "John",
   *         lastname: "Snow",
   *         label: "My home address",
   *         company: "Vendo Cloud Inc",
   *         user_id: "string",
   *         public_metadata: {
   *           distance_from_city_in_km: 10,
   *           location_type: "building"
   *         },
   *         private_metadata: {
   *           close_to_shop: true
   *         }
   *       }
   *     }
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IOrderResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IOrder>('post', routes.ordersPath(), token, params)
  }

  /**
   * Update selected Order. See [api docs](https://api.spreecommerce.org/docs/api-v2/0b89cf3cb83ed-update-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   order: {
   *     item_total: 170.9,
   *     total: 190.9,
   *     state: "cart",
   *     adjustment_total: 20,
   *     user_id: "1",
   *     completed_at: "2022-11-08 19:33:50 UTC",
   *     bill_address_id: "1",
   *     ship_address_id: "1",
   *     payment_total: 190.9,
   *     shipment_state: "backorder",
   *     payment_state: "balance_due",
   *     email: "hi@getvendo.com",
   *     special_instructions: "I need it ASAP!",
   *     currency: "USD",
   *     last_ip_address: "127.0.0.1",
   *     created_by_id: "1",
   *     shipment_total: 10,
   *     additional_tax_total: 10,
   *     promo_total: 0,
   *     channel: "online",
   *     included_tax_total: 0,
   *     item_count: 2,
   *     approver_id: "string",
   *     approved_at: "2022-11-08 19:33:50 UTC",
   *     confirmation_delivered: false,
   *     considered_risky: false,
   *     canceled_at: "string",
   *     canceler_id: "string",
   *     taxable_adjustment_total: 170.9,
   *     non_taxable_adjustment_total: 10,
   *     store_owner_notification_delivered: false,
   *     bill_address_attributes: {
   *       address: {
   *         country_id: "224",
   *         state_id: "516",
   *         state_name: "New York",
   *         address1: "5th ave",
   *         address2: "1st suite",
   *         city: "NY",
   *         zipcode: "10001",
   *         phone: "+1 123 456 789",
   *         alternative_phone: "string",
   *         firstname: "John",
   *         lastname: "Snow",
   *         label: "My home address",
   *         company: "Vendo Cloud Inc",
   *         user_id: "string",
   *         public_metadata: {
   *           distance_from_city_in_km: 10,
   *           location_type: "building"
   *         },
   *         private_metadata: {
   *           close_to_shop: true
   *         }
   *       }
   *     },
   *     ship_address_attributes: {
   *       address: {
   *         country_id: "224",
   *         state_id: "516",
   *         state_name: "New York",
   *         address1: "5th ave",
   *         address2: "1st suite",
   *         city: "NY",
   *         zipcode: "10001",
   *         phone: "+1 123 456 789",
   *         alternative_phone: "string",
   *         firstname: "John",
   *         lastname: "Snow",
   *         label: "My home address",
   *         company: "Vendo Cloud Inc",
   *         user_id: "string",
   *         public_metadata: {
   *           distance_from_city_in_km: 10,
   *           location_type: "building"
   *         },
   *         private_metadata: {
   *           close_to_shop: true
   *         }
   *       }
   *     }
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IOrderResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOrder>('patch', routes.orderPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Order. See [api docs](https://api.spreecommerce.org/docs/api-v2/298f45e5e7bc5-delete-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.orderPath(id), token, params)
  }

  /**
   * Advances an Order. See [api docs](https://api.spreecommerce.org/docs/api-v2/9978ce564336a-advances-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.advance({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async advance(options: AdvanceOptions): Promise<IOrderResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOrder>('patch', routes.orderAdvancePath(id), token, params)
  }

  /**
   * Moves an Order to the next state. See [api docs](https://api.spreecommerce.org/docs/api-v2/2aa567dc7ca9a-next-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.next({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async next(options: NextOptions): Promise<IOrderResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOrder>('patch', routes.orderNextPath(id), token, params)
  }

  /**
   * Marks an Order as completed. See [api docs](https://api.spreecommerce.org/docs/api-v2/1fb4978a8145f-completes-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.complete({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async complete(options: CompleteOptions): Promise<IOrderResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOrder>('patch', routes.orderCompletePath(id), token, params)
  }

  /**
   * Removes all line items, promotions, shipment and payments from an Order. See [api docs](https://api.spreecommerce.org/docs/api-v2/af799614d2b4c-empties-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.empty({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async empty(options: EmptyOptions): Promise<IOrderResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOrder>('patch', routes.orderEmptyPath(id), token, params)
  }

  /**
   * Approves an Order, when using a token created for a user, it will save this user as the approver. See [api docs](https://api.spreecommerce.org/docs/api-v2/97f79476dc808-approves-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.approve({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async approve(options: ApproveOptions): Promise<IOrderResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOrder>('patch', routes.orderApprovePath(id), token, params)
  }

  /**
   * Cancels an Order, when using a token created for a user, it will save this user as the canceler. See [api docs](https://api.spreecommerce.org/docs/api-v2/f3d80ffff29e4-cancels-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.cancel({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async cancel(options: CancelOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('patch', routes.orderCancelPath(id), token, params)
  }

  /**
   * Creates Store Credit payment for an Order. See [api docs](https://api.spreecommerce.org/docs/api-v2/a97a85aec2199-use-store-credit-for-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.useStoreCredit({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   amount: 0
   * })
   * ```
   */
  public async useStoreCredit(options: CreditOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('patch', routes.orderCreditPath(id), token, params)
  }

  /**
   * Applies Coupon Code for an Order. See [api docs](https://api.spreecommerce.org/docs/api-v2/ca789e96a05c9-apply-coupon-code-for-an-order).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.orders.applyCouponCode({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   coupon_code: 'string'
   * })
   * ```
   */
   public async applyCouponCode(options: CouponOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('patch', routes.orderCouponPath(id), token, params)
  }
}
