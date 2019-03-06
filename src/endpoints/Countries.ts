import { GET } from '../constants'
import Http from '../Http'
import { ICountries, ICountry } from '../interfaces/Country'
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint'
import { IQuery } from '../interfaces/Query'
import { Routes } from '../routes'

export default class Countries extends Http implements SimpleEndpoint {
  public async list(): Promise<ICountries> {
    return await this.spreeResponse(GET, Routes.countriesPath())
  }

  public async show(iso: string, params: IQuery = {}): Promise<ICountry> {
    return await this.spreeResponse(GET, Routes.countryPath(iso), {}, params)
  }
}
