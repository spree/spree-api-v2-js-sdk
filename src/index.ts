import { client } from './main'

client().products.exec({ type: 'product', id: '10' }, { sources: { remote: { include: ['taxons'] }}}).then(console.log)
