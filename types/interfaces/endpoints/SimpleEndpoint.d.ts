export interface SimpleEndpoint {
    list(filter?: any, sort?: any, page?: any, includes?: any): any;
    show(id: string, includes?: any): any;
}
