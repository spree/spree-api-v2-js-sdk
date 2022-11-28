import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  ILinks,
  ILinksResult,
  ILink,
  ILinkResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions,
  ResetOptions
} from '../interfaces/Links'
import routes from '../routes'

export default class Links extends Http {
  /**
   * Returns a list of all Digital Links. See [api docs](https://api.spreecommerce.org/docs/api-v2/0cac013095d80-return-a-list-of-digital-links).
   *  
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.links.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<ILinksResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ILinks>('get', routes.linksPath(), token, params)
  }

  /**
   * Returns a single Digital Link by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/a5e0bfb2137cd-return-a-digital-link).
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.links.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<ILinkResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ILink>('get', routes.linkPath(id), token, params)
  }

  /**
   * Creates a new Digital Link and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/98772c49abf1e-create-a-digital-link).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.links.create({
   *   bearer_token: '7381273269536713689562374856',
   *   digital_link: {
   *     access_counter: 0,
   *     line_item_id: '1',
   *     digital_id: '1'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<ILinkResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<ILink>('post', routes.linksPath(), token, params)
  }

  /**
   * Update selected Digital Link for the signed in User. See [api docs](https://api.spreecommerce.org/docs/api-v2/84b11cf453d86-update-a-digital-link).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.links.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   digital_link: {
   *     access_counter: 0,
   *     line_item_id: '1',
   *     digital_id: '1'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<ILinkResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ILink>('patch', routes.linkPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Digital Link for the current user. See [api docs](https://api.spreecommerce.org/docs/api-v2/ec502c8a3e7da-delete-a-digital-link).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.links.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.linkPath(id), token, params)
  }

  /**
   * This endpoint resets the specified Digital Link for the current user. See [api docs](https://api.spreecommerce.org/docs/api-v2/4ddbe63142ec5-reset-a-digital-link).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.links.reset({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async reset(options: ResetOptions): Promise<ILinkResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<ILink>('patch', routes.linkResetPath(id), token, params)
  }
}
