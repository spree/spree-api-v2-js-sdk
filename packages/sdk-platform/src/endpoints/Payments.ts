import {
  Http,
  squashAndPreparePositionalArguments
} from '@spree/core-api-v2-sdk'
import type {
  NoContentResponse,
  NoContentResult
} from '@spree/core-api-v2-sdk'
import type {
  IPayment,
  IPaymentResult,
  IPayments,
  IPaymentsResult,
  ListOptions,
  ShowOptions,
  RemoveOptions
} from '../interfaces/Payments'
import routes from '../routes'

export default class Payments extends Http {
  /**
   * Returns a list of Payments. See [api docs](https://api.spreecommerce.org/docs/api-v2/d7c7688601a9c-return-a-list-of-payments).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.payments.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IPaymentsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IPayments>('get', routes.paymentsPath(), token, params)
  }

  /**
   * Returns a single Payment by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/9fea618c846d0-return-a-payment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.payments.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IPaymentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IPayment>('get', routes.paymentPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Payment. See [api docs](https://api.spreecommerce.org/docs/api-v2/96c8c7928761c-delete-a-payment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.payments.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.paymentPath(id), token, params)
  }
}
