import Http from '../Http';
import type { IProductResult, IProductsResult } from '../interfaces/Product';
import type { IQuery } from '../interfaces/Query';
import type { IToken } from '../interfaces/Token';
export default class Products extends Http {
    list(token?: IToken, params?: IQuery): Promise<IProductsResult>;
    show(id: string, token?: IToken, params?: IQuery): Promise<IProductResult>;
}
