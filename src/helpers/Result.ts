import { Result } from '../interfaces/Result'

const makeSuccess = (value: any) => {
  return {
    isSuccess: () => true,
    isFail: () => false,
    success: () => value,
    fail: () => {
      throw new Error('Cannot call fail() on success.')
    }
  }
}

const makeFail = (value: any) => {
  return {
    isSuccess: () => false,
    isFail: () => true,
    success: () => {
      throw new Error('Cannot call success() on fail.')
    },
    fail: () => value
  }
}

export default {
  success: <F, S>(value: any): Result<F, S> => makeSuccess(value),
  fail: <F, S>(value: any): Result<F, S> => makeFail(value)
}
