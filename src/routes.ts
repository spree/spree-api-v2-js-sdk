export const storefrontPath = `api/v2/storefront`

const endpoints = {
  productsPath: (): string => `${storefrontPath}/products`,
  productPath: (id: string): string => `${storefrontPath}/products/${encodeURIComponent(id)}`,
  taxonsPath: (): string => `${storefrontPath}/taxons`,
  taxonPath: (id: string): string => `${storefrontPath}/taxons/${encodeURIComponent(id)}`,
  countriesPath: (): string => `${storefrontPath}/countries`,
  countryPath: (iso: string): string => `${storefrontPath}/countries/${encodeURIComponent(iso)}`,
  cartPath: (): string => `${storefrontPath}/cart`,
  cartAddItemPath: (): string => `${storefrontPath}/cart/add_item`,
  cartRemoveItemPath: (id: string): string => `${storefrontPath}/cart/remove_line_item/${encodeURIComponent(id)}`,
  cartEmptyPath: (): string => `${storefrontPath}/cart/empty`,
  cartSetItemQuantity: (): string => `${storefrontPath}/cart/set_quantity`,
  cartApplyCodePath: (): string => `${storefrontPath}/cart/apply_coupon_code`,
  cartRemoveCodePath: (code?: string): string =>
    `${storefrontPath}/cart/remove_coupon_code/${encodeURIComponent(code)}`,
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
  checkoutCreateStripeSessionPath: (): string => `${storefrontPath}/checkout/create_stripe_session`,
  oauthTokenPath: (): string => `spree_oauth/token`,
  oauthRevokePath: (): string => `spree_oauth/revoke`,
  accountPath: (): string => `${storefrontPath}/account`,
  accountAddressPath: (id: string): string => `${storefrontPath}/account/addresses/${encodeURIComponent(id)}`,
  accountAddressesPath: (): string => `${storefrontPath}/account/addresses`,
  accountAddressRemovePath: (id: string): string => `${storefrontPath}/account/addresses/${encodeURIComponent(id)}`,
  accountConfirmPath: (confirmationToken: string): string =>
    `${storefrontPath}/account_confirmations/${encodeURIComponent(confirmationToken)}`,
  accountCreditCardsPath: (): string => `${storefrontPath}/account/credit_cards`,
  accountDefaultCreditCardPath: (): string => `${storefrontPath}/account/credit_cards/default`,
  accountCreditCardRemovePath: (id: string): string =>
    `${storefrontPath}/account/credit_cards/${encodeURIComponent(id)}`,
  accountCompletedOrdersPath: (): string => `${storefrontPath}/account/orders`,
  accountCompletedOrderPath: (orderNumber: string): string =>
    `${storefrontPath}/account/orders/${encodeURIComponent(orderNumber)}`,
  forgotPasswordPath: (): string => `${storefrontPath}/passwords`,
  resetPasswordPath: (resetPasswordToken: string): string =>
    `${storefrontPath}/passwords/${encodeURIComponent(resetPasswordToken)}`,
  orderStatusPath: (orderNumber: string): string => `${storefrontPath}/order_status/${encodeURIComponent(orderNumber)}`,
  pagesPath: (): string => `${storefrontPath}/cms_pages`,
  pagePath: (id: string): string => `${storefrontPath}/cms_pages/${encodeURIComponent(id)}`,
  defaultCountryPath: (): string => `${storefrontPath}/countries/default`,
  digitalAssetsDownloadPath: (token: string): string => `${storefrontPath}/digitals/${encodeURIComponent(token)}`,
  menusPath: (): string => `${storefrontPath}/menus`,
  menuPath: (id: string): string => `${storefrontPath}/menus/${encodeURIComponent(id)}`,
  wishlistsPath: (): string => `${storefrontPath}/wishlists`,
  wishlistPath: (token: string): string => `${storefrontPath}/wishlists/${encodeURIComponent(token)}`,
  defaultWishlistPath: (): string => `${storefrontPath}/wishlists/default`,
  wishlistsAddWishedItemPath: (token: string): string =>
    `${storefrontPath}/wishlists/${encodeURIComponent(token)}/add_item`,
  wishlistsUpdateWishedItemQuantityPath: (token: string, id: string): string =>
    `${storefrontPath}/wishlists/${encodeURIComponent(token)}/set_item_quantity/${encodeURIComponent(id)}`,
  wishlistsRemoveWishedItemPath: (token: string, id: string): string =>
    `${storefrontPath}/wishlists/${encodeURIComponent(token)}/remove_item/${encodeURIComponent(id)}`
}

export default endpoints
