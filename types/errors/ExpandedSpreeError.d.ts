import { AxiosResponse } from 'axios';
import BasicSpreeError from './BasicSpreeError';
export default class ExpandedSpreeError extends BasicSpreeError {
    errors: any;
    constructor(serverResponse: AxiosResponse, errorsSummary: string, errors: {
        [fieldPath: string]: string[];
    });
    getErrors(path: string[]): string[] | null;
}
