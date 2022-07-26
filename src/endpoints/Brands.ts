import Http from '../Http'
import routes from '../routes'
import type {
  IBrand,
  IBrands,
  IBrandResult,
  IBrandsResult,
  ShowOptions
} from '../interfaces/Brands'

export default class Brands extends Http {
  public async list(): Promise<IBrandsResult> {
    return await this.spreeResponse<IBrands>('get', routes.brandsPath(), {}, {})
  }

  public async show(options: ShowOptions): Promise<IBrandResult> {
    return await this.spreeResponse<IBrand>('get', routes.brandPath(options.brand_permalink), {}, {})
  }
}
