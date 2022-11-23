import squashAndPreparePositionalArguments from '../helpers/squashAndPreparePositionalArguments'
import Http from '../Http'
import type {
  IState,
  IStateResult,
  IStates,
  IStatesResult,
  ListOptions,
  ShowOptions
} from '../interfaces/States'
import routes from '../routes'

export default class States extends Http {
  /**
   * Returns a list of States. See [api docs](https://api.spreecommerce.org/docs/api-v2/f6c382d5fe26d-returns-a-list-of-states).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.states.list({
   *   bearer_token: '7381273269536713689562374856'
   * })
   * ```
   */
  public async list(options: ListOptions): Promise<IStatesResult> {
    const { token, params } = squashAndPreparePositionalArguments([options], [])

    return await this.spreeResponse<IStates>('get', routes.statesPath(), token, params)
  }

  /**
   * Returns a single State by its ID. See [api docs](https://api.spreecommerce.org/docs/api-v2/fadd391c739d4-returns-a-state).
   * 
   * **Required token:** [Bearer token](../pages/tokens.html#bearer-token)
   * 
   * **Success response schema:** [Success schema](../pages/response-schema.html#success-schema)
   * 
   * **Failure response schema:** [Error schema](../pages/response-schema.html#error-schema)
   * 
   * **Example:**
   * ```ts
   * const response = await client.states.show({
   *   bearer_token: '7381273269536713689562374856'
   *   id: '1'
   * })
   * ```
   */
  public async show(options: ShowOptions): Promise<IStateResult> {
    const { id, token, params } = squashAndPreparePositionalArguments([options], ['id'])

    return await this.spreeResponse<IState>('get', routes.statePath(id), token, params)
  }
}
