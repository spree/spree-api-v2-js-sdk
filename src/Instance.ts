import { injectable } from "tsyringe"
import  Products from './endpoints/Products'
import Taxons from './endpoints/Taxons'
import Countries from './endpoints/Countries'

@injectable()
export default class Instance {
  constructor(
    public products: Products,
    public taxons: Taxons,
    public countries: Countries
  ) { }
}
