import { injectable } from "tsyringe"
import  Products from './endpoints/Products'
import Taxons from './endpoints/Taxons'

@injectable()
export default class Instance {
  constructor(
    public products: Products,
    public taxons: Taxons
  ) { }
}
