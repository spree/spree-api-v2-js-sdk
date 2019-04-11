import 'reflect-metadata';
import * as errors from './errors';
import Result from './helpers/Result';
import Instance from './Instance';
export declare const makeClient: (config?: {
    host?: string;
}) => Instance;
export { errors, Result };
