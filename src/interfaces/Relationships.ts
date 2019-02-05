import { RelationType } from './RelationTypes'

export interface Relationships {
  [key: string]: {
    data: RelationType,
  }
}
