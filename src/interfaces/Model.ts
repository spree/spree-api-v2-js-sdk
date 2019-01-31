import { Attribute } from './Attribute'
import { Relationship } from './Relationship'

export interface Model {
  readonly models: {
    [key: string]: {
      attributes: Attribute
      relationships: Relationship
    }
  }
}
