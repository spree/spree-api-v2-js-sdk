import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IOptionValues,
  IOptionValuesResult,
  IOptionValue,
  IOptionValueResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/OptionValues'
import routes from '../routes'

export default class OptionsValues extends Http {
  /**
   * Returns a list of all Option Values. See [api docs](https://api.spreecommerce.org/docs/api-v2/d55952bbb0175-return-a-list-of-option-types).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionValues.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IOptionValuesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IOptionValues>('get', routes.optionValuesPath(), token, params)
  }

  /**
   * Returns a single Option Value by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/70afab93e4bda-return-an-option-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionValues.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IOptionValueResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOptionValue>('get', routes.optionValuePath(id), token, params)
  }

  /**
   * Creates a new Option Value and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/2aba794e1a63d-create-an-option-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionValues.create({
   *   bearer_token: '7381273269536713689562374856',
   *   option_value: {
   *     name: 'red',
   *     presentation: 'Red',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IOptionValueResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IOptionValue>('post', routes.optionValuesPath(), token, params)
  }

  /**
   * Update selected Option Value. See [api docs](https://api.spreecommerce.org/docs/api-v2/a58b92a9c5b88-update-an-option-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionValues.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   option_value: {
   *     name: 'red',
   *     presentation: 'Red',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IOptionValueResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOptionValue>('patch', routes.optionValuePath(id), token, params)
  }

  /**
   * This endpoint removes the specified Option Value. See [api docs](https://api.spreecommerce.org/docs/api-v2/5068f2b463fc3-delete-an-option-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionValues.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.optionValuePath(id), token, params)
  }
}
