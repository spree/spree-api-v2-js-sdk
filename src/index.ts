import { Client } from './main'

const client = Client({
  host: 'http://localhost:5000/api/v2/storefront'
})

client.products.exec().then(console.log)
