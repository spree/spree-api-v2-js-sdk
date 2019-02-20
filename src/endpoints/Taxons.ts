import Http from '../Http'
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint'
import { ITaxon, ITaxons } from '../interfaces/Taxon'
import { Routes } from '../routes'

export default class Taxons extends Http implements SimpleEndpoint {
  public async list(params = {}): Promise<ITaxons | Error> {
    try {
      const res = await this.get(Routes.taxonsPath(), params)
      return await res.data
    } catch (err) {
      return this.errorMessage
    }
  }

  public async show(id: string): Promise<ITaxon | Error> {
    try {
      const res = await this.get(Routes.taxonPath(id))
      return await res.data
    } catch (err) {
      return this.errorMessage
    }
  }
}
