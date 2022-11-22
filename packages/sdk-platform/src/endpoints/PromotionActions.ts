import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IPromotionAction,
  IPromotionActionResult,
  IPromotionActions,
  IPromotionActionsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/PromotionActions'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class PromotionActions extends Http {
  /**
   * Returns a list of all Promotion Actions. See [api docs](https://api.spreecommerce.org/docs/api-v2/8d5d37baa9e53-return-a-list-of-promotion-actions).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionActions.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IPromotionActionsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPromotionActions>('get', routes.promotionActionsPath(), token, params)
  }

  /**
   * Returns a single Promotion Action by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/e155c99bd62e3-return-a-promotion-action).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionActions.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IPromotionActionResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPromotionAction>('get', routes.promotionActionPath(id), token, params)
  }

  /**
   * Creates a new Promotion Action and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/ea4bb581fc1c5-create-a-promotion-action).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionActions.create({
   *   bearer_token: '7381273269536713689562374856',
   *   promotion_action: {
   *     type: 'Spree::Promotion::Actions::CreateAdjustment',
   *     promotion_id: '22'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IPromotionActionResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPromotionAction>('post', routes.promotionActionsPath(), token, params)
  }

  /**
   * Update selected Promotion Action. See [api docs](https://api.spreecommerce.org/docs/api-v2/a09d1bd89b89a-update-a-promotion-action).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionActions.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   promotion_action: {
   *     type: 'Spree::Promotion::Actions::CreateAdjustment'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IPromotionActionResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPromotionAction>('patch', routes.promotionActionPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Promotion Action. See [api docs](https://api.spreecommerce.org/docs/api-v2/782b6e74a007e-delete-a-promotion-action).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionActions.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.promotionActionPath(id), token, params)
  }
}
