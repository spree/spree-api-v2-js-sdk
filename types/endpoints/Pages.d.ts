import Http from '../Http';
import type { IPageResult, IPagesResult } from '../interfaces/Page';
import type { IQuery } from '../interfaces/Query';
export default class Pages extends Http {
    list(params?: IQuery): Promise<IPagesResult>;
    show(id: string, params?: IQuery): Promise<IPageResult>;
}
