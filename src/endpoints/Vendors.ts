import Http from '../Http'
import type {
  ShowOptions,
  VendorResult,
  VendorsResult,
  Vendors as VendorsType,
  Vendor
} from '../interfaces/Vendor'
import routes from '../routes'

export default class Vendors extends Http {
  public async list(): Promise<VendorsResult> {
    return await this.spreeResponse<VendorsType>('get', routes.vendorsPath(), {}, {})
  }

  public async show(options: ShowOptions): Promise<VendorResult> {
    return await this.spreeResponse<Vendor>('get', routes.vendorPath(options.id), {}, {})
  }
}
