import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  Menu,
  Menus as MenusResponse,
  MenuResult,
  MenusList,
  MenusResult,
  ListOptions,
  ShowOptions
} from '../interfaces/Menu'
import type { IQuery } from '../interfaces/Query'
import routes from '../routes'

export default class Menus extends Http {
  public async list(): Promise<MenusResult> {
    return await this.spreeResponse<MenusResponse>('get', routes.menusPath(), {}, {})
  }

  public async show(options: ShowOptions): Promise<MenuResult> {
    return await this.spreeResponse<Menu>('get', routes.menuPath(options.id), {}, {})
  }
}
