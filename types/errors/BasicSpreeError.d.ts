import type { RawFetchResponse } from '../interfaces/RawFetchResponse';
import SpreeError from './SpreeError';
declare class BasicSpreeError extends SpreeError {
    summary: string;
    constructor(serverResponse: RawFetchResponse, errorsSummary: string);
}
export default BasicSpreeError;
