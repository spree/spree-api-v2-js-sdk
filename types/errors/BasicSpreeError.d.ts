import { AxiosResponse } from 'axios';
import SpreeError from './SpreeError';
declare class BasicSpreeError extends SpreeError {
    summary: string;
    constructor(serverResponse: AxiosResponse, errorsSummary: string);
}
export default BasicSpreeError;
