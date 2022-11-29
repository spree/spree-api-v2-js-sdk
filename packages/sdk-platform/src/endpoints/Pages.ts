import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IPage,
  IPageResult,
  IPages,
  IPagesResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Pages'
import routes from '../routes'

export default class Pages extends Http {
  /**
   * Returns a list of all CMS Pages. See [api docs](https://api.spreecommerce.org/docs/api-v2/9ee28631b9fa8-return-a-list-of-cms-pages).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.pages.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IPagesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPages>('get', routes.pagesPath(), token, params)
  }

  /**
   * Returns a single CMS Page by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/cb1999788ddd8-return-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.pages.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IPageResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPage>('get', routes.pagePath(id), token, params)
  }

  /**
   * Creates a new CMS Page and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/974134352bb37-create-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.pages.create({
   *   bearer_token: '7381273269536713689562374856',
   *   cms_page: {
   *     title: 'About Us',
   *     type: 'Spree::Cms::Pages::StandardPage',
   *     meta_title: 'Learn More About Super-Shop',
   *     content: 'Lot's of text..',
   *     meta_description: 'Learn more about us on this page here...',
   *     visible: true,
   *     slug: 'about-us',
   *     locale: 'en-US'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IPageResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPage>('post', routes.pagesPath(), token, params)
  }

  /**
   * Update selected CMS Page for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/51f1f4d927506-update-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.pages.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   cms_page: {
   *     title: 'About Us',
   *     type: 'Spree::Cms::Pages::StandardPage',
   *     meta_title: 'Learn More About Super-Shop',
   *     content: 'Lots of text..',
   *     meta_description: 'Learn more about us on this page here...',
   *     visible: true,
   *     slug: 'about-us',
   *     locale: 'en-US'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IPageResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPage>('patch', routes.pagePath(id), token, params)
  }

  /**
   * This endpoint removes the specified CMS Page for the current user. See [api docs](https://api.spreecommerce.org/docs/api-v2/ed7075128d23d-delete-a-cms-page).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.pages.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.pagePath(id), token, params)
  }
}
