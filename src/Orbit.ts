import { Schema } from '@orbit/data'
import Store from '@orbit/store'
import JSONAPISource from '@orbit/jsonapi'
import Coordinator, { RequestStrategy, SyncStrategy, EventLoggingStrategy } from '@orbit/coordinator'
import { currentSchema } from './schema'
import { Model } from './interfaces/Model'

export default class Orbit {
  public currentSchema: Model
  public coordinator: Coordinator
  public schema: Schema
  public remote: JSONAPISource
  public store: Store

  constructor() {
    this.currentSchema = currentSchema
    this.schema = new Schema(currentSchema)
    this.remote = new JSONAPISource({ schema: this.schema, name: 'remote', host: 'http://localhost:5000/api/v2/storefront' })
    this.coordinator = new Coordinator()
    this.store = new Store({ schema: this.schema, name: 'store' })

    this.coordinator.addSource(this.store)
    this.coordinator.addSource(this.remote)

    this.coordinator.addStrategy(new RequestStrategy({
      source: 'store',
      on: 'beforeQuery',
      target: 'remote',
      action: 'pull',
      blocking: true
    }))

    this.coordinator.addStrategy(new SyncStrategy({
      source: 'remote',
      target: 'store',
      blocking: true
    }))

    this.coordinator.addStrategy(new EventLoggingStrategy({
      sources: ['remote']
    }));

    this.coordinator.addStrategy(new RequestStrategy({
      source: 'store',
      on: 'beforeUpdate',
      target: 'remote',
      action: 'push',
      blocking: true
    }))
  }
}
