export const platformPath = `api/v2/platform`

const endpoints = {
  addressesPath: (): string => `${platformPath}/addresses`,
  addressPath: (id: string): string => `${platformPath}/addresses/${encodeURIComponent(id)}`,
  adjustmentsPath: (): string => `${platformPath}/adjustments`,
  adjustmentPath: (id: string) => `${platformPath}/adjustments/${encodeURIComponent(id)}`,
  classificationsPath: (): string => `${platformPath}/classifications`,
  classificationPath: (id: string) => `${platformPath}/classifications/${encodeURIComponent(id)}`,
  countriesPath: (): string => `${platformPath}/countries`,
  countryPath: (id: string) => `${platformPath}/countries/${encodeURIComponent(id)}`,
  pagesPath: (): string => `${platformPath}/cms_pages`,
  pagePath: (id: string) => `${platformPath}/cms_pages/${encodeURIComponent(id)}`,
  sectionsPath: (): string => `${platformPath}/cms_sections`,
  sectionPath: (id: string) => `${platformPath}/cms_sections/${encodeURIComponent(id)}`,
  digitalsPath: (): string => `${platformPath}/digitals`,
  digitalPath: (id: string) => `${platformPath}/digitals/${encodeURIComponent(id)}`,
  linksPath: (): string => `${platformPath}/digital_links`,
  linkPath: (id: string) => `${platformPath}/digital_links/${encodeURIComponent(id)}`,
  linkResetPath: (id: string) => `${platformPath}/digital_links/${encodeURIComponent(id)}/reset`,
  itemsPath: (): string => `${platformPath}/line_items`,
  itemPath: (id: string) => `${platformPath}/line_items/${encodeURIComponent(id)}`,
  menusPath: (): string => `${platformPath}/menus`,
  menuPath: (id: string) => `${platformPath}/menus/${encodeURIComponent(id)}`,
  optionTypesPath: (): string => `${platformPath}/option_types`,
  optionTypePath: (id: string) => `${platformPath}/option_types/${encodeURIComponent(id)}`,
  optionValuesPath: (): string => `${platformPath}/option_values`,
  optionValuePath: (id: string) => `${platformPath}/option_values/${encodeURIComponent(id)}`
}

export default endpoints
