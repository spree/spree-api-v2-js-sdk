import Http from '../Http';
import { IProductResult, IProductsResult } from '../interfaces/Product';
import { IQuery } from '../interfaces/Query';
import { IToken } from '../interfaces/Token';
export default class Products extends Http {
    list(token?: IToken, params?: IQuery): Promise<IProductsResult>;
    show(id: string, token?: IToken, params?: IQuery): Promise<IProductResult>;
}
