export interface JsonApiDocument {
    id: string;
    type: string;
    attributes: any;
    relationships: any;
}
export interface JsonApiResponse {
    data: JsonApiDocument | JsonApiDocument[];
    included?: JsonApiDocument[];
}
export interface JsonApiListResponse extends JsonApiResponse {
    data: JsonApiDocument[];
    meta?: {
        total_pages: number;
    };
}
export interface JsonApiSingleResponse extends JsonApiResponse {
    data: JsonApiDocument;
}
