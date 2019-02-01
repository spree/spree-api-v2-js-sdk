export const taxon = {
  attributes: {	
    name: { type: 'string' },	
    permalink: { type: 'string' }	
  },	
  relationships: {	
    products: {	
      type: 'hasMany' as 'hasMany',	
      model: 'product',	
      inverse: 'taxons'	
    }	
  }
}