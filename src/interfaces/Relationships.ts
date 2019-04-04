export interface RelationType {
  id: string
  type: string
}

export interface IRelationships {
  [key: string]: {
    data: RelationType | RelationType[]
  }
}
