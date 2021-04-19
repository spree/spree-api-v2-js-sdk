import { AxiosResponse } from 'axios';
import Errors from '../interfaces/errors/Errors';
import BasicSpreeError from './BasicSpreeError';
export default class ExpandedSpreeError extends BasicSpreeError {
    errors: Errors;
    constructor(serverResponse: AxiosResponse, errorsSummary: string, errors: {
        [fieldPath: string]: string[];
    });
    getErrors(path: string[]): string[] | null;
}
