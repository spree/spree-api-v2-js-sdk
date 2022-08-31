export const isNotNull = <T>(arg: T): arg is Exclude<T, null> => arg !== null
