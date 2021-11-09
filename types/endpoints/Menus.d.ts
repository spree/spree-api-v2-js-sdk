import Http from '../Http';
import type { MenuResult, MenusList, MenusResult } from '../interfaces/Menu';
import type { IQuery } from '../interfaces/Query';
export default class Menus extends Http {
    list(params?: MenusList): Promise<MenusResult>;
    show(id: string, params?: IQuery): Promise<MenuResult>;
}
