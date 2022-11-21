import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IClassifications,
  IClassificationsResult,
  IClassification,
  IClassificationResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Classifications'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class Classifications extends Http {
  /**
   * Returns a list of Classifications. See [api docs](https://api.spreecommerce.org/docs/api-v2/b7d0a33468032-return-a-list-of-classifications).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.classifications.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IClassificationsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IClassifications>('get', routes.classificationsPath(), token, params)
  }

  /**
   * Returns a single Classification. See [api docs](https://api.spreecommerce.org/docs/api-v2/95e58ee38a2a7-return-a-classification).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.classifications.show({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IClassificationResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IClassification>('get', routes.classificationPath(id), token, params)
  }

  /**
   * Creates a new Classification and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/c5a7e8d024217-create-a-classification).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.classifications.create({
   *   bearer_token: '7381273269536713689562374856',
   *   classification: {
   *     product_id: '1',
   *     taxon_id: '1',
   *     position: 1
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IClassificationResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IClassification>('post', routes.classificationsPath(), token, params)
  }

  /**
   * Update selected Classification for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/bd80666b8a87c-update-a-classification).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.classifications.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   classification: {
   *     position: 1,
   *     created_at: '2022-11-08T19:33:59.135Z',
   *     updated_at: '2022-11-08T19:33:59.135Z'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IClassificationResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IClassification>('patch', routes.classificationPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Classification for the current user. See [api docs](https://api.spreecommerce.org/docs/api-v2/19e4c5055252c-delete-a-classification).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.classifications.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.classificationPath(id), token, params)
  }
}