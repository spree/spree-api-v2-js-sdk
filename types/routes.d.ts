export declare const storefrontPath = "api/v2/storefront";
declare const endpoints: {
    productsPath: () => string;
    productPath: (id: string) => string;
    taxonsPath: () => string;
    taxonPath: (id: string) => string;
    countriesPath: () => string;
    countryPath: (iso: string) => string;
    cartPath: () => string;
    cartAddItemPath: () => string;
    cartRemoveItemPath: (id: string) => string;
    cartEmptyPath: () => string;
    cartSetItemQuantity: () => string;
    cartApplyCodePath: () => string;
    cartRemoveCodePath: (code?: string) => string;
    cartRemoveAllCoupons: () => string;
    /**
     * @deprecated Use {@link cartEstimateShippingRatesPath} instead.
     */
    cartEstimateShippingMethodsPath: () => string;
    cartEstimateShippingRatesPath: () => string;
    cartAssociatePath: () => string;
    cartChangeCurrencyPath: () => string;
    checkoutPath: () => string;
    checkoutNextPath: () => string;
    checkoutAdvancePath: () => string;
    checkoutCompletePath: () => string;
    checkoutAddStoreCreditsPath: () => string;
    checkoutRemoveStoreCreditsPath: () => string;
    checkoutPaymentMethodsPath: () => string;
    /**
     * @deprecated Use {@link checkoutShippingRatesPath} instead.
     */
    checkoutShippingMethodsPath: () => string;
    checkoutShippingRatesPath: () => string;
    checkoutSelectShippingMethodPath: () => string;
    checkoutAddPaymentPath: () => string;
    oauthTokenPath: () => string;
    oauthRevokePath: () => string;
    accountPath: () => string;
    accountAddressPath: (id: string) => string;
    accountAddressesPath: () => string;
    accountAddressRemovePath: (id: string) => string;
    accountConfirmPath: (confirmationToken: string) => string;
    accountCreditCardsPath: () => string;
    accountDefaultCreditCardPath: () => string;
    accountCreditCardRemovePath: (id: string) => string;
    accountCompletedOrdersPath: () => string;
    accountCompletedOrderPath: (orderNumber: string) => string;
    forgotPasswordPath: () => string;
    resetPasswordPath: (resetPasswordToken: string) => string;
    orderStatusPath: (orderNumber: string) => string;
    pagesPath: () => string;
    pagePath: (id: string) => string;
    defaultCountryPath: () => string;
    digitalAssetsDownloadPath: (token: string) => string;
    menusPath: () => string;
    menuPath: (id: string) => string;
};
export default endpoints;
