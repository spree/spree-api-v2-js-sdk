export const Routes = {
  productsPath: () =>`products`,
  productPath: (id: string) => `products/${id}`,
  taxonsPath: () => 'taxons',
  taxonPath: (id: string) => `taxon/${id}`,
  countriesPath: () => 'countries',
  countryPath: (iso: string) => `countries/${iso}`
}
