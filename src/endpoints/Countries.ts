import Http from '../Http'
import { ICountriesResult, ICountryResult } from '../interfaces/Country'
import { IQuery } from '../interfaces/Query'
import { Routes } from '../routes'

export default class Countries extends Http {
  public async list(): Promise<ICountriesResult> {
    return await this.spreeResponse('get', Routes.countriesPath()) as ICountriesResult
  }

  public async show(iso: string, params: IQuery = {}): Promise<ICountryResult> {
    return await this.spreeResponse('get', Routes.countryPath(iso), {}, params) as ICountryResult
  }
}
