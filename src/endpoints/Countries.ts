import Http from '../Http'
import { ICountries, ICountry } from '../interfaces/Country'
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint'
import { Routes } from '../routes'

export default class Countries extends Http implements SimpleEndpoint {
  public async list(): Promise<ICountries | Error> {
    try {
      const res = await this.get(Routes.countriesPath())
      return await res.data
    } catch (err) {
      return this.errorMessage
    }
  }

  public async show(iso: string): Promise<ICountry | Error> {
    try {
      const res = await this.get(Routes.countryPath(iso))
      return await res.data
    } catch (err) {
      return this.errorMessage
    }
  }
}
