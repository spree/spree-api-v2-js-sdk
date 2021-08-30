import Http from '../Http';
import type { IQuery } from '../interfaces/Query';
import type { ITaxonResult, ITaxonsResult } from '../interfaces/Taxon';
export default class Taxons extends Http {
    list(params?: IQuery): Promise<ITaxonsResult>;
    show(id: string, params?: IQuery): Promise<ITaxonResult>;
}
