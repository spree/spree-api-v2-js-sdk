import 'reflect-metadata'
import { container } from 'tsyringe'
import Client from './Client'

export const client = () => container.resolve(Client)
