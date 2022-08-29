/**
 * Transforms given Union of T keys into partial
 */
export type PickAsOptional<T, Union extends keyof T> = Omit<T, Union> & Partial<Pick<T, Union>>
