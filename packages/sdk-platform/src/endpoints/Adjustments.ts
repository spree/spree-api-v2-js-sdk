import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IAdjustments,
  IAdjustmentsResult,
  IAdjustment,
  IAdjustmentResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Adjustments'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class Adjustments extends Http {
  /**
   * Returns a list of adjustments. See [api docs](https://api.spreecommerce.org/docs/api-v2/743ae53d17964-return-a-list-of-adjustments).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.adjustments.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IAdjustmentsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IAdjustments>('get', routes.adjustmentsPath(), token, params)
  }

  /**
   * Returns a single adjustment. See [api docs](https://api.spreecommerce.org/docs/api-v2/5d87cdc3bf24b-return-an-adjustment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.adjustments.show({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IAdjustmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IAdjustment>('get', routes.adjustmentPath(id), token, params)
  }

  /**
   * Creates new adjustment and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/1d0f6c079f944-create-an-adjustment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.adjustments.create({
   *   bearer_token: '7381273269536713689562374856',
   *   adjustment: {
   *     order_id: 'string',
   *     label: 'Shipping costs',
   *     adjustable_id: 'string',
   *     adjustable_type: 'Spree::LineItem',
   *     source_id: 'string',
   *     source_type: 'Spree::TaxRate',
   *     amount: '10.9',
   *     mandatory: true,
   *     eligible: true,
   *     state: 'open',
   *     included: false
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IAdjustmentResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IAdjustment>('post', routes.adjustmentsPath(), token, params)
  }

  /**
   * Update selected Adjustment for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/99fecfcab57e7-update-an-adjustment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.adjustments.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   adjustment: {
   *     order_id: string,
   *     label: Shipping costs',
   *     adjustable_id: 'string',
   *     adjustable_type: 'Spree::LineItem',
   *     source_id: 'string',
   *     source_type: 'Spree::TaxRate',
   *     amount: 10.9,
   *     mandatory: true,
   *     eligible: true,
   *     state: 'open',
   *     included: false
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IAdjustmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IAdjustment>('patch', routes.adjustmentPath(id), token, params)
  }

  /**
   * This endpoint removes the specified adjustment for the current user. See [api docs](https://api.spreecommerce.org/docs/api-v2/0ef7018aa9029-delete-an-adjustment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.adjustments.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.adjustmentPath(id), token, params)
  }
}