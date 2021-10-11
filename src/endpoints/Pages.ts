import Http from '../Http'
import type { IPage, IPageResult, IPages, IPagesResult } from '../interfaces/Page'
import type { IQuery } from '../interfaces/Query'
import routes from '../routes'

export default class Pages extends Http {
  public async list(params: IQuery = {}): Promise<IPagesResult> {
    return await this.spreeResponse<IPages>('get', routes.pagesPath(), {}, params)
  }

  public async show(id: string, params: IQuery = {}): Promise<IPageResult> {
    return await this.spreeResponse<IPage>('get', routes.pagePath(id), {}, params)
  }
}
