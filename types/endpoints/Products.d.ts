import Http from '../Http';
import type { IProductResult, IProductsResult } from '../interfaces/Product';
import type { IProductsQuery } from '../interfaces/Query';
import type { IToken } from '../interfaces/Token';
export default class Products extends Http {
    list(token?: IToken, params?: IProductsQuery): Promise<IProductsResult>;
    show(id: string, token?: IToken, params?: IProductsQuery): Promise<IProductResult>;
}
