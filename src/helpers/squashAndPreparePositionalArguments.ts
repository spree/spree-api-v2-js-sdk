import type { IToken } from '../interfaces/Token'

export const split = (source: Record<string, any>, specialKeys: string[]) => {
  const result: [Record<string, any>, Record<string, any>] = [{}, {}]

  for (const sourceKey in source) {
    if (specialKeys.includes(sourceKey)) {
      result[1][sourceKey] = source[sourceKey]
    } else {
      result[0][sourceKey] = source[sourceKey]
    }
  }

  return result
}

/**
 * @deprecated This function is used only to support the old method signatures
 * and will be removed in the future.
 */
const squashAndPreparePositionalArguments = (
  positionalArguments: Record<string, any>[],
  specialKeys: string[]
): Record<string, any> & { token: IToken } & { params: Record<string, any> } => {
  // Using reverse() ensures we treat the first object with priority.
  // It replicates the order of arguments for endpoints methods.
  const mergedArguments: Record<string, any> = Object.assign({}, ...positionalArguments.filter(Boolean).reverse())
  const [restArguments, tokensArguments] = split(mergedArguments, ['orderToken', 'bearerToken'])
  const [params, specialKeysMapping] = split(restArguments, specialKeys)

  // Extract tokens into IToken
  let token: IToken

  if ('orderToken' in tokensArguments && 'bearerToken' in tokensArguments) {
    console.warn('Avoid providing both token types in a request to prevent unexpected results.')
  }

  if ('bearerToken' in tokensArguments) {
    token = { bearerToken: tokensArguments.bearerToken }
  } else if ('orderToken' in tokensArguments) {
    token = { orderToken: tokensArguments.orderToken }
  } else {
    token = {}
  }

  return {
    token,
    ...specialKeysMapping,
    params
  }
}

export default squashAndPreparePositionalArguments
