import { Account, Products, Taxons, Countries, Cart, Checkout, Authentication, Order } from './endpoints';
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
