import { IQuery } from './Query'
import { IRelationships } from './Relationships'

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
