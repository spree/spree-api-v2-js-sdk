import Http from '../Http'
import routes from '../routes'
import type {
  ICategory,
  ICategories,
  ICategoryResult,
  ICategoriesResult,
  ShowOptions
} from '../interfaces/Categories'

export default class Categories extends Http {
  public async list(): Promise<ICategoriesResult> {
    return await this.spreeResponse<ICategories>('get', routes.categoriesPath(), {}, {})
  }

  public async show(options: ShowOptions): Promise<ICategoryResult> {
    return await this.spreeResponse<ICategory>('get', routes.categoryPath(options.category_permalink), {}, {})
  }
}
