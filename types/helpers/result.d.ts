import * as errors from '../errors';
import { Result } from '../interfaces/Result';
declare const makeSuccess: <F extends Error, S>(value: S) => Result<F, S>;
declare const makeFail: <F extends Error, S>(value: F) => Result<F, S>;
/**
 * Converts a Result instance into its JSON representation.
 * Not all information is preserved from the Result instance.
 * Most notably, non-enumerable properties are skipped.
 */
declare const toJson: <F extends Error, S>(result: Result<F, S>) => {
    type: string;
    subtype: string;
    value?: any;
};
/**
 * Converts JSON to a Result instance.
 * If the JSON represents a fail, converts the error into an instance of SpreeSDKError its subtype.
 */
declare const fromJson: (json: {
    [key: string]: any;
}) => Result<errors.SpreeSDKError, any>;
export { makeSuccess, makeFail, toJson, fromJson };
