import Http from '../Http'
import type { IPage, IPageResult, IPages, IPagesResult, ShowOptions } from '../interfaces/Page'
import routes from '../routes'

export default class Pages extends Http {
  public async list(): Promise<IPagesResult> {
    return await this.spreeResponse<IPages>('get', routes.pagesPath(), {}, {})
  }

  public async show(options: ShowOptions): Promise<IPageResult> {
    return await this.spreeResponse<IPage>('get', routes.pagePath(options.cms_page_slug), {}, {})
  }
}
