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
  public async list(options?: ListOptions): Promise<MenusResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async list(params?: MenusList): Promise<MenusResult>
  public async list(...allArguments: any[]): Promise<MenusResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<MenusResponse>('get', routes.menusPath(), token, params)
  }

  public async show(options: ShowOptions): Promise<MenuResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async show(id: string, params?: IQuery): Promise<MenuResult>
  public async show(...allArguments: any[]): Promise<MenuResult> {
    const [idOrOptions, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [typeof idOrOptions === 'object' ? idOrOptions : { id: idOrOptions }, positionalParams],
      ['id']
    )

    return await this.spreeResponse<Menu>('get', routes.menuPath(id), token, params)
  }
}
