import { FetchError } from '../errors'

export const isFetchError = (error: unknown): error is FetchError => error instanceof FetchError
