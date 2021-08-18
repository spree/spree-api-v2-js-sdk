import { Errors, FieldErrors } from '../interfaces/errors/Errors';
import type { RawFetchResponse } from '../interfaces/RawFetchResponse';
import BasicSpreeError from './BasicSpreeError';
export default class ExpandedSpreeError extends BasicSpreeError {
    errors: Errors;
    constructor(serverResponse: RawFetchResponse, errorsSummary: string, errors: {
        [fieldPath: string]: FieldErrors;
    });
    getErrors(path: string[]): Errors | FieldErrors | null;
}
