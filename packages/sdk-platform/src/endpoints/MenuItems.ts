import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IMenuItem,
  IMenuItemResult,
  IMenuItems,
  IMenuItemsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions,
  RepositionOptions
} from '../interfaces/MenuItems'
import routes from '../routes'

export default class MenuItems extends Http {
  /**
   * Returns a list of Menu Items. See [api docs](https://api.spreecommerce.org/docs/api-v2/2efb250f56b26-return-a-list-of-menu-items).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menuItems.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IMenuItemsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IMenuItems>('get', routes.menuItemsPath(), token, params)
  }

  /**
   * Returns a single Menu Item. See [api docs](https://api.spreecommerce.org/docs/api-v2/a23710e3cf114-return-a-menu-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menuItems.show({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '2'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IMenuItemResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IMenuItem>('get', routes.menuItemPath(id), token, params)
  }

  /**
   * Creates a new Menu Item and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/d4573956ec0f1-create-a-menu-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menuItems.create({
   *   bearer_token: '7381273269536713689562374856',
   *   menu_item: {
   *     name: 'T-Shirts',
   *     code: 'MEN-TS',
   *     subtitle: 'Shop T-Shirts',
   *     destination: 'https://getvendo.com',
   *     menu_id: 1,
   *     new_window: true,
   *     item_type: 'Link',
   *     linked_resource_type: 'URL',
   *     linked_resource_id: 1
   *   }
   * })
   * ```
   */
   public async create(options: CreateOptions): Promise<IMenuItemResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IMenuItem>('post', routes.menuItemsPath(), token, params)
  }

  /**
   * Update selected Menu Item. See [api docs](https://api.spreecommerce.org/docs/api-v2/4a1460a0577a7-update-a-menu-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menuItems.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   menu_item: {
   *     name: 'T-Shirts',
   *     code: 'MEN-TS',
   *     subtitle: 'Shop T-Shirts',
   *     destination: 'https://getvendo.com',
   *     menu_id: 1,
   *     new_window: true,
   *     item_type: 'Link',
   *     linked_resource_type: 'URL',
   *     linked_resource_id: 1
   *   }
   * })
   * ```
   */
   public async update(options: UpdateOptions): Promise<IMenuItemResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IMenuItem>('patch', routes.menuItemPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Menu Item. See [api docs](https://api.spreecommerce.org/docs/api-v2/5ab9a75c5d467-delete-a-menu-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menuItems.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.menuItemPath(id), token, params)
  }

  /**
   * This endpoint repositions the specified Menu Item. See [api docs](https://api.spreecommerce.org/docs/api-v2/26d54ac0f05a5-reposition-a-menu-item).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.menuItems.reposition({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   menu_item: {
   *     new_parent_id: 1,
   *     new_position_idx: 1
   *   }
   * })
   * ```
   */
   public async reposition(options: RepositionOptions): Promise<IMenuItemResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IMenuItem>('patch', routes.menuItemRepositionPath(id), token, params)
  }
}
