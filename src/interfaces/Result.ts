export interface Result<F, S> {
  isSuccess(): boolean
  isFail(): boolean
  success(): S
  fail(): F
}
