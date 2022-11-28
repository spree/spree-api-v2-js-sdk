import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type { IQuery } from '@spree/core-api-v2-sdk'
import type {
  ICountries,
  ICountriesResult,
  ICountry,
  ICountryResult,
  DefaultOptions,
  ListOptions,
  ShowOptions
} from '../interfaces/Country'
import routes from '../routes'

export default class Countries extends Http {
  /**
   * Returns a list of all countries. See [api docs](https://api.spreecommerce.org/docs/api-v2/ca56911efbaab-list-all-countries).
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const countries = await client.countries.list()
   * ```
   */
  public async list(options?: ListOptions): Promise<ICountriesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options || {}], [])

    return await this.spreeResponse<ICountries>('get', routes.countriesPath(), token, params)
  }

  /**
   * Returns the details of a specific country. See [api docs](https://api.spreecommerce.org/docs/api-v2/5f5116adb3113-retrieve-a-country).
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   iso: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const country = await client.countries.show({
   *   iso: 'USA'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<ICountryResult>
  /**
   * @hidden
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

  /**
   * Returns the default country for the current store. By default this will be the US. See [api docs](https://api.spreecommerce.org/docs/api-v2/7cf807c85c035-get-default-country).
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const countries = await client.countries.default()
   * ```
   */
  public async default(options?: DefaultOptions): Promise<ICountryResult>
  /**
   * @hidden
   * @deprecated Use the combined options signature instead.
   */
  public async default(params: IQuery): Promise<ICountryResult>
  public async default(...allArguments: any[]): Promise<ICountryResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<ICountry>('get', routes.defaultCountryPath(), token, params)
  }
}
