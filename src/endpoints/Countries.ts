import Http from '../Http'
import { ICountries, ICountry } from '../interfaces/Country'
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint'
import { Routes } from '../routes'

export default class Countries extends Http implements SimpleEndpoint {
  public async list(): Promise<ICountries> {
    try {
      const res = await this.get(Routes.countriesPath())
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }

  public async show(iso: string): Promise<ICountry> {
    try {
      const res = await this.get(Routes.countryPath(iso))
      return await res.data
    } catch (err) {
      console.error(err)
    }
  }
}
