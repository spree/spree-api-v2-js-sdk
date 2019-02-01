import { injectable } from "tsyringe"
import  Products from './endpoints/Products'

@injectable()
export default class Client {
  constructor(public products: Products) { }
}
