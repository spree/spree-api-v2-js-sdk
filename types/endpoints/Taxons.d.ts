import Http from '../Http';
import { SimpleEndpoint } from '../interfaces/endpoints/SimpleEndpoint';
import { IQuery } from '../interfaces/Query';
import { ITaxonResult, ITaxonsResult } from '../interfaces/Taxon';
export default class Taxons extends Http implements SimpleEndpoint {
    list(params?: IQuery): Promise<ITaxonsResult>;
    show(id: string, params?: IQuery): Promise<ITaxonResult>;
}
