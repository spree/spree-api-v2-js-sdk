/**
 * @returns subset of T containing all optional properties of T
 */
export type FilterOptionalKeys<T> = { [K in keyof T as undefined extends T[K] ? K : never]: T[K] }
