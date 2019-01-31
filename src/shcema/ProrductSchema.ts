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
          type: 'hasMany',
          model: 'taxon'
        }
      }
    },
    taxon: {
      attributes: {
        name: { type: 'string' },
        permalink: { type: 'string' }
      }
    }
  }
};
