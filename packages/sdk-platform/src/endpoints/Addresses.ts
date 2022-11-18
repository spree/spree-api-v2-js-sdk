import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IAddresses,
  IAddressesResult,
  IAddress,
  IAddressResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/Addresses'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class Addresses extends Http {
  /**
   * Returns a list of addresses.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.addresses.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IAddressesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IAddresses>('get', routes.addressesPath(), token, params)
  }

  /**
   * Returns a single address.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.addresses.show({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IAddressResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IAddress>('get', routes.addressPath(id), token, params)
  }

  /**
   * Creates new address and returns its attributes.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.addresses.create({
   *   bearer_token: '7381273269536713689562374856',
   *   address: {
   *     country_id: '224',
   *     state_id: '516',
   *     state_name: 'New York',
   *     address1: '775 Old Georgetown Road',
   *     address2: '3rd Floor',
   *     city: 'Qethesda',
   *     phone: '3488545445002',
   *     alternative_phone: 'string',
   *     zipcode: '90210',
   *     firstname: 'Mark',
   *     lastname: 'Winterburn',
   *     label: 'Work'
   *     company: 'Paper Street Soap Co.',
   *     user_id: 'string'
   *   }
   * })
   * ```
   */
   public async create(options: CreateOptions): Promise<IAddressResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IAddress>('post', routes.addressesPath(), token, params)
  }

  /**
   * Update selected Address for the signed in User.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.addresses.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   address: {
   *     country_id: '224',
   *     state_id: '516',
   *     state_name: 'New York',
   *     address1: '775 Old Georgetown Road',
   *     address2: '3rd Floor',
   *     city: 'Qethesda',
   *     phone: '3488545445002',
   *     alternative_phone: 'string',
   *     zipcode: '90210',
   *     firstname: 'Mark',
   *     lastname: 'Winterburn',
   *     label: 'Work'
   *     company: 'Paper Street Soap Co.',
   *     user_id: 'string'
   *   }
   * })
   * ```
   */
   public async update(options: UpdateOptions): Promise<IAddressResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IAddress>('patch', routes.addressPath(id), token, params)
  }

  /**
   * This endpoint removes the specified address for the current user.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.addresses.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
   public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.addressPath(id), token, params)
  }
}