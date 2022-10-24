export interface Result<F extends Error, S> {
  isSuccess(): boolean
  isFail(): boolean
  success(): S
  fail(): F
}
