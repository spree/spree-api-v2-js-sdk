import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  IWebhookEvents,
  IWebhookEventsResult,
  ListOptions,
} from '../interfaces/WebhookEvents'
import routes from '../routes'

export default class WebhookEvents extends Http {
  /**
   * Returns a list of Webhook Events. See [api docs](https://api.spreecommerce.org/docs/api-v2/987b4c4690542-return-a-list-of-webhook-events).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.webhookEvents.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IWebhookEventsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IWebhookEvents>('get', routes.webhookEventsPath(), token, params)
  }
}
