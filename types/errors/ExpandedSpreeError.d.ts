import { AxiosResponse } from 'axios';
import { Errors, FieldErrors } from '../interfaces/errors/Errors';
import BasicSpreeError from './BasicSpreeError';
export default class ExpandedSpreeError extends BasicSpreeError {
    errors: Errors;
    constructor(serverResponse: AxiosResponse, errorsSummary: string, errors: {
        [fieldPath: string]: FieldErrors;
    });
    getErrors(path: string[]): Errors | FieldErrors | null;
}
