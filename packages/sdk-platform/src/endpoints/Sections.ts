import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  ISections,
  ISectionsResult,
  ISection,
  ISectionResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Sections'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class Sections extends Http {
  /**
   * Returns a list of all CMS Sections. See [api docs](https://api.spreecommerce.org/docs/api-v2/95e8aa653cc18-return-a-list-of-cms-sections).
   *  
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.sections.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<ISectionsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ISections>('get', routes.sectionsPath(), token, params)
  }

  /**
   * Returns a single CMS Section by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/94e6101f83246-return-a-cms-section).
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.sections.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<ISectionResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ISection>('get', routes.sectionPath(id), token, params)
  }

  /**
   * Creates a new CMS Section and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/240a155557f35-create-a-cms-section).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.sections.create({
   *   bearer_token: '7381273269536713689562374856',
   *   cms_page: {
   *     name: 'string',
   *     cms_page_id: 'string',
   *     type: 'Spree::Cms::Sections::HeroImage',
   *     linked_resource_type: 'Spree::Taxon',
   *     linked_resource_id: '1',
   *     fit: 'Screen',
   *     position: 2,
   *     gutters: 'No Gutters',
   *     button_text: 'Click Here',
   *     title: 'Shop Today'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<ISectionResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ISection>('post', routes.sectionsPath(), token, params)
  }

  /**
   * Update selected CMS Section for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/ce52d489cc2de-update-a-cms-section).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.sections.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   cms_page: {
   *     name: 'string',
   *     type: 'Spree::Cms::Sections::ProductCarousel',
   *     linked_resource_type: 'Spree::Taxon',
   *     linked_resource_id: '1',
   *     fit: 'Screen',
   *     position: 2,
   *     gutters: 'No Gutters',
   *     button_text: 'Click Here',
   *     title: 'Shop Today'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<ISectionResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ISection>('patch', routes.sectionPath(id), token, params)
  }

  /**
   * This endpoint removes the specified CMS Section for the current user. See [api docs](https://api.spreecommerce.org/docs/api-v2/3592ae139f2ac-delete-a-cms-section).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.sections.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.sectionPath(id), token, params)
  }
}
