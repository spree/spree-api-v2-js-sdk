import Account from './endpoints/Account';
import Authentication from './endpoints/Authentication';
import Cart from './endpoints/Cart';
import Checkout from './endpoints/Checkout';
import Countries from './endpoints/Countries';
import Order from './endpoints/Order';
import Products from './endpoints/Products';
import Taxons from './endpoints/Taxons';
export interface IClientConfig {
    host?: string;
}
declare class Client {
    products: Products;
    taxons: Taxons;
    countries: Countries;
    cart: Cart;
    checkout: Checkout;
    authentication: Authentication;
    account: Account;
    order: Order;
    protected host?: string;
    constructor(config?: IClientConfig);
    protected addEndpoints(): void;
    protected makeAccount(): Account;
    protected makeAuthentication(): Authentication;
    protected makeCart(): Cart;
    protected makeCheckout(): Checkout;
    protected makeCountries(): Countries;
    protected makeOrder(): Order;
    protected makeProducts(): Products;
    protected makeTaxons(): Taxons;
}
export default Client;
