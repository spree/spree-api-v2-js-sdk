import { client } from './main'

// Products endpoint examples

client().products.list({ 
  filter: { attribute: 'price', value: '19.99' }, 
  sort: { attribute: 'name', order: 'ascending' },
  // page: { offset: 2, limit: 10 }
}).then(console.log)

client().products.show('12').then(console.log)
