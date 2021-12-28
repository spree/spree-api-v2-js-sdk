import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type { IQuery } from '../interfaces/Query'
import type { ITaxon, ITaxonResult, ITaxons, ITaxonsResult, ListOptions, ShowOptions } from '../interfaces/Taxon'
import routes from '../routes'

export default class Taxons extends Http {
  public async list(options?: ListOptions): Promise<ITaxonsResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async list(params?: IQuery): Promise<ITaxonsResult>
  public async list(...allArguments: any[]): Promise<ITaxonsResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<ITaxons>('get', routes.taxonsPath(), token, params)
  }

  public async show(options: ShowOptions): Promise<ITaxonResult>
  /**
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
