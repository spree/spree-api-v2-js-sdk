import { Account, Products, Taxons, Countries, Cart, Checkout, Authentication, Order, Pages, DigitalAssets, Menus } from './endpoints';
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
    pages: Pages;
    digitalAssets: DigitalAssets;
    menus: Menus;
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
    protected makePages(): Pages;
    protected makeProducts(): Products;
    protected makeTaxons(): Taxons;
    protected makeDigitalAssets(): DigitalAssets;
    protected makeMenus(): Menus;
}
export default Client;
