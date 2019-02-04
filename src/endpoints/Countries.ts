import Http from '../Http'
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint'
import { Country } from '../interfaces/Country'
import { Routes } from '../routes'

export default class Countries extends Http implements SimpleEndpoint {
  public async list(): Promise<Country[]> {
    try {
      const res = await this.get(Routes.countriesPath())
      return await res.data
    } catch(err) {
      console.error(err)
    }
  }

  public async show(iso: string): Promise<Country> {
    try {
      const res = await this.get(Routes.countryPath(iso))
      return await res.data
    } catch(err) {
      console.error(err)
    }
  }
}