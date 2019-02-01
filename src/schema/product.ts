export const product = {
  attributes: {	
    name: { type: 'string' },	
    description: { type: 'string' },	
    price: { type: 'string' },	
    currency: { type: 'string' },	
    display_price: { type: 'string' },	
    slug: { type: 'string' }	
  },	
  relationships: {	
    taxons: {	
      type: 'hasMany' as 'hasMany',	
      model: 'taxon',	
      inverse: 'products'	
    }	
  }
}
