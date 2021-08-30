import Http from '../Http'
import type { ICountries, ICountriesResult, ICountry, ICountryResult } from '../interfaces/Country'
import type { IQuery } from '../interfaces/Query'
import routes from '../routes'

export default class Countries extends Http {
  public async list(): Promise<ICountriesResult> {
    return await this.spreeResponse<ICountries>('get', routes.countriesPath())
  }

  public async show(iso: string, params: IQuery = {}): Promise<ICountryResult> {
    return await this.spreeResponse<ICountry>('get', routes.countryPath(iso), {}, params)
  }
}
