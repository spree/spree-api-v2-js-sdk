import Http from '../Http'
import type { Menu, Menus as MenusResponse, MenuResult, MenusList, MenusResult } from '../interfaces/Menu'
import type { IQuery } from '../interfaces/Query'
import routes from '../routes'

export default class Menus extends Http {
  public async list(params: MenusList = {}): Promise<MenusResult> {
    return await this.spreeResponse<MenusResponse>('get', routes.menusPath(), {}, params)
  }

  public async show(id: string, params: IQuery = {}): Promise<MenuResult> {
    return await this.spreeResponse<Menu>('get', routes.menuPath(id), {}, params)
  }
}
