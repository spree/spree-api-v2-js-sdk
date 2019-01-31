export interface Relationship {
  [key: string]: {	
    type: string
    model: string
    inverse: string
  }	
}
