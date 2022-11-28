import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IOptionTypes,
  IOptionTypesResult,
  IOptionType,
  IOptionTypeResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/OptionTypes'
import routes from '../routes'

export default class OptionsTypes extends Http {
  /**
   * Returns a list of all Option Types. See [api docs](https://api.spreecommerce.org/docs/api-v2/d55952bbb0175-return-a-list-of-option-types).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionTypes.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IOptionTypesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IOptionTypes>('get', routes.optionTypesPath(), token, params)
  }

  /**
   * Returns a single Option Type by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/70afab93e4bda-return-an-option-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionTypes.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IOptionTypeResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOptionType>('get', routes.optionTypePath(id), token, params)
  }

  /**
   * Creates a new Option Type and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/2aba794e1a63d-create-an-option-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionTypes.create({
   *   bearer_token: '7381273269536713689562374856',
   *   option_type: {
   *     name": 'color',
   *     presentation": 'Color',
   *     public_metadata": {},
   *     private_metadata": {}
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IOptionTypeResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IOptionType>('post', routes.optionTypesPath(), token, params)
  }

  /**
   * Update selected Option Type. See [api docs](https://api.spreecommerce.org/docs/api-v2/a58b92a9c5b88-update-an-option-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionTypes.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   option_type: {
   *     name: 'color',
   *     presentation: 'Color',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IOptionTypeResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IOptionType>('patch', routes.optionTypePath(id), token, params)
  }

  /**
   * This endpoint removes the specified Option Type. See [api docs](https://api.spreecommerce.org/docs/api-v2/5068f2b463fc3-delete-an-option-type).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.optionTypes.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.optionTypePath(id), token, params)
  }
}
