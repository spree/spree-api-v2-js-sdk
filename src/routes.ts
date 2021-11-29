export const storefrontPath = `api/v2/storefront`

const endpoints = {
  productsPath: (): string => `${storefrontPath}/products`,
  productPath: (id: string): string => `${storefrontPath}/products/${id}`,
  taxonsPath: (): string => `${storefrontPath}/taxons`,
  taxonPath: (id: string): string => `${storefrontPath}/taxons/${encodeURI(id)}`,
  countriesPath: (): string => `${storefrontPath}/countries`,
  countryPath: (iso: string): string => `${storefrontPath}/countries/${iso}`,
  cartPath: (): string => `${storefrontPath}/cart`,
  cartAddItemPath: (): string => `${storefrontPath}/cart/add_item`,
  cartRemoveItemPath: (id: string): string => `${storefrontPath}/cart/remove_line_item/${id}`,
  cartEmptyPath: (): string => `${storefrontPath}/cart/empty`,
  cartSetItemQuantity: (): string => `${storefrontPath}/cart/set_quantity`,
  cartApplyCodePath: (): string => `${storefrontPath}/cart/apply_coupon_code`,
  cartRemoveCodePath: (code?: string): string => `${storefrontPath}/cart/remove_coupon_code/${code}`,
  cartRemoveAllCoupons: (): string => `${storefrontPath}/cart/remove_coupon_code`,
  /**
   * @deprecated Use {@link cartEstimateShippingRatesPath} instead.
   */
  cartEstimateShippingMethodsPath: (): string => `${storefrontPath}/cart/estimate_shipping_rates`,
  cartEstimateShippingRatesPath: (): string => `${storefrontPath}/cart/estimate_shipping_rates`,
  cartAssociatePath: (): string => `${storefrontPath}/cart/associate`,
  cartChangeCurrencyPath: (): string => `${storefrontPath}/cart/change_currency`,
  checkoutPath: (): string => `${storefrontPath}/checkout`,
  checkoutNextPath: (): string => `${storefrontPath}/checkout/next`,
  checkoutAdvancePath: (): string => `${storefrontPath}/checkout/advance`,
  checkoutCompletePath: (): string => `${storefrontPath}/checkout/complete`,
  checkoutAddStoreCreditsPath: (): string => `${storefrontPath}/checkout/add_store_credit`,
  checkoutRemoveStoreCreditsPath: (): string => `${storefrontPath}/checkout/remove_store_credit`,
  checkoutPaymentMethodsPath: (): string => `${storefrontPath}/checkout/payment_methods`,
  /**
   * @deprecated Use {@link checkoutShippingRatesPath} instead.
   */
  checkoutShippingMethodsPath: (): string => `${storefrontPath}/checkout/shipping_rates`,
  checkoutShippingRatesPath: (): string => `${storefrontPath}/checkout/shipping_rates`,
  checkoutSelectShippingMethodPath: (): string => `${storefrontPath}/checkout/select_shipping_method`,
  checkoutAddPaymentPath: (): string => `${storefrontPath}/checkout/create_payment`,
  oauthTokenPath: (): string => `spree_oauth/token`,
  oauthRevokePath: (): string => `spree_oauth/revoke`,
  accountPath: (): string => `${storefrontPath}/account`,
  accountAddressPath: (id: string): string => `${storefrontPath}/account/addresses/${id}`,
  accountAddressesPath: (): string => `${storefrontPath}/account/addresses`,
  accountAddressRemovePath: (id: string): string => `${storefrontPath}/account/addresses/${id}`,
  accountConfirmPath: (confirmationToken: string): string =>
    `${storefrontPath}/account_confirmations/${confirmationToken}`,
  accountCreditCardsPath: (): string => `${storefrontPath}/account/credit_cards`,
  accountDefaultCreditCardPath: (): string => `${storefrontPath}/account/credit_cards/default`,
  accountCreditCardRemovePath: (id: string): string => `${storefrontPath}/account/credit_cards/${id}`,
  accountCompletedOrdersPath: (): string => `${storefrontPath}/account/orders`,
  accountCompletedOrderPath: (orderNumber: string): string => `${storefrontPath}/account/orders/${orderNumber}`,
  forgotPasswordPath: (): string => `${storefrontPath}/passwords`,
  resetPasswordPath: (resetPasswordToken: string): string => `${storefrontPath}/passwords/${resetPasswordToken}`,
  orderStatusPath: (orderNumber: string): string => `${storefrontPath}/order_status/${orderNumber}`,
  pagesPath: (): string => `${storefrontPath}/cms_pages`,
  pagePath: (id: string): string => `${storefrontPath}/cms_pages/${id}`,
  defaultCountryPath: (): string => `${storefrontPath}/countries/default`,
  digitalAssetsDownloadPath: (token: string): string => `${storefrontPath}/digitals/${token}`,
  menusPath: (): string => `${storefrontPath}/menus`,
  menuPath: (id: string): string => `${storefrontPath}/menus/${id}`,
  wishlistsPath: (): string => `${storefrontPath}/wishlists`,
  wishlistPath: (token: string): string => `${storefrontPath}/wishlists/${token}`,
  defaultWishlistPath: (): string => `${storefrontPath}/wishlists/default`,
  wishlistsAddWishedItemPath: (token: string): string => `${storefrontPath}/wishlists/${token}/add_item`,
  wishlistsUpdateWishedItemQuantityPath: (token: string, id: string): string =>
    `${storefrontPath}/wishlists/${token}/set_item_quantity/${id}`,
  wishlistsRemoveWishedItemPath: (token: string, id: string): string =>
    `${storefrontPath}/wishlists/${token}/remove_item/${id}`
}

export default endpoints
