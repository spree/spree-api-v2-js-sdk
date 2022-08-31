/**
 * Transforms given Union of T keys into required
 */
export type MakeRequired<T, Union extends keyof T> = Omit<T, Union> & Required<Pick<T, Union>>
