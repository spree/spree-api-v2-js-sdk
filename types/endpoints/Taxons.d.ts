import Http from '../Http';
import { IQuery } from '../interfaces/Query';
import { ITaxonResult, ITaxonsResult } from '../interfaces/Taxon';
export default class Taxons extends Http {
    list(params?: IQuery): Promise<ITaxonsResult>;
    show(id: string, params?: IQuery): Promise<ITaxonResult>;
}
