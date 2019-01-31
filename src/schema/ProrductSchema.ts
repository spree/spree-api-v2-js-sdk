export const ProductSchema = {
  models: {	
    product: {	
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
    },	
    taxon: {	
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
  }
}
