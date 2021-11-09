import * as errors from '../errors'
import CastError from '../errors/CastError'
import DeserializeError from '../errors/DeserializeError'
import type { Result } from '../interfaces/Result'
import type { ResultResponse } from '../interfaces/ResultResponse'

const makeSuccess = <F extends Error, S>(value: S): Result<F, S> => {
  return {
    isSuccess: () => true,
    isFail: () => false,
    success: () => value,
    fail: () => {
      throw new Error('Cannot call fail() on success.')
    }
  }
}

const makeFail = <F extends Error, S>(value: F): Result<F, S> => {
  return {
    isSuccess: () => false,
    isFail: () => true,
    success: () => {
      throw new Error('Cannot call success() on fail.')
    },
    fail: () => value
  }
}

/**
 * Converts a Result instance into its JSON representation.
 * Not all information is preserved from the Result instance.
 * Most notably, non-enumerable properties are skipped.
 */
const toJson = <F extends Error, S>(result: Result<F, S>): { type: string; subtype: string; value?: any } => {
  if (result.isSuccess()) {
    return {
      type: 'SpreeSDKResult',
      subtype: 'success',
      value: result.success()
    }
  } else {
    return {
      type: 'SpreeSDKResult',
      subtype: 'fail',
      value: { ...result.fail() }
    }
  }
}

const castError = (error: { name: string; message: string; stack? }): errors.SpreeSDKError => {
  if (!(error.name in errors)) {
    throw new CastError('Error not recognized')
  }

  return Object.assign(Object.create(errors[error.name].prototype), error)
}

/**
 * Converts JSON to a Result instance.
 * If the JSON represents a fail, converts the error into an instance of SpreeSDKError its subtype.
 */
const fromJson = (json: { [key: string]: any }): Result<errors.SpreeSDKError, any> => {
  if (json.type === 'SpreeSDKResult') {
    if (json.subtype === 'success') {
      return makeSuccess(json.value)
    } else if (json.subtype === 'fail') {
      return makeFail(castError(json.value))
    } else {
      throw new DeserializeError('Expected success or fail subtype.')
    }
  }

  throw new DeserializeError('Unknown signature.')
}

/**
 * If Spree returns a success response, extracts and returns its data.
 * Otherwise, throws the response's SpreeSDKError. Useful for handling
 * SpreeSDKErrors inside try..catch blocks.
 */
const extractSuccess = <ResponseType, T extends ResponseType>(spreeRequest: Promise<ResultResponse<T>>): Promise<T> => {
  return spreeRequest.then((spreeResponse) => {
    if (spreeResponse.isFail()) {
      throw spreeResponse.fail()
    }

    return spreeResponse.success()
  })
}

export { makeSuccess, makeFail, toJson, fromJson, extractSuccess }
