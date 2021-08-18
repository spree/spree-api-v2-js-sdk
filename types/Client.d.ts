import { Account, Products, Taxons, Countries, Cart, Checkout, Authentication, Order } from './endpoints';
import type { Fetcher, OptionalIClientConfig } from './interfaces/ClientConfig';
declare class Client {
    products: Products;
    taxons: Taxons;
    countries: Countries;
    cart: Cart;
    checkout: Checkout;
    authentication: Authentication;
    account: Account;
    order: Order;
    protected host: string;
    protected fetcher: Fetcher;
    constructor(customOptions?: OptionalIClientConfig);
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
