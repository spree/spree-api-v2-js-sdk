import Http from '../Http'
import type {
  Menu,
  Menus as MenusResponse,
  MenuResult,
  MenusResult,
  ShowOptions
} from '../interfaces/Menu'
import routes from '../routes'

export default class Menus extends Http {
  public async list(): Promise<MenusResult> {
    return await this.spreeResponse<MenusResponse>('get', routes.menusPath(), {}, {})
  }

  public async show(options: ShowOptions): Promise<MenuResult> {
    return await this.spreeResponse<Menu>('get', routes.menuPath(options.id), {}, {})
  }
}
