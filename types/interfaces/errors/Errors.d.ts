export declare type FieldErrors = unknown[];
export interface Errors {
    [key: string]: Errors | FieldErrors;
}
