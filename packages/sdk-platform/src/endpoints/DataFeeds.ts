import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IDataFeed,
  IDataFeedResult,
  IDataFeeds,
  IDataFeedsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/DataFeeds'
import routes from '../routes'

export default class DataFeeds extends Http {
  /**
   * Returns a list of all Data Feeds.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.dataFeeds.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IDataFeedsResult> {
    console.log(options)
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IDataFeeds>('get', routes.dataFeeds(), token, params)
  }

  /**
   * Returns a single Data Feed by its ID.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.dataFeeds.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IDataFeedResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IDataFeed>('get', routes.dataFeed(id), token, params)
  }

  /**
   * Creates a new Data Feed and returns its attributes. 
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.dataFeeds.create({
   *   bearer_token: '7381273269536713689562374856',
   *   data_feed_setting: {
   *     provider: 'google',
   *     name: 'Google data feed'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IDataFeedResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IDataFeed>('post', routes.dataFeeds(), token, params)
  }

  /**
   * Update selected Data Feed.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.dataFeeds.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   data_feed_setting: {
   *     name: 'New feed name'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IDataFeedResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IDataFeed>('patch', routes.dataFeed(id), token, params)
  }

  /**
   * This endpoint removes the specified Data Feed.
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.dataFeeds.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.dataFeed(id), token, params)
  }
}
