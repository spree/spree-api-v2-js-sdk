import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  ListOptions,
  ShowOptions,
  VendorResult,
  VendorsResult,
  Vendors as VendorsType,
  Vendor
} from '../interfaces/Vendor'
import routes from '../routes'

export default class Vendors extends Http {
  public async list(options: ListOptions = {}): Promise<VendorsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<VendorsType>('get', routes.vendorsPath(), token, params)
  }

  public async show(options: ShowOptions): Promise<VendorResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<Vendor>('get', routes.vendorPath(id), token, params)
  }
}
