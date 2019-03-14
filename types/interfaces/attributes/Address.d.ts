export interface IAddress {
    firstname: string;
    lastname: string;
    address1: string;
    address2?: string;
    city: string;
    zipcode: string;
    state_name: string;
    country_iso: string;
    phone?: string;
    company?: string;
}
