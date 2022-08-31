/**
 * @returns subset of T containing all required properties of T
 */
export type FilterRequiredKeys<T> = { [K in keyof T as undefined extends T[K] ? never : K]: T[K] }
