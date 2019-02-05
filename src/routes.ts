export const Routes = {
  productsPath: () =>`products`,
  productPath: (id: string) => `products/${id}`,
  taxonsPath: () => 'taxons',
  taxonPath: (id: string) => `taxon/${id}`,
  countriesPath: () => 'countries',
  countryPath: (iso: string) => `countries/${iso}`,
  cartPath: () => `cart`,
  cartAddItemPath: () => 'cart/add_item',
  cartRemoveItemPath: (id: string) => `cart/remove_line_item/${id}`,
  cartEmptyPath: () => 'cart/empty',
  cartSetItemQuantity: () => 'cart/set_quantity',
  cartApplyCodePath: () => 'cart/apply_coupon_code',
  cartRemoveCodePath: (code: string) => `cart/remove_coupon_code/${code}`
}
