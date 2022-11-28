import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  ITaxonomy,
  ITaxonomyResult,
  ITaxonomies,
  ITaxonomiesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Taxonomies'
import routes from '../routes'

export default class Taxonomies extends Http {
  /**
   * Returns a list of Taxonomies. See [api docs](https://api.spreecommerce.org/docs/api-v2/0bf24be1d51d4-return-a-list-of-taxonomies).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxonomies.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<ITaxonomiesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ITaxonomies>('get', routes.taxonomiesPath(), token, params)
  }

  /**
   * Returns a single Taxonomy by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/c98ef0e2d0f71-return-a-taxonomy).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxonomies.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<ITaxonomyResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ITaxonomy>('get', routes.taxonomyPath(id), token, params)
  }

  /**
   * Creates a new Taxonomy and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/52892d0dcc75f-create-a-taxonomy).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxonomies.create({
   *   bearer_token: '7381273269536713689562374856',
   *   taxonomy: {
   *     name: 'string',
   *     position: 2,
   *     public_metadata: {
   *       ability_to_recycle: '90%'
   *     },
   *     private_metadata: {
   *       profitability: 2
   *     }
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<ITaxonomyResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ITaxonomy>('post', routes.taxonomiesPath(), token, params)
  }

  /**
   * Update selected Taxonomy. See [api docs](https://api.spreecommerce.org/docs/api-v2/ae7a66259a343-update-a-taxonomy).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxonomies.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   taxonomy: {
   *     name: 'string',
   *     position: 2,
   *     public_metadata: {
   *       ability_to_recycle: '90%'
   *     },
   *     private_metadata: {
   *       profitability: 2
   *     }
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<ITaxonomyResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ITaxonomy>('patch', routes.taxonomyPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Taxonomy. See [api docs](https://api.spreecommerce.org/docs/api-v2/1e333e16a92e8-delete-a-taxonomy).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxonomies.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.taxonomyPath(id), token, params)
  }
}
