import Http from '../Http'
import type {
  ICountries,
  ICountriesResult,
  ICountry,
  ICountryResult,
  ShowOptions
} from '../interfaces/Country'
import routes from '../routes'

export default class Countries extends Http {
  public async list(): Promise<ICountriesResult> {
    return await this.spreeResponse<ICountries>('get', routes.countriesPath(), {}, {})
  }

  public async show(options: ShowOptions): Promise<ICountryResult> {
    return await this.spreeResponse<ICountry>('get', routes.countryPath(options.iso), {}, {})
  }

  public async default(): Promise<ICountryResult> {
    return await this.spreeResponse<ICountry>('get', routes.defaultCountryPath(), {}, {})
  }
}
