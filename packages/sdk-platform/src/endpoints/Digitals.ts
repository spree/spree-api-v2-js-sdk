import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  IDigitals,
  IDigitalsResult,
  IDigital,
  IDigitalResult,
  ListOptions,
  ShowOptions
} from '../interfaces/Digitals'
import routes from '../routes'

export default class Digitals extends Http {
  /**
   * Returns a list of all Digital Assets. See [api docs](https://api.spreecommerce.org/docs/api-v2/2219ac1d1dc01-return-a-list-of-digital-assets).
   *  
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.digitals.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IDigitalsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IDigitals>('get', routes.digitalsPath(), token, params)
  }

  /**
   * Returns a single Digital Asset by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/edd5849a688e5-return-a-digital-asset).
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.digitals.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IDigitalResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IDigital>('get', routes.digitalPath(id), token, params)
  }
}
