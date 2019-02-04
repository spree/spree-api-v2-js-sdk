import Http from '../Http'

export default class Products extends Http {
  public async exec() {
    try {
      const res = await this.get('products.json')
      return await res.data
    } catch(err) {
      console.error(err)
    }
  }
}
