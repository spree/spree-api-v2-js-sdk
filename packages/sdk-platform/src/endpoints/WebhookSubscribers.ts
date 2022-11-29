import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IWebhookSubscriber,
  IWebhookSubscriberResult,
  IWebhookSubscribers,
  IWebhookSubscribersResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions
} from '../interfaces/WebhookSubscribers'
import routes from '../routes'

export default class WebhookSubscribers extends Http {
  /**
   * Returns a list of Webhook Subscribers. See [api docs](https://api.spreecommerce.org/docs/api-v2/ba01a5b5dd8fc-return-a-list-of-webhook-subscribers).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.webhookSubscribers.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IWebhookSubscribersResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IWebhookSubscribers>('get', routes.webhookSubscribersPath(), token, params)
  }

  /**
   * Returns a single Webhook Subscriber by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/9173253c09e84-return-a-webhook-subscriber).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.webhookSubscribers.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IWebhookSubscriberResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IWebhookSubscriber>('get', routes.webhookSubscriberPath(id), token, params)
  }

  /**
   * Creates a new Webhook Subscriber and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/7a7477a80caf1-create-a-webhook-subscriber).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.webhookSubscribers.create({
   *   bearer_token: '7381273269536713689562374856',
   *   subscriber: {
   *     active: false,
   *     subscriptions: [],
   *     url: 'https://www.url.com/'
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IWebhookSubscriberResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IWebhookSubscriber>('post', routes.webhookSubscribersPath(), token, params)
  }

  /**
   * Update selected Webhook Subscriber. See [api docs](https://api.spreecommerce.org/docs/api-v2/d90ca778a43dc-update-a-webhook-subscriber).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.webhookSubscribers.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   subscriber: {
   *     active: false,
   *     subscriptions: [],
   *     url: 'https://www.url.com/'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IWebhookSubscriberResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IWebhookSubscriber>('patch', routes.webhookSubscriberPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Webhook Subscriber. See [api docs](https://api.spreecommerce.org/docs/api-v2/dcc9dc97e15e5-delete-a-webhook-subscriber).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.webhookSubscribers.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.webhookSubscriberPath(id), token, params)
  }
}
