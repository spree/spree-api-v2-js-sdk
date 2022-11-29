import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IPromotionRule,
  IPromotionRuleResult,
  IPromotionRules,
  IPromotionRulesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/PromotionRules'
import routes from '../routes'

export default class PromotionRules extends Http {
  /**
   * Returns a list of all Promotion Rules. See [api docs](https://api.spreecommerce.org/docs/api-v2/9f2074564324c-return-a-list-of-promotion-rules).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionRules.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IPromotionRulesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPromotionRules>('get', routes.promotionRulesPath(), token, params)
  }

  /**
   * Returns a single Promotion Rule by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/dff15ad0879e1-return-a-promotion-rule).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionRules.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IPromotionRuleResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPromotionRule>('get', routes.promotionRulePath(id), token, params)
  }

  /**
   * Creates a new Promotion Rule and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/782b0e403efcf-create-a-promotion-rule).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionRules.create({
   *   bearer_token: '7381273269536713689562374856',
   *   promotion_rule: {
   *     promotion_id: '22',
   *     type: 'Spree::Promotion::Rules::Country'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IPromotionRuleResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPromotionRule>('post', routes.promotionRulesPath(), token, params)
  }

  /**
   * Update selected Promotion Rule. See [api docs](https://api.spreecommerce.org/docs/api-v2/c3f91ae96ddf8-update-a-promotion-rule).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionRules.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   promotion_rule: {
   *     promotion_id: '22',
   *     type: 'Spree::Promotion::Rules::Country'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IPromotionRuleResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPromotionRule>('patch', routes.promotionRulePath(id), token, params)
  }

  /**
   * This endpoint removes the specified Promotion Rule. See [api docs](https://api.spreecommerce.org/docs/api-v2/b71e7ab4e7a0b-delete-a-promotion-rule).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.promotionRules.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.promotionRulePath(id), token, params)
  }
}
