import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type { IPage, IPageResult, IPages, IPagesResult, ListOptions, ShowOptions } from '../interfaces/Page'
import type { IQuery } from '../interfaces/Query'
import routes from '../routes'

export default class Pages extends Http {
  public async list(options?: ListOptions): Promise<IPagesResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async list(params?: IQuery): Promise<IPagesResult>
  public async list(...allArguments: any[]): Promise<IPagesResult> {
    const [paramsOrOptions = {}] = allArguments
    const { token, params } = squashAndPreparePositionalArguments([paramsOrOptions], [])

    return await this.spreeResponse<IPages>('get', routes.pagesPath(), token, params)
  }

  public async show(options: ShowOptions): Promise<IPageResult>
  /**
   * @deprecated Use the combined options signature instead.
   */
  public async show(id: string, params?: IQuery): Promise<IPageResult>
  public async show(...allArguments: any[]): Promise<IPageResult> {
    const [idOrOptions, positionalParams = {}] = allArguments
    const { id, token, params } = squashAndPreparePositionalArguments(
      [typeof idOrOptions === 'object' ? idOrOptions : { id: idOrOptions }, positionalParams],
      ['id']
    )

    return await this.spreeResponse<IPage>('get', routes.pagePath(id), token, params)
  }
}
