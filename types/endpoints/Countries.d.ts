import Http from '../Http';
import { ICountriesResult, ICountryResult } from '../interfaces/Country';
import { IQuery } from '../interfaces/Query';
export default class Countries extends Http {
    list(): Promise<ICountriesResult>;
    show(iso: string, params?: IQuery): Promise<ICountryResult>;
}
