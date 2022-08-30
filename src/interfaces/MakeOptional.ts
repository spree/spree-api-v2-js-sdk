/**
 * Transforms given Union of T keys into partial
 */
export type MakeOptional<T, Union extends keyof T> = Omit<T, Union> & Partial<Pick<T, Union>>
