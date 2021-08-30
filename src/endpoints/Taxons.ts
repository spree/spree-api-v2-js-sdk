import Http from '../Http'
import type { IQuery } from '../interfaces/Query'
import type { ITaxon, ITaxonResult, ITaxons, ITaxonsResult } from '../interfaces/Taxon'
import routes from '../routes'

export default class Taxons extends Http {
  public async list(params: IQuery = {}): Promise<ITaxonsResult> {
    return await this.spreeResponse<ITaxons>('get', routes.taxonsPath(), {}, params)
  }

  public async show(id: string, params: IQuery = {}): Promise<ITaxonResult> {
    return await this.spreeResponse<ITaxon>('get', routes.taxonPath(id), {}, params)
  }
}
