/**
 * Transforms given Union of T keys into required
 */
export type MakeRequired<T, Union extends keyof T> = Partial<Omit<T, Union>> & Required<Pick<T, Union>>
