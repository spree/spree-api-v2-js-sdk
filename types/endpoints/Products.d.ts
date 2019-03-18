import Http from '../Http';
import { IProductResult, IProductsResult } from '../interfaces/Product';
import { IQuery } from '../interfaces/Query';
export default class Products extends Http {
    list(params?: IQuery): Promise<IProductsResult>;
    show(id: string, params?: IQuery): Promise<IProductResult>;
}
