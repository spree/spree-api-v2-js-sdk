import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  ListOptions,
  ShowOptions,
  VendorResult,
  VendorsResult,
  Vendors as VendorsType,
  Vendor
} from '../interfaces/Vendor'
import routes from '../routes'

/**
 * The multi-vendor marketplace feature is only available via [Vendo](https://www.getvendo.com).
 */
export default class Vendors extends Http {
  /**
   * Returns a list of Vendors in a Spree marketplace.
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const vendors = await client.vendors.list({
   *   include: 'products'
   * })
   * ```
   */
  public async list(options: ListOptions = {}): Promise<VendorsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<VendorsType>('get', routes.vendorsPath(), token, params)
  }

  /**
   * Returns a single Vendor in a Spree marketplace.
   * 
   * **Options schema:**
   * ```ts
   * interface options {
   *   id: string
   * }
   * ```
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const vendor = await client.vendors.show({ id: '123' })
   * ```
   */
  public async show(options: ShowOptions): Promise<VendorResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<Vendor>('get', routes.vendorPath(id), token, params)
  }
}