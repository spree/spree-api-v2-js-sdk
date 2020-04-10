import Http from '../Http'
import { IQuery } from '../interfaces/Query'
import { ITaxonResult, ITaxonsResult } from '../interfaces/Taxon'
import { Routes } from '../routes'

export default class Taxons extends Http {
  public async list(params: IQuery = {}): Promise<ITaxonsResult> {
    return await this.spreeResponse('get', Routes.taxonsPath(), {}, params) as ITaxonsResult
  }

  public async show(id: string, params: IQuery = {}): Promise<ITaxonResult> {
    return await this.spreeResponse('get', Routes.taxonPath(id), {}, params) as ITaxonResult
  }
}
