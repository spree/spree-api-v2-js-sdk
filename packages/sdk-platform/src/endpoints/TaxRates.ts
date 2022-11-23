import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  ITaxRate,
  ITaxRateResult,
  ITaxRates,
  ITaxRatesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/TaxRates'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class TaxRates extends Http {
  /**
   * Returns a list Tax Rates. See [api docs](https://api.spreecommerce.org/docs/api-v2/fdefd43ed4e10-return-a-list-of-tax-categories).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxRates.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<ITaxRatesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ITaxRates>('get', routes.taxRatesPath(), token, params)
  }

  /**
   * Returns a single Tax Rate by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/52ed4c3f2236e-return-a-tax-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxRates.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<ITaxRateResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ITaxRate>('get', routes.taxRatePath(id), token, params)
  }

  /**
   * Creates a new Tax Rate and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/aea0b53fff2f2-create-a-tax-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxRates.create({
   *   bearer_token: '7381273269536713689562374856',
   *   tax_rate: {
   *     amount: 0.05,
   *     zone_id: '2',
   *     tax_category_id: '1',
   *     included_in_price: true,
   *     name: 'California',
   *     show_rate_in_label: false,
   *     calculator_attributes: {
   *       type: 'Spree::Calculator::FlatRate',
   *       preferences: {
   *         amount: 0,
   *         currency: 'USD'
   *       }
   *     }
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<ITaxRateResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ITaxRate>('post', routes.taxRatesPath(), token, params)
  }

  /**
   * Update selected Tax Rate. See [api docs](https://api.spreecommerce.org/docs/api-v2/7d67771454f1a-update-a-tax-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxRates.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   tax_rate: {
   *     amount: 0.05,
   *     zone_id: '2',
   *     tax_category_id: '1',
   *     included_in_price: true,
   *     name: 'California',
   *     show_rate_in_label: false,
   *     calculator_attributes: {
   *       type: 'Spree::Calculator::FlatRate',
   *       preferences: {
   *         amount: 0,
   *         currency: 'USD'
   *       }
   *     }
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<ITaxRateResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ITaxRate>('patch', routes.taxRatePath(id), token, params)
  }

  /**
   * This endpoint removes the specified Tax Rate. See [api docs](https://api.spreecommerce.org/docs/api-v2/41c503ee8ad1a-delete-a-tax-category).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxRates.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.taxRatePath(id), token, params)
  }
}
