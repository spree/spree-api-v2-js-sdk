import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IShipment,
  IShipmentResult,
  IShipments,
  IShipmentsResult,
  ListOptions,
  ShowOptions,
  CreateOptions,
  UpdateOptions,
  RemoveOptions,
  AddItemOptions,
  RemoveItemOptions,
  MarkReadyOptions,
  MarkShipOptions,
  CancelOptions,
  ResumeOptions,
  PendOptions
} from '../interfaces/Shipments'
import type { NoContentResponse, NoContentResult } from '../interfaces/NoContent'
import routes from '../routes'

export default class Shipments extends Http {
  /**
   * Returns a list of all Shipments. See [api docs](https://api.spreecommerce.org/docs/api-v2/7a7641aacda5f-return-a-list-of-shipments).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IShipmentsResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IShipments>('get', routes.shipmentsPath(), token, params)
  }

  /**
   * Returns a single Shipment by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/78cce1a1a71d1-return-a-shipment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IShipmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShipment>('get', routes.shipmentPath(id), token, params)
  }

  /**
   * Creates a new Shipment and returns its attributes. See [api docs](https://api.spreecommerce.org/docs/api-v2/46e88a93d8a10-create-a-shipment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.create({
   *   bearer_token: '7381273269536713689562374856',
   *   shipment: {
   *     stock_location_id: '101',
   *     order_id: '101',
   *     variant_id: '101',
   *     quantity: 2
   *   }
   * })
   * ```
   */
  public async create(options: CreateOptions): Promise<IShipmentResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IShipment>('post', routes.shipmentsPath(), token, params)
  }

  /**
   * Update the selected Shipment. See [api docs](https://api.spreecommerce.org/docs/api-v2/c97041fe30118-update-a-shipment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.update({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   shipment: {
   *     tracking: 'MY-TRACKING-REF-12324'
   *   }
   * })
   * ```
   */
  public async update(options: UpdateOptions): Promise<IShipmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShipment>('patch', routes.shipmentPath(id), token, params)
  }

  /**
   * This endpoint removes the specified Shipment. See [api docs](https://api.spreecommerce.org/docs/api-v2/6ce7296a99a17-delete-a-shipment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.remove({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
  public async remove(options: RemoveOptions): Promise<NoContentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<NoContentResponse>('delete', routes.shipmentPath(id), token, params)
  }

  /**
   * If selected Variant was already added to Order it will increase the quantity of existing Line Item, if not it will create a new Line Item. See [api docs](https://api.spreecommerce.org/docs/api-v2/bad599f0b406a-adds-item-variant-to-an-existing-shipment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.addItem({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   shipment: {
   *     variant_id: '101',
   *     quantity: 2
   *   }
   * })
   * ```
   */
   public async addItem(options: AddItemOptions): Promise<IShipmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShipment>('patch', routes.shipmentAddItemPath(id), token, params)
  }

  /**
   * If selected Variant is removed completely and Shipment doesn't include any other Line Items, Shipment itself will be deleted. See [api docs](https://api.spreecommerce.org/docs/api-v2/025a504d98424-removes-item-variant-from-shipment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.removeItem({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1',
   *   shipment: {
   *     variant_id: '101',
   *     quantity: 2
   *   }
   * })
   * ```
   */
   public async removeItem(options: RemoveItemOptions): Promise<IShipmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShipment>('patch', routes.shipmentRemoveItemPath(id), token, params)
  }

  /**
   * Marks Shipment as ready to be shipped. See [api docs](https://api.spreecommerce.org/docs/api-v2/d1bd8132cad18-mark-shipment-as-ready-to-be-shipped).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.markReady({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
   public async markReady(options: MarkReadyOptions): Promise<IShipmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShipment>('patch', routes.shipmentReadyPath(id), token, params)
  }

  /**
   * Marks Shipment as shipped. See [api docs](https://api.spreecommerce.org/docs/api-v2/95460ccbe4462-mark-shipment-as-shipped).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.markShipped({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
   public async markShipped(options: MarkShipOptions): Promise<IShipmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShipment>('patch', routes.shipmentReadyPath(id), token, params)
  }

  /**
   * Cancels the Shipment. See [api docs](https://api.spreecommerce.org/docs/api-v2/d499298cd11cd-cancels-the-shipment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.cancel({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
   public async cancel(options: CancelOptions): Promise<IShipmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShipment>('patch', routes.shipmentCancelPath(id), token, params)
  }

  /**
   * Resumes previously canceled Shipment. See [api docs](https://api.spreecommerce.org/docs/api-v2/fee9a850c2663-resumes-the-shipment).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.resume({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
   public async resume(options: ResumeOptions): Promise<IShipmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShipment>('patch', routes.shipmentResumePath(id), token, params)
  }

  /**
   * Moves Shipment back to pending state. See [api docs](https://api.spreecommerce.org/docs/api-v2/bdb78cbd9c6bc-moves-shipment-back-to-pending-state).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.shipments.pend({
   *   bearer_token: '7381273269536713689562374856',
   *   id: '1'
   * })
   * ```
   */
   public async pend(options: PendOptions): Promise<IShipmentResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IShipment>('patch', routes.shipmentPendPath(id), token, params)
  }
}
