import { IRelationships } from './Relationships'
import { IQuery } from './Query'

export interface IAccount extends IQuery {
  data: {
    id: string
    type: string
    attributes: {
      email: string
      store_credits: number
      completed_orders: number
    }

    relationships?: IRelationships
  }
}
