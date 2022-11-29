import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  ICountries,
  ICountriesResult,
  ICountry,
  ICountryResult,
  ListOptions,
  ShowOptions
} from '../interfaces/Countries'
import routes from '../routes'

export default class Countries extends Http {
  /**
   * Returns a list of Countries. See [api docs](https://api.spreecommerce.org/docs/api-v2/104e8104bf29f-returns-a-list-of-countries).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.countries.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<ICountriesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ICountries>('get', routes.countriesPath(), token, params)
  }

  /**
   * Returns a single Country. See [api docs](https://api.spreecommerce.org/docs/api-v2/b41a83f139baf-returns-a-country).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.countries.show({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<ICountryResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ICountry>('get', routes.countryPath(id), token, params)
  }
}