import Http from '../Http';
import { ICountriesResult, ICountryResult } from '../interfaces/Country';
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint';
import { IQuery } from '../interfaces/Query';
export default class Countries extends Http implements SimpleEndpoint {
    list(): Promise<ICountriesResult>;
    show(iso: string, params?: IQuery): Promise<ICountryResult>;
}
