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
    private host?;
    constructor(config?: IClientConfig);
    private addEndpoints;
}
export default Client;
