import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  ICountries,
  ICountriesResult,
  ICountry,
  ICountryResult,
  DefaultOptions,
  ListOptions,
  ShowOptions
} from '../interfaces/Country'
import type { IQuery } from '../interfaces/Query'
import routes from '../routes'

export default class Countries extends Http {
  public async list(options?: ListOptions): Promise<ICountriesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options || {}], [])

    return await this.spreeResponse<ICountries>('get', routes.countriesPath(), token, params)
  }

  public async show(options: ShowOptions): Promise<ICountryResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async show(iso: string, params: IQuery): Promise<ICountryResult>
  public async show(...allArguments: any[]): Promise<ICountryResult> {
    const [isoOrOptions, positionalParams = {}] = allArguments
    const { iso, token, params } = squashAndPreparePositionalArguments(
      [typeof isoOrOptions === 'object' ? isoOrOptions : { iso: isoOrOptions }, positionalParams],
      ['iso']
    )

    return await this.spreeResponse<ICountry>('get', routes.countryPath(iso), token, params)
  }

  public async default(options?: DefaultOptions): Promise<ICountryResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async default(params: IQuery): Promise<ICountryResult>
  public async default(...allArguments: any[]): Promise<ICountryResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<ICountry>('get', routes.defaultCountryPath(), token, params)
  }
}
