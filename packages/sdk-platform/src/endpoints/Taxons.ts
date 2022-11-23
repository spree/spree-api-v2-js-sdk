import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  ITaxon,
  ITaxonResult,
  ITaxons,
  ITaxonsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions,
  RepositionOptions
} from '../interfaces/Taxons'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class Taxons extends Http {
  /**
   * Returns a list of Taxons. See [api docs](https://api.spreecommerce.org/docs/api-v2/06094c542e3ef-return-a-list-of-taxons).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxons.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<ITaxonsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ITaxons>('get', routes.taxonsPath(), token, params)
  }

  /**
   * Returns a single Taxon by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/add034c0d838e-return-a-taxon).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxons.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<ITaxonResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ITaxon>('get', routes.taxonPath(id), token, params)
  }

  /**
   * Creates a new Taxon and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/20d39119e2943-create-a-taxon).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxons.create({
   *   bearer_token: '7381273269536713689562374856',
   *   taxon: {
   *     taxonomy_id: 'string',
   *     parent_id: 'string',
   *     name: 'string',
   *     public_metadata: {
   *       ability_to_recycle: '90'
   *     },
   *     private_metadata: {
   *       profitability: 2
   *     }
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<ITaxonResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ITaxon>('post', routes.taxonsPath(), token, params)
  }

  /**
   * Update selected Taxon. See [api docs](https://api.spreecommerce.org/docs/api-v2/ca45cab23438d-update-a-taxon).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxons.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   taxon: {
   *     taxonomy_id: 'string',
   *     parent_id: 'string',
   *     name: 'string',
   *     public_metadata: {},
   *     private_metadata: {}
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<ITaxonResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ITaxon>('patch', routes.taxonPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Taxon. See [api docs](https://api.spreecommerce.org/docs/api-v2/e256bf62341f0-delete-a-taxon).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxons.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.taxonPath(id), token, params)
  }

  /**
   * Reposition selected Taxon. See [api docs](https://api.spreecommerce.org/docs/api-v2/84961c57775cf-reposition-a-taxon).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxons.reposition({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   taxon: {
   *     new_parent_id: 1,
   *     new_position_idx: 1
   *   }
   * })
   * ```
   */
   public async reposition(options: RepositionOptions): Promise<ITaxonResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ITaxon>('patch', routes.taxonPath(id), token, params)
  }
}
