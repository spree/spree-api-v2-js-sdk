require('isomorphic-fetch')
import { Schema } from '@orbit/data'
import Store from '@orbit/store'
import JSONAPISource from '@orbit/jsonapi'
import Coordinator, { RequestStrategy, SyncStrategy, EventLoggingStrategy, LogLevel } from '@orbit/coordinator'

const schemaDefinition = {
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
}

const schema = new Schema(schemaDefinition);

const remote = new JSONAPISource({
  schema,
  name: 'remote',
  host: 'http://localhost:3000/api/v2/storefront'
})

const coordinator = new Coordinator()
const store = new Store({
  schema,
  name: 'store'
})

coordinator.addSource(store)
coordinator.addSource(remote)


coordinator.addStrategy(new RequestStrategy({
  source: 'store',
  on: 'beforeQuery',
  target: 'remote',
  action: 'pull',
  blocking: true
}))

coordinator.addStrategy(new SyncStrategy({
  source: 'remote',
  target: 'store',
  blocking: true
}))

coordinator.addStrategy(new EventLoggingStrategy({
  sources: ['remote']
}));

coordinator.addStrategy(new RequestStrategy({
  source: 'store',
  on: 'beforeUpdate',
  target: 'remote',
  action: 'push',
  blocking: true
}))

coordinator.activate({ logLevel: LogLevel.None })
  .then(() => {
    store.query(q => q.findRecords('product'))
      .then(console.log)
      .catch(console.error)
  })
  .catch(console.error)