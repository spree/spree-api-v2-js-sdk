export const platformPath = `api/v2/platform`

const endpoints = {
  addressesPath: (): string => `${platformPath}/addresses`,
  addressPath: (id: string): string => `${platformPath}/addresses/${encodeURIComponent(id)}`
}

export default endpoints
