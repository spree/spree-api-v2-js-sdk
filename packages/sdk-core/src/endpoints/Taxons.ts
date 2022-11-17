import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type { IQuery } from '../interfaces/Query'
import type { ITaxon, ITaxonResult, ITaxons, ITaxonsResult, ListOptions, ShowOptions } from '../interfaces/Taxon'
import routes from '../routes'

export default class Taxons extends Http {
  /**
   * Returns a list of Taxons. See [api docs](https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2NA-list-all-taxons).
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.taxons.list()
   * ```
   */
  public async list(options?: ListOptions): Promise<ITaxonsResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async list(params?: IQuery): Promise<ITaxonsResult>
  public async list(...allArguments: any[]): Promise<ITaxonsResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<ITaxons>('get', routes.taxonsPath(), token, params)
  }

  /**
   * Returns a single Taxon. See [api docs](https://api.spreecommerce.org/docs/api-v2/6e26f7594be8b-retrieve-a-taxon).
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   id: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const products = await client.taxons.show({ id: '1' })
   * ```
   */
  public async show(options: ShowOptions): Promise<ITaxonResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async show(id: string, params?: IQuery): Promise<ITaxonResult>
  public async show(...allArguments: any[]): Promise<ITaxonResult> {
    const [idOrOptions, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [typeof idOrOptions === 'object' ? idOrOptions : { id: idOrOptions }, positionalParams],
      ['id']
    )

    return await this.spreeResponse<ITaxon>('get', routes.taxonPath(id), token, params)
  }
}
