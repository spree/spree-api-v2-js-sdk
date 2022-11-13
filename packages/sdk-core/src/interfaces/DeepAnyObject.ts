// Based on https://github.com/piotrwitek/utility-types/blob/df2502ef504c4ba8bd9de81a45baef112b7921d0/src/mapped-types.ts#L504
export type DeepAnyObject<T> = T extends (...args: any[]) => any
  ? T
  : T extends Array<infer U>
  ? _DeepAnyObjectArray<U>
  : T extends object
  ? _DeepAnyObjectObject<T>
  : T | undefined

interface _DeepAnyObjectArray<T> extends Array<DeepAnyObject<T>> {}

type _DeepAnyObjectObject<T> = { [P in keyof T]: DeepAnyObject<T[P]> } & Record<string, any>
