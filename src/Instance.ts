import { injectable } from "tsyringe"
import  Products from './endpoints/Products'

@injectable()
export default class Instance {
  constructor(public products: Products) { }
}
