import { Client } from './main'

const client = Client({
  host: 'http://localhost:5000/api/v2/storefront'
})

client.products.exec({ type: 'product', id: '10' }, { sources: { remote: { include: ['taxons'] }}}).then(console.log)
