# Spree Commerce Storefront API v2 JavaScript / TypeScript SDK

Node module to easily integrate your JavaScript or TypeScript application with [Spree API](https://api.spreecommerce.org). You can create an entirely custom Storefront in JS/TS with this package including one page checkout, Single Page Apps, PWAs and so on.

Developed and maintained by:

[![Vendo](https://assets-global.website-files.com/6230c485f2c32ea1b0daa438/623372f40a8c54ca9aea34e8_vendo%202.svg)][vendo]

> All-in-one platform for all your Marketplace and B2B eCommerce needs. [Start your 30-day free trial](https://e98esoirr8c.typeform.com/contactvendo?typeform-source=spree_sdk_github)

Сontents:

- [Quick start](#quick-start)
- [Checkout Flow](#checkout-flow)
- [Response schema](#response-schema)
  - [Success schema](#success-schema)
  - [Error schema](#error-schema)
- [Tokens](#tokens)
  - [Order token](#order-token)
  - [Bearer token](#bearer-token)
- [Endpoints](#endpoints)
  - [OAuth Authentication](#oauth-authentication)
    - [getToken](#getToken)
    - [refreshToken](#refreshToken)
    - [revokeToken](#revokeToken)
  - [Account](#account)
    - [create](#create)
    - [forgotPassword](#forgotPassword)
    - [resetPassword](#resetPassword)
    - [update](#update)
    - [accountInfo](#accountInfo)
    - [creditCardsList](#creditCardsList)
    - [defaultCreditCard](#defaultCreditCard)
    - [removeCreditCard](#removeCreditCard)
    - [completedOrdersList](#completedOrdersList)
    - [completedOrder](#completedOrder)
    - [addressesList](#addressesList)
    - [showAddress](#showAddress)
    - [createAddress](#createaddress)
    - [updateAddress](#updateaddress)
    - [removeAddress](#removeaddress)
  - [Order](#order)
    - [status](#status)
  - [Cart](#cart)
    - [create](#create-1)
    - [remove](#remove)
    - [show](#show)
    - [addItem](#addItem)
    - [setQuantity](#setQuantity)
    - [removeItem](#removeItem)
    - [emptyCart](#emptyCart)
    - [applyCouponCode](#applyCouponCode)
    - [removeCouponCode](#removeCouponCode)
    - [removeAllCoupons](#removeAllCoupons)
    - [estimateShippingRates](#estimateShippingRates)
    - [associateGuestCart](#associateGuestCart)
    - [changeCurrency](#changeCurrency)
  - [Checkout](#checkout)
    - [orderUpdate](#orderUpdate)
    - [orderNext](#orderNext)
    - [advance](#advance)
    - [complete](#complete)
    - [addStoreCredits](#addStoreCredits)
    - [removeStoreCredits](#removeStoreCredits)
    - [paymentMethods](#paymentMethods)
    - [shippingRates](#shippingRates)
    - [selectShippingMethod](#selectShippingMethod)
    - [addPayment](#addPayment)
  - [Products](#products)
    - [list](#list)
    - [show](#show-1)
  - [Taxons](#taxons)
    - [list](#list-1)
    - [show](#show-2)
  - [Vendors](#vendors)
    - [list](#list-2)
    - [show](#show-3)
  - [Wishlists](#wishlists)
    - [list](#list-3)
    - [show](#show-4)
    - [default](#default)
    - [create](#create-2)
    - [update](#update-1)
    - [remove](#remove-1)
    - [addWishedItem](#addWishedItem)
    - [updateWishedItem](#updateWishedItem)
  - [Pages](#pages)
    - [list](#list-4)
    - [show](#show-5)
  - [Countries](#countries)
    - [list](#list-5)
    - [show](#show-6)
    - [default](#default-1)
  - [Digital Assets](#digital-assets)
    - [download](#download)
  - [Menus](#menus)
    - [list](#list-6)
    - [show](#show-7)
  - [Helpers](#helpers)
  - [Alternative setups](#alternative-setups)
  - [Switching the fetcher](#switching-the-fetcher)
  - [About Spark Solutions](#about-spark-solutions)

## Quick start

Install the NPM package:

```
npm install --save @spree/storefront-api-v2-sdk
```

Install the [Axios][8] HTTP client:

```
npm install --save axios
```

Create a client and use it to call Spree:

```js
const createAxiosFetcher = require('@spree/storefront-api-v2-sdk/dist/server/createAxiosFetcher').default
const { makeClient } = require('@spree/storefront-api-v2-sdk')

const client = makeClient({
  host: 'http://localhost:3000',
  createFetcher: createAxiosFetcher
})

client.products
  .list({
    include: 'default_variant',
    page: 1
  })
  .then((spreeResponse) => {
    console.log(spreeResponse.success())
  })
```

_Spree SDK can also be imported using `import` and `<script>` tags in the browser. Check the [Alternative setups](#alternative-setups) section for examples._

_For details about HTTP clients, read the <a href="#switching-the-fetcher">Switching the fetcher</a> section._

## Checkout Flow

```ts
const cartCreateResponse = await client.cart.create()

const orderToken = cartCreateResponse.success().data.attributes.token

await client.cart.addItem({
  order_token: orderToken,
  variant_id: '1'
})

// Step one - save email, billing and shipping addresses
await client.checkout.orderUpdate({
  order_token: orderToken,
  order: {
    email,
    bill_address_attributes: {...},
    ship_address_attributes: {...}
  }
})

await client.checkout.orderNext({ order_token: orderToken })

// Step two - pick a shipping method
const shipping = (await client.checkout.shippingRates({ order_token: orderToken })).success()

await client.checkout.orderUpdate({
  order_token: orderToken,
  order: {
    shipments_attributes: [{
      id: shipping.data[0].id,
      selected_shipping_rate_id: shipping.data[0].relationships.shipping_rates.data[0].id
    }]
  }
})

await client.checkout.orderNext({ order_token: orderToken })

// Step three - pick a payment method
const payment = (await client.checkout.paymentMethods({ order_token: orderToken })).success()

await client.checkout.addPayment({
  order_token: orderToken,
  payment_method_id: payment.data[0].id,
  source_attributes: {
    gateway_payment_profile_id: "card_1JqvNB2eZvKYlo2C5OlqLV7S",
    cc_type: "visa",
    last_digits: "1111",
    month: "10",
    year: "2026",
    name: "John Snow"
  }
})

await client.checkout.orderNext({ order_token: orderToken })

// Place the order
await client.checkout.complete({ order_token: orderToken })
```

## Response schema

### Success schema

`Client` methods return a result object. When a request succeeds, the data received from Spree is retrievable using its `success()` method and provided in the [JSON:API][4] format. `isSuccess()` tells if a request succeeded.

### Error schema

The SDK avoids throwing JavaScript [`Error`s][1]. Instead, any error is included in a result object.

To determine whether a call was successful, use `isSuccess()` or `isFail()` methods on the result. Details of a failed call can be retrieved using `fail()`. The method returns a `SpreeSDKError` instance, which is the primary type for all errors returned by the SDK and extends the native JavaScript `Error` type.

Available `SpreeSDKError` subtypes:

| Class Name              | Purpose                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `MisconfigurationError` | Signifies the SDK's `Client` was created with improper options. Make sure the values of `host` and other options (if any) provided to `Client` have the correct format.                                                                                                                                                                    |
| `NoResponseError`       | Spree store could not be reached. Ensure it's running and available under the `host` address provided to the `Client` instance.                                                                                                                                                                                                            |
| `SpreeError`            | Spree responded with an error. To debug the issue, check the error's `serverResponse` field. It contains details about the response from Spree, such as the HTTP status code and headers.                                                                                                                                                  |
| `BasicSpreeError`       | Extends `SpreeError` with a `summary` field provided by Spree and containing a summary of the issue.                                                                                                                                                                                                                                       |
| `ExpandedSpreeError`    | Extends `BasicSpreeError` with a `errors` field. `errors` contains a detailed explanation of the issue, ex. all the validation errors when trying to add shipping details to a Spree order. The `getErrors` method can be used to retrieve a concrete value inside `errors`, ex. `expSpreeError.getErrors(['bill_address', 'firstname'])`. |

The specific type of error returned by `fail()` can be determined using [`instanceof`][3], ex. `if(response.fail() instanceof BasicSpreeError){...}`.

## Tokens

Most endpoints require a token for authentication. It can be an Order Token, Bearer Token or a Confirmation Token.

### Order token

Identifies a guest user's cart and order.

```ts
const response = await client.cart.create()

const orderToken: string = response.success().data.attributes.token
```

### Bearer token

Identifies a logged in user.

```ts
const response = await client.authentication.getToken({
  username: 'spree@example.com',
  password: 'spree123'
})

const bearerToken: string = response.success().access_token
```

### Confirmation token

Identifies a user for a single operation. For example, to reset their account's password. Confirmation Tokens are single-use and may have an expiration date.

## Endpoints

Spree Storefront API SDK contains each endpoint according to [Spree Guides][12]

## [OAuth Authentication][13]

### `getToken`

Creates a [Bearer token](#bearer-token) required to authorize OAuth API calls.

**Parameters schema:**

```ts
{
  username: string
  password: string
}
```

**Success response schema:**

```ts
{
  access_token: string
  token_type: string = 'Bearer'
  expires_in: number
  refresh_token: string
  created_at: number
}
```

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const token = await client.authentication.getToken({
  username: 'spree@example.com',
  password: 'spree123'
})
```

### `refreshToken`

Refreshes the [Bearer token](#bearer-token) required to authorize OAuth API calls.

**Parameters schema:**

```ts
{
  refresh_token: string
}
```

**Success response schema:**

```ts
{
  access_token: string
  token_type: string = 'Bearer'
  expires_in: number
  refresh_token: string
  created_at: number
}
```

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const token = await client.authentication.refreshToken({
  refresh_token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
})
```

### `revokeToken`

Method `revokeToken` revokes a [Bearer token (access token)](#bearer-token) or a refresh token.

**Parameters schema:**

```ts
{
  token: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.authentication.revokeToken({
  token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
})
```

## Account

### [`create`][14]

Creates new account and returns its attributes.

**Parameters schema:**

```ts
{
  user: {
    email: string
    password: string
    password_confirmation: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.create({
  user: {
    email: 'john@snow.org',
    password: 'spree123',
    password_confirmation: 'spree123'
  }
})
```

### [`confirm`][15]

Confirms new account e-mail and returns account registration status.

**Parameters schema:**

```ts
{
  confirmation_token: string
}
```

**Success response schema:**

```ts
{
  data: {
    state: string
  }
}
```

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.confirm({ confirmation_token: '2xssfC9Hzf8DJXyRZGmB' })
```

### [`forgotPassword`][15]

Sends an account recovery link to the provided email address. The link allows resetting the password for the account.

**Parameters schema:**

```ts
{
  user: {
    email: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.forgotPassword({
  user: {
    email: 'spree@example.com'
  }
})
```

### [`resetPassword`][15]

Changes the password associated with the account using an account recovery token.

**Parameters schema:**

```ts
{
  reset_password_token: string
  user: {
    password: string
    password_confirmation: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.resetPassword({
  reset_password_token: '7381273269536713689562374856',
  user: {
    password: '123!@#asdASD',
    password_confirmation: '123!@#asdASD'
  }
})
```

### [`update`][16]

Updates account and returns its attributes.

**Parameters schema:**

```ts
{
  user: {
    email: string
    password: string
    password_confirmation: string
  }
}
```

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.update({
  bearer_token: '7381273269536713689562374856',
  user: {
    email: 'john@snow.org',
    password: 'new_spree123',
    password_confirmation: 'new_spree123'
  }
})
```

### [`accountInfo`][17]

Returns current user information.

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.accountInfo({ bearer_token: '7381273269536713689562374856' })
```

### [`creditCardsList`][18]

Returns a list of Credit Cards for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.creditCardsList({ bearer_token: '7381273269536713689562374856' })
```

### [`defaultCreditCard`][19]

Return the User's default Credit Card.

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.defaultCreditCard({ bearer_token: '7381273269536713689562374856' })
```

### [`removeCreditCard`][20]

Remove a User's Credit Card.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  id: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.removeCreditCard({
  bearer_token: '7381273269536713689562374856',
  id: '14'
})
```

### [`completedOrdersList`][21]

Returns Orders placed by the User. Only completed ones.

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.completedOrdersList({
  bearer_token: '7381273269536713689562374856'
})
```

### [`completedOrder`][22]

Return the User's completed Order.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  orderNumber: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.completedOrder({
  bearer_token: '7381273269536713689562374856',
  order_number: 'R653163382'
})
```

### [`addressesList`][23]

Returns a list of Addresses for the signed in User

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.addressesList({
  bearer_token: '7381273269536713689562374856'
})
```

### `showAddress`

Returns a single address for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  id: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.showAddress({
  bearer_token: '7381273269536713689562374856',
  id: '1'
})
```

### [`createAddress`][24]

Create a new Address for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  address: {
    firstname: string
    lastname: string
    address1: string
    address2?: string
    city: string
    phone?: string
    zipcode: string
    state_name: string // State Abbreviations
    country_iso: string // Country ISO (2-chars) or ISO3 (3-chars)
    company?: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.createAddress({
  bearer_token: '7381273269536713689562374856',
  address: {
    firstname: 'John',
    lastname: 'Snow',
    address1: '7735 Old Georgetown Road',
    address2: '2nd Floor',
    city: 'Bethesda',
    phone: '3014445002',
    zipcode: '20814',
    state_name: 'MD',
    country_iso: 'US',
    company: 'Spark'
  }
})
```

### [`updateAddress`][25]

Update selected Address for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  id: string
  address: {
    firstname: string
    lastname: string
    address1: string
    address2?: string
    city: string
    phone?: string
    zipcode: string
    state_name: string // State Abbreviations
    country_iso: string // Country ISO (2-chars) or ISO3 (3-chars)
    company?: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.updateAddress({
  bearer_token: '7381273269536713689562374856',
  id: '1',
  address: {
    firstname: 'John',
    lastname: 'Snow',
    address1: '7735 Old Georgetown Road',
    address2: '2nd Floor',
    city: 'Bethesda',
    phone: '3014445002',
    zipcode: '20814',
    state_name: 'MD',
    country_iso: 'US',
    company: 'Spark'
  }
})
```

### [`removeAddress`][26]

Removes selected Address for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  id: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.removeAddress({
  bearer_token: '7381273269536713689562374856',
  id: '1'
})
```

## Order

### [`status`][27]

Returns a placed Order.

**Required token:** [Order token](#order-token)

**Parameters schema:**

```ts
{
  order_number: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.order.status({
  order_token: '7381273269536713689562374856',
  order_number: 'R653163382'
})
```

## Cart

### [`create`][28]

Creates a new Cart and returns its attributes.

**Required token:** [Bearer token](#bearer-token) if logged in user

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.create({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.cart.create()
```

### [`show`][29]

Returns contents of the cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.show({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.cart.show({
  order_token: '7381273269536713689562374856'
})
```

### [`addItem`][30]

Adds a Product Variant to the Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  variant_id: string
  quantity: number
  options?: {
    [key: string]: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.addItem({
  bearer_token: '7381273269536713689562374856',
  variant_id: '1',
  quantity: 1
})

// or guest user
const response = await client.cart.addItem({
  order_token: '7381273269536713689562374856',
  variant_id: '1',
  quantity: 1
})
```

### [`setQuantity`][31]

Sets the quantity of a given line item. It has to be a positive integer greater than 0.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  line_item_id: string
  quantity: number
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.setQuantity({
  bearer_token: '7381273269536713689562374856',
  line_item_id: '9',
  quantity: 100
})

// or guest user
const response = await client.cart.setQuantity({
  order_token: '7381273269536713689562374856',
  line_item_id: '9',
  quantity: 100
})
```

### [`removeItem`][32]

Removes Line Item from Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  id: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.removeItem({
  bearer_token: '7381273269536713689562374856',
  id: '1'
})

// or guest user
const response = await client.cart.removeItem({
  order_token: '7381273269536713689562374856',
  id: '1'
})
```

### [`emptyCart`][33]

Empties the Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.emptyCart({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.cart.emptyCart({
  order_token: '7381273269536713689562374856'
})
```

### [`remove`][34]

Removes the Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.remove({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.cart.remove({
  order_token: '7381273269536713689562374856'
})
```

### [`applyCouponCode`][35]

Applies a coupon code to the Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  coupon_code: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.applyCouponCode({
  bearer_token: '7381273269536713689562374856',
  coupon_code: 'promo_test'
})

// or guest user
const response = await client.cart.applyCouponCode({
  order_token: '7381273269536713689562374856',
  coupon_code: 'promo_test'
})
```

### [`removeCouponCode`][36]

Removes a coupon code from the Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  code?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failed response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.removeCouponCode({
  bearer_token: '7381273269536713689562374856',
  code: 'promo_test'
})

// or guest user
const response = await client.cart.removeCouponCode({
  order_token: '7381273269536713689562374856',
  code: 'promo_test'
})
```

### [`removeAllCoupons`][37]

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failed response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.removeAllCoupons({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.cart.removeAllCoupons({
  order_token: '7381273269536713689562374856'
})
```

### [`estimateShippingRates`][38]

Returns a list of Estimated Shipping Rates for Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  country_iso: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.estimateShippingRates({
  bearer_token: '7381273269536713689562374856',
  country_iso: 'USA'
})

// or guest user
const response = await client.cart.estimateShippingRates({
  order_token: '7381273269536713689562374856',
  country_iso: 'USA'
})
```

### [`associateGuestCart`][39]

Associates a guest cart with the currently signed in user.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  guest_order_token: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.associateGuestCart({
  bearer_token: '7381273269536713689562374856',
  guest_order_token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
})
```

### [`changeCurrency`][40]

Changes the Cart's currency.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  new_currency: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.changeCurrency({
  bearer_token: '7381273269536713689562374856',
  new_currency: 'CAD'
})
```

## Checkout

### [`orderUpdate`][41]

Updates the Checkout. You can run multiple Checkout updates with different data types.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  order: {
    email?: string
    special_instructions?: string
    bill_address_attributes?: {
      firstname: string
      lastname: string
      address1: string
      city: string
      phone: string
      zipcode: string
      state_name: string
      country_iso: string
    }
    ship_address_attributes?: {
      firstname: string
      lastname: string
      address1: string
      city: string
      phone: string
      zipcode: string
      state_name: string
      country_iso: string
    }
    shipments_attributes?: [
      {
        selected_shipping_rate_id: number
        id: number
      }
    ]
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.orderUpdate({
  bearer_token: '7381273269536713689562374856',
  order: {
    email: 'john@snow.org'
  }
})

// or guest user
const response = await client.checkout.orderUpdate({
  order_token: '7381273269536713689562374856',
  order: {
    email: 'john@snow.org'
  }
})
```

### [`orderNext`][42]

Goes to the next Checkout step.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.orderNext({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.checkout.orderNext({
  order_token: '7381273269536713689562374856'
})
```

### [`advance`][43]

Advances Checkout to the furthest Checkout step validation allows, until the Complete step.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.advance({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.checkout.advance({
  order_token: '7381273269536713689562374856'
})
```

### [`complete`][44]

Completes the Checkout.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.complete({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.checkout.complete({
  order_token: '7381273269536713689562374856'
})
```

### [`addStoreCredits`][45]

Adds Store Credit payments if a user has any.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  amount: number
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.addStoreCredits({
  bearer_token: '7381273269536713689562374856',
  amount: 100
})

// or guest user
const response = await client.checkout.addStoreCredits({
  order_token: '7381273269536713689562374856',
  amount: 100
})
```

### [`removeStoreCredits`][46]

Remove Store Credit payments if any applied.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.removeStoreCredits({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.checkout.removeStoreCredits({
  order_token: '7381273269536713689562374856'
})
```

### [`paymentMethods`][47]

Returns a list of available Payment Methods.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.paymentMethods({
  bearer_token: '7381273269536713689562374856'
})

// or guest user
const response = await client.checkout.paymentMethods({
  order_token: '7381273269536713689562374856'
})
```

### [`shippingRates`][48]

Returns a list of available Shipping Rates for Checkout. Shipping Rates are grouped against Shipments. Each checkout cna have multiple Shipments eg. some products are available in stock and will be send out instantly and some needs to be backordered.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.shippingRates({
  bearer_token: '7381273269536713689562374856',
  include: 'shipping_rates,stock_location'
})

// or guest user
const response = await client.checkout.shippingRates({
  order_token: '7381273269536713689562374856',
  include: 'shipping_rates,stock_location'
})
```

### [`selectShippingMethod`][49]

Selects a Shipping Method for Shipment(s).

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  shipping_method_id: string
  shipment_id?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.checkout.selectShippingMethod({
  bearer_token: '7381273269536713689562374856',
  shipping_method_id: '42'
})
```

### [`addPayment`][50]

Creates new Payment for the current checkout.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  payment_method_id: string
  source_id?: string
  amount?: number
  source_attributes?: {
    gateway_payment_profile_id: string
    cc_type?: string
    last_digits?: string
    month?: string
    year?: string
    name: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user

// Create new credit card
const response = await client.checkout.addPayment({
  bearer_token: '7381273269536713689562374856',
  payment_method_id: '1',
  source_attributes: {
    gateway_payment_profile_id: 'card_1JqvNB2eZvKYlo2C5OlqLV7S',
    cc_type: 'visa',
    last_digits: '1111',
    month: '10',
    year: '2026',
    name: 'John Snow'
  }
})

// Use existing credit card
const response = await client.checkout.addPayment({
  bearer_token: '7381273269536713689562374856',
  payment_method_id: '1',
  source_id: '1'
})

// or guest user

// Create new credit card
const response = await client.checkout.addPayment({
  order_token: '7381273269536713689562374856',
  payment_method_id: '1',
  source_attributes: {
    gateway_payment_profile_id: 'card_1JqvNB2eZvKYlo2C5OlqLV7S',
    cc_type: 'visa',
    last_digits: '1111',
    month: '10',
    year: '2026',
    name: 'John Snow'
  }
})
```

## Products

Returns a list of Products.

### [`list`][51]

**Required token:** [Bearer token](#bearer-token) if logged in user

**Parameters schema:**

```ts
{
  image_transformation?: {
    size?: string
    quality?: number
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.products.list({
  page: 1,
  per_page: 10
})
```

### [`show`][52]

**Required token:** [Bearer token](#bearer-token) if logged in user

**Parameters schema:**

```ts
{
  id: string
  image_transformation?: {
    size?: string
    quality?: number
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.products.show({
  id: '123',
  include: 'variants'
})
```

## Taxons

### [`list`][53]

Returns a list of Taxons.

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.taxons.list()
```

### [`show`][54]

Returns a single Taxon.

**Parameters schema:**

```ts
{
  id: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const products = await client.taxons.show({ id: '1' })
```

## Vendors

The multi-vendor marketplace feature is only available via [Vendo][vendo]

### `list`

Returns a list of Vendors in a Spree marketplace.

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const vendors = await client.vendors.list({
  include: 'products'
})
```

### `show`

Returns a single Vendor in a Spree marketplace.

**Parameters schema:**

```ts
{
  id: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const vendor = await client.vendors.show({ id: '123' })
```

## Wishlists

### [`list`][55]

Returns a list of Wishlists.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  is_variant_included?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.wishlists.list({
  bearer_token: '7381273269536713689562374856',
  is_variant_included: '456'
})
```

### [`show`][56]

Returns a single Wishlist.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  wishlist_token: string
  is_variant_included?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.wishlists.show({
  bearer_token: '7381273269536713689562374856',
  wishlist_token: '123',
  is_variant_included: '456'
})
```

### [`default`][57]

Returns the default Wishlist for the logged in user. It will be created, if the user does not have a default Wishlist for the current store.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  is_variant_included?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.wishlists.default({
  bearer_token: '7381273269536713689562374856',
  is_variant_included: '456'
})
```

### [`create`][58]

Creates a new Wishlist for the logged in user.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  name: string
  is_private?: boolean
  is_default?: boolean
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.wishlists.create({
  bearer_token: '7381273269536713689562374856',
  name: 'My wishlist'
})
```

### [`update`][59]

Updates an existing Wishlist.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  wishlist_token: string
  name: string
  is_private?: boolean
  is_default?: boolean
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.wishlists.update({
  bearer_token: '7381273269536713689562374856',
  wishlist_token: '123',
  name: 'My updated wishlist',
  is_private: true
})
```

### [`remove`][60]

Removes a Wishlist.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  wishlist_token: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.wishlists.remove({
  bearer_token: '7381273269536713689562374856',
  wishlist_token: '123'
})
```

### [`addWishedItem`][61]

Adds a new Wished Item to a Wishlist for the logged in user.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  wishlist_token: string,
  variant_id: string
  quantity: number
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.wishlists.addWishedItem({
  bearer_token: '7381273269536713689562374856',
  wishlist_token: 'WyZxWS2w3BdDRHcGgtN1LKiY',
  variant_id: '1',
  quantity: 10
})
```

### [`updateWishedItem`][62]

Updates a Wished Item for the logged in user.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  wishlist_token: string,
  id: string
  quantity: number
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.wishlists.updateWishedItem({
  bearer_token: '7381273269536713689562374856',
  wishlist_token: 'WyZxWS2w3BdDRHcGgtN1LKiY',
  id: '2',
  quantity: 13
})
```

### [`removeWishedItem`][63]

Removes a Wished Item for the logged in user.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
{
  wishlist_token: string,
  id: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.wishlists.removeWishedItem({
  bearer_token: '7381273269536713689562374856',
  wishlist_token: 'WyZxWS2w3BdDRHcGgtN1LKiY',
  id: '2'
})
```

## Pages

### [`list`][64]

Returns a list of all CMS Pages available in the current store.

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const pages = await client.pages.list()
```

### [`show`][65]

Returns a single CMS Page. You can use either a CMS Page slug or ID.

**Parameters schema:**

```ts
{
  id: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const page = await client.pages.show({
  id: 'about-us'
})
```

## Countries

### [`list`][66]

Returns a list of all countries.

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const countries = await client.countries.list()
```

### [`show`][67]

Returns the details of a specific country.

**Parameters schema:**

```ts
{
  iso: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const country = await client.countries.show({
  iso: 'USA'
})
```

### [`default`][68]

Returns the default country for the current store. By default this will be the US.

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const countries = await client.countries.default()
```

## Digital Assets

### [`download`][69]

Returns a stream for downloading a purchased digital product.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
{
  asset_token: string
}
```

**Success response schema:** [ReadableStream][11]

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Many NodeJS servers allow piping a stream as the response (`digitalAssetStream.pipe(serverResponse);`).

// The below example assumes a logged in user using SpreeSDK in the browser and downloading an image asset.

// A digital token can be retrieved from a digital link associated to a line item in a completed order.
const digitalToken = '1YjXK36ZRj2w4nxtMkJutTGX'

const response = await client.digitalAssets.download({
  bearer_token: '7381273269536713689562374856',
  asset_token: digitalToken
})

const digitalAssetStream = response.success()

// Append an <img> tag to the page to show the asset on the page.
const image = new Image()

document.body.appendChild(image)

// Convert a stream to a Blob for easier processing.
const digitalAssetBlob = await new Response(digitalAssetStream).blob()

image.src = URL.createObjectURL(digitalAssetBlob)
```

## Menus

### [`list`][70]

Returns a list of Menus.

**Parameters schema:**

```ts
{
  locale?: string
  filter?: {
    location?: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.menus.list({
  locale: 'fr',
  filter: {
    location: 'header'
  }
})
```

### [`show`][71]

Returns a single Menu.

**Parameters schema:**

```ts
{
  id: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.menus.show({
  id: '2'
})
```

## Helpers

The SDK comes with a number of helper functions making consuming responses from the Spree API easier.

`extractSuccess()` unwraps Spree responses and throws errors.

**Example:**

```ts
import { result } from '@spree/storefront-api-v2-sdk'

try {
  const cartResponse = await result.extractSuccess(client.cart.create())

  console.log('Created a new cart having token: ', cartResponse.data.attributes.token)
} catch (error) {
  console.error('Creating a cart failed. Reason: ', error)
}
```

`findRelationshipDocuments()` finds related records included in a response and `findSingleRelationshipDocument()` finds a single included record.

**Example:**

```ts
import { jsonApi } from '@spree/storefront-api-v2-sdk'

const productResult = await client.products.show({
  id: '1',
  include: 'primary_variant,variants,images'
})

const productResponse = productResult.success()

const primaryVariant = jsonApi.findSingleRelationshipDocument(productResponse, productResponse.data, 'primary_variant')

const variants = jsonApi.findRelationshipDocuments(productResponse, productResponse.data, 'variants')

const images = jsonApi.findRelationshipDocuments(productResponse, productResponse.data, 'images')
```

## Alternative setups

### TypeScript and `import`

In TypeScript, you can import Spree SDK as follows:

```js
// Set `"esModuleInterop": true` in tsconfig.json

import createAxiosFetcher from '@spree/storefront-api-v2-sdk/dist/server/createAxiosFetcher'
import { makeClient } from '@spree/storefront-api-v2-sdk'
```

TypeScript definitions are included in the module and should be automatically used by any editor that supports them.

### CDN-hosted Spree SDK

The SDK is hosted by the [UNPKG][7] CDN. [Follow this link to download version 5.0.0][5] and [this link to download the newest version][6]. Include the SDK on a website like so:

```html
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@5.0.0/dist/client/index.js"></script>
<script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@5.0.0/dist/client/createAxiosFetcher.js"></script>

<script>
  const client = SpreeSDK.makeClient({
    host: 'http://localhost:3000',
    createFetcher: SpreeSDK.createAxiosFetcher.default
  })
  // ...
</script>
```

## Switching the fetcher

Spree SDK does not come bundled with a HTTP client. A HTTP client may have to be installed before using the library. Out of the box, Spree SDK supports using [Axios][8] and [fetch][9] HTTP clients to communicate with Spree.

**Option A - RECOMMENDED: Spree SDK in NodeJS using Axios**

To use Spree SDK with Axios in NodeJS, install Axios using NPM:

```
npm install axios
```

Set the fetcher to axios when creating the Spree SDK client:

```js
const createAxiosFetcher = require('@spree/storefront-api-v2-sdk/dist/server/createAxiosFetcher').default
const { makeClient } = require('@spree/storefront-api-v2-sdk')

const client = makeClient({
  host: 'http://localhost:3000',
  createFetcher: createAxiosFetcher
})
```

**Option B - Spree SDK in the browser using Axios**

To use Spree SDK with Axios in the browser, include axios as a `<script>` tag before using the SDK:

```html
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@5.0.0/dist/client/index.js"></script>
<script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@5.0.0/dist/client/createAxiosFetcher.js"></script>

<script>
  const client = SpreeSDK.makeClient({
    host: 'http://localhost:3000',
    createFetcher: SpreeSDK.createAxiosFetcher.default
  })
</script>
```

Again, Spree SDK will automatically detect that Axios is available and use it to make requests to Spree.

**Option C - Spree SDK in NodeJS using fetch**

Another supported HTTP client is [fetch][9]. It can be setup in NodeJS as follows:

```
npm install node-fetch
```

Set the fetcher to fetch:

```js
const createFetchFetcher = require('@spree/storefront-api-v2-sdk/dist/server/createFetchFetcher').default
const { makeClient } = require('@spree/storefront-api-v2-sdk')

const client = makeClient({
  host: 'http://localhost:3000',
  createFetcher: createFetchFetcher
})
```

**Option D - Spree SDK in the browser using fetch**

Modern web browsers include fetch natively. To use Spree SDK with native fetch, it's enough to set `fetcherType` to `'fetch'` when creating the Spree SDK Client:

```html
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@5.0.0/dist/client/index.js"></script>
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@5.0.0/dist/client/createFetchFetcher.js"></script>

<script>
  const client = SpreeSDK.makeClient({
    host: 'http://localhost:3000',
    createFetcher: SpreeSDK.createFetchFetcher.default
  })
</script>
```

**Option E - ADVANCED: Supply a custom HTTP client.**

To have full control over requests and responses, a custom fetcher can be supplied during the creation of the Spree SDK client:

```js
makeClient({ createFetcher: ... })
```

If you want to use a fetch-compatible interface, use the `createCustomizedFetchFetcher` function.

## About Vendo

<a href="https://getvendo.com?utm_source=spree_sdk_github">
  <img src="https://uploads-ssl.webflow.com/6230c485f2c32ea1b0daa438/62386b96518cdcbe111f134a_OG%20Image%20(2).png" style="max-height:400px" />
</a>

> [Vendo][vendo] is a great fit for marketplaces of all sizes - either with own fulfillment and multiple warehouses or in a dropshipping model. Vendo **automates everything** from **vendor onboarding**, accepting buyer **payments in over 135 currencies**, to supplier **payouts in 50 countries**. 

> Vendo ensures excellent buyer experience with smooth product discovery and search, a multitude of payment methods and optimal shipping cost calculation. Vendo keeps suppliers happy with easy onboarding, automated products sync using their preferred method and easy payouts.

> [Start your 30-day free trial](https://e98esoirr8c.typeform.com/contactvendo?typeform-source=spree_sdk_github)

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[4]: https://jsonapi.org/format/
[5]: https://unpkg.com/@spree/storefront-api-v2-sdk@5.0.0/dist/client/index.js
[6]: https://unpkg.com/@spree/storefront-api-v2-sdk/dist/client/index.js
[7]: https://unpkg.com/
[vendo]: http://getvendo.com?utm_source=spree_sdk_github
[8]: https://github.com/axios/axios
[9]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[10]: https://github.com/node-fetch/node-fetch
[11]: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
[12]: https://api.spreecommerce.org/docs/api-v2/YXBpOjMxMjQ5NjA-storefront-api
[13]: https://api.spreecommerce.org/docs/api-v2/YXBpOjMxMjQ5NTg-authentication
[14]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0MjczNQ-create-an-account
[15]: https://github.com/spree/spree_auth_devise/blob/db4ccf202f42cdb713931e9915b213ab9c9b2062/config/routes.rb
[16]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0MjczNg-update-an-account
[17]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0MjczNA-retrieve-an-account
[18]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0NTE5OQ-list-all-credit-cards
[19]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc0MQ-retrieve-the-default-credit-card
[20]: https://api.spreecommerce.org/docs/api-v2/b3A6MTc1NjU3NDM-remove-a-credit-card
[21]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc0Mg-list-all-orders
[22]: https://api.spreecommerce.org/docs/api-v2/b3A6MTgwNTI4NjA-retrieve-an-order
[23]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0NTE5Ng-list-all-addresses
[24]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0NTE5Nw-create-an-address
[25]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0NTE5OA-update-an-address
[26]: https://api.spreecommerce.org/docs/api-v2/b3A6MTAwNjA3Njg-remove-an-address
[27]: https://api.spreecommerce.org/docs/api-v2/b3A6MTgwNTI4NjE-retrieve-an-order-status
[28]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc0NQ-create-a-cart
[29]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc0Ng-retrieve-a-cart
[30]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc0Nw-add-an-item-to-cart
[31]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc0OA-set-line-item-quantity
[32]: https://api.spreecommerce.org/docs/api-v2/b3A6MTg1MTUyNTg-remove-a-line-item
[33]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1MA-empty-the-cart
[34]: https://api.spreecommerce.org/docs/api-v2/b3A6MTcyNTA0NDc-delete-a-cart
[35]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1MQ-apply-a-coupon-code
[36]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1Mg-remove-a-coupon
[37]: https://api.spreecommerce.org/docs/api-v2/b3A6MjM5NTU3NTg-remove-all-coupons
[38]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1Mw-list-estimated-shipping-rates
[39]: https://api.spreecommerce.org/docs/api-v2/b3A6MjAxMTAyMzM-associate-a-cart-with-a-user
[40]: https://api.spreecommerce.org/docs/api-v2/b3A6MjA2OTMwMDM-change-cart-currency
[41]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1NA-update-checkout
[42]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1NQ-next-checkout-step
[43]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1Ng-advance-checkout
[44]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1Nw-complete-checkout
[45]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1OA-add-store-credit
[46]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc1OQ-remove-store-credit
[47]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2MA-list-payment-methods
[48]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2MQ-list-shipping-rates
[49]: https://api.spreecommerce.org/docs/api-v2/b3A6MjY1NTc1NzY-selects-shipping-method-for-shipment-s
[50]: https://api.spreecommerce.org/docs/api-v2/b3A6MjYyODA2NTY-create-new-payment
[51]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2Mg-list-all-products
[52]: https://api.spreecommerce.org/docs/api-v2/b3A6MTgwNTI4ODE-retrieve-a-product
[53]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2NA-list-all-taxons
[54]: https://api.spreecommerce.org/docs/api-v2/b3A6MTgwNTI4ODM-retrieve-a-taxon
[55]: https://api.spreecommerce.org/docs/api-v2/b3A6MjE0NTY5Mzg-list-all-wishlists
[56]: https://api.spreecommerce.org/docs/api-v2/b3A6MjE0NTY5NDA-retrieve-a-wishlist
[57]: https://api.spreecommerce.org/docs/api-v2/b3A6MjE0NTY5NDM-retrieve-the-default-wishlist
[58]: https://api.spreecommerce.org/docs/api-v2/b3A6MjE0NTY5Mzk-create-a-wishlist
[59]: https://api.spreecommerce.org/docs/api-v2/b3A6MjM5NTU3ODQ-update-a-wishlist
[60]: https://api.spreecommerce.org/docs/api-v2/b3A6MjE0NTY5NDI-delete-a-wishlist
[61]: https://api.spreecommerce.org/docs/api-v2/b3A6MjE0NTY5NDQ-add-item-to-wishlist
[62]: https://api.spreecommerce.org/docs/api-v2/b3A6MjE0NTY5NDU-set-wished-item-quantity
[63]: https://api.spreecommerce.org/docs/api-v2/b3A6MjE0NTY5NDY-delete-item-from-wishlist
[64]: https://api.spreecommerce.org/docs/api-v2/b3A6MTc3MzEwMzM-list-all-cms-pages
[65]: https://api.spreecommerce.org/docs/api-v2/b3A6MTg4MDA4OTk-retrieve-a-cms-page
[66]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2Ng-list-all-countries
[67]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2Nw-retrieve-a-country
[68]: https://api.spreecommerce.org/docs/api-v2/b3A6MzE0Mjc2OA-get-default-country
[69]: https://api.spreecommerce.org/docs/api-v2/b3A6MjQxNjA3ODY-download-a-digital-asset
[70]: https://api.spreecommerce.org/docs/api-v2/b3A6MTc2NjI3MTM-list-all-menus
[71]: https://api.spreecommerce.org/docs/api-v2/b3A6MTc3MzEwMzI-retrieve-a-menu
