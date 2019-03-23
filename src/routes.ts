
const baseUrl = `api/v2/storefront`;

export const Routes = {
  productsPath: () =>`${baseUrl}/products`,
  productPath: (id: string) => `${baseUrl}/products/${id}`,
  taxonsPath: () => `${baseUrl}/taxons`,
  taxonPath: (id: string) => `${baseUrl}/taxons/${id}`,
  countriesPath: () => `${baseUrl}/countries`,
  countryPath: (iso: string) => `${baseUrl}/countries/${iso}`,
  cartPath: () => `${baseUrl}/cart`,
  cartAddItemPath: () => `cart/add_item`,
  cartRemoveItemPath: (id: string) => `${baseUrl}/cart/remove_line_item/${id}`,
  cartEmptyPath: () => `${baseUrl}/cart/empty`,
  cartSetItemQuantity: () => `${baseUrl}/cart/set_quantity`,
  cartApplyCodePath: () => `${baseUrl}/cart/apply_coupon_code`,
  cartRemoveCodePath: (code: string) => `${baseUrl}/cart/remove_coupon_code/${code}`,
  checkoutPath: () => `${baseUrl}/checkout`,
  checkoutNextPath: () => `${baseUrl}/checkout/next`,
  checkoutAdvancePath: () => `${baseUrl}/checkout/advance`,
  checkoutCompletePath: () => `${baseUrl}/checkout/complete`,
  checkoutAddStoreCreditsPath: () => `${baseUrl}/checkout/add_store_credit`,
  checkoutRemoveStoreCreditsPath: () => `${baseUrl}/checkout/remove_store_credit`,
  checkoutPaymentMethodsPath: () => `${baseUrl}/checkout/payment_methods`,
  checkoutShippingMethodsPath: () => `${baseUrl}/checkout/shipping_rates`,
  oauthTokenPath: () => `spree_oauth/token`,
  accountPath: () => `${baseUrl}/account`,
  accountCreditCardsPath: () => `${baseUrl}/account/credit_cards`,
  accountDefaultCreditCardPath: () => `${baseUrl}/account/credit_cards/default`,
  accountCompletedOrdersPath: () => `${baseUrl}/account/orders`,
  accountCompletedOrderPath: (number: string) => `${baseUrl}/account/orders/${number}`,
  orderStatusPath: (number: string) => `${baseUrl}/order_status/${number}`
}
