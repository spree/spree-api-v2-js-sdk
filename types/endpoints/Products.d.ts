import Http from '../Http';
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint';
import { IProductResult, IProductsResult } from '../interfaces/Product';
import { IQuery } from '../interfaces/Query';
export default class Products extends Http implements SimpleEndpoint {
    list(params?: IQuery): Promise<IProductsResult>;
    show(id: string, params?: IQuery): Promise<IProductResult>;
}
