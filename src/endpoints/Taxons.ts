import { GET } from '../constants'
import Http from '../Http'
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint'
import { ITaxon, ITaxons } from '../interfaces/Taxon'
import { IQuery } from '../interfaces/Query'
import { Routes } from '../routes'

export default class Taxons extends Http implements SimpleEndpoint {
  public async list(params: IQuery = {}): Promise<ITaxons> {
    return await this.spreeResponse(GET, Routes.taxonsPath(), params)
  }

  public async show(id: string, params: IQuery = {}): Promise<ITaxon> {
    return await this.spreeResponse(GET, Routes.taxonPath(id), params)
  }
}
