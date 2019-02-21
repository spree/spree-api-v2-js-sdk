import { GET } from '../constants'
import Http from '../Http'
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint'
import { ITaxon, ITaxons } from '../interfaces/Taxon'
import { Routes } from '../routes'

export default class Taxons extends Http implements SimpleEndpoint {
  public async list(params = {}): Promise<ITaxons> {
    return await this.spreeResponse(GET, Routes.taxonsPath(), params)
  }

  public async show(id: string): Promise<ITaxon> {
    return await this.spreeResponse(GET, Routes.taxonPath(id))
  }
}
