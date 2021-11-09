# Spree Commerce Storefront API v2 JavaScript / TypeScript SDK

Node module to easily integrate your JavaScript or TypeScript application with [Spree API V2](https://guides.spreecommerce.org/api/v2). You can create an entirely custom Storefront in JS/TS with this package including one page checkout, Single Page Apps, PWAs and so on.

Developed and maintained by:

[![Spark Solutions](http://sparksolutions.co/wp-content/uploads/2015/01/logo-ss-tr-221x100.png)][spark]

Сontents:

- [Quick start](#quick-start)
- [Response schema](#response-schema)
  - [Success schema](#success-schema)
  - [Error schema](#error-schema)
- [Switching the fetcher](#switching-the-fetcher)
- [Endpoints](#endpoints)
  - [Authentication](#authentication)
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
  - [Wishlists](#wishlists)
    - [list](#list-2)
    - [show](#show-3)
  - [Pages](#pages)
    - [list](#list-3)
    - [show](#show-4)
  - [Countries](#countries)
    - [list](#list-4)
    - [show](#show-5)
    - [default](#default)
  - [Digital Assets](#digital-assets)
    - [download](#download)
  - [Menus](#menus)
    - [list](#list-5)
    - [show](#show-6)
  - [Checkout Flow](#checkout-flow)

## Quick start

Install the NPM package:

```
npm install @spree/storefront-api-v2-sdk --save
```

Create a client:

```js
import { makeClient } from '@spree/storefront-api-v2-sdk'
// When using the SDK in a <script> tag or as part of a Webpack bundle
// targeted for the browser, instead use:
// import { makeClient } from '@spree/storefront-api-v2-sdk/dist/client'

const client = makeClient({
  host: 'http://localhost:3000'
})
```

TypeScript definitions are included in the module and should be automatically used by any editor that supports them.

`client` allows calling Spree methods, ex.:

```js
client.products.list(
  {},
  {
    include: 'default_variant',
    page: 1
  }
)
```

The SDK is also hosted by the [UNPKG][7] CDN. [Follow this link to download version 4.5.1][5] and [this link to download the newest version][6]. Include the SDK on a website like so:

```html
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@4.5.1/dist/client/index.js"></script>

<script>
  const client = window.SpreeSDK.makeClient({
    host: 'http://localhost:3000'
  })
  // ...
</script>
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

## Switching the fetcher

By default, the Spree SDK uses [Axios][8] to communicate with Spree. Another built-in option is [fetch][9]. It can be set as follows:

```js
createClient({ fetcherType: 'fetch', host: ... })
```

The `'fetch'` option will look for global `fetch` and `Request` values and fallback to `node-fetch` during runtime.

A custom fetcher can be used like so:

```js
createClient({ fetcherType: 'custom', createFetcher: ... })
```

To create a custom fetcher which uses a fetch-compatible interface, use the `createCustomizedFetchFetcher` function.

## Endpoints

Spree Storefront API SDK contains each endpoint according to [Spree Guides](https://guides.spreecommerce.org/api/v2/storefront)

## [OAuth Authentication](https://guides.spreecommerce.org/api/v2/authentication)

### `getToken`

Creates a [Bearer token](#bearer-token) required to authorize OAuth API calls.

**Parameters schema:**

```ts
username: string
password: string
```

**Success response schema:**

```ts
access_token: string
token_type: string = 'Bearer'
expires_in: number
refresh_token: string
created_at: number
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

Method `refreshToken` refreshes a [Bearer token](#bearer-token) required to authorize OAuth API calls.

**Parameters schema:**

```ts
refresh_token: string
```

**Success response schema:**

```ts
access_token: string
token_type: string = 'Bearer'
expires_in: number
refresh_token: string
created_at: number
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
token: string
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.authentication.revokeToken({
  token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
})
```

## [Account](https://guides.spreecommerce.org/api/v2/storefront/#tag/Account)

### `create`

Creates new account and returns its attributes.

**Parameters schema:**

```ts
user: {
  email: string
  password: string
  password_confirmation: string
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

### `confirm`

Confirms new account e-mail and returns account registration status.

**Parameters schema:**

```ts
confirmationToken: string
```

**Success response schema:**

```ts
data: {
  state: string
}
```

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.confirm('2xssfC9Hzf8DJXyRZGmB')
```

### `forgotPassword`

Sends an account recovery link to the provided email address. The link allows resetting the password for the account.

**Parameters schema:**

```ts
user: {
  email: string
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

### `resetPassword`

Changes the password associated with the account using an account recovery token.

**Parameters schema:**

```ts
user: {
  password: string
  password_confirmation: string
}
```

**Required token:** [Confirmation token](#confirmation-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.resetPassword('7381273269536713689562374856', {
  user: {
    password: '123!@#asdASD',
    password_confirmation: '123!@#asdASD'
  }
})
```

### `update`

Updates account and returns its attributes.

**Parameters schema:**

```ts
user: {
  email: string
  password: string
  password_confirmation: string
}
```

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.update(
  { bearerToken },
  {
    user: {
      email: 'john@snow.org',
      password: 'new_spree123',
      password_confirmation: 'new_spree123'
    }
  }
)
```

### `accountInfo`

Returns current user information.

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.accountInfo({ bearerToken })
```

### `creditCardsList`

Returns a list of Credit Cards for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.creditCardsList({ bearerToken })
```

### `defaultCreditCard`

Return the User's default Credit Card.

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.defaultCreditCard({ bearerToken })
```

### `removeCreditCard`

Remove a User's Credit Card.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
creditCardId: string
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.removeCreditCard({ bearerToken }, '14')
```

### `completedOrdersList`

Returns Orders placed by the User. Only completed ones.

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.completedOrdersList({ bearerToken })
```

### `completedOrder`

Return the User's completed Order.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
orderNumber: string
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.completedOrder({ bearerToken }, 'R653163382')
```

### `addressesList`

Returns a list of Addresses for the signed in User

**Required token:** [Bearer token](#bearer-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.addressesList({ bearerToken })
```

### `showAddress`

Returns a single address for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
addressId: string
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.showAddress({ bearerToken }, '1')
```

### `createAddress`

Create a new Address for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
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
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.createAddress(
  { bearerToken },
  {
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
  }
)
```

### `updateAddress`

Update selected Address for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
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
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.updateAddress({ bearerToken }, '1', {
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

### `removeAddress`

Removes selected Address for the signed in User.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
addressId: string
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.account.removeAddress({ bearerToken }, '1')
```

## [Order](https://guides.spreecommerce.org/api/v2/storefront/#tag/Order-Status)

### `status`

Returns placed Order.

**Required token:** [Order token](#order-token)

**Parameters schema:**

```ts
orderNumber: string
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.order.status({ orderToken }, 'R653163382')
```

## [Cart](https://guides.spreecommerce.org/api/v2/storefront/#tag/Cart)

### `create`

Creates a new Cart and returns its attributes.

**Required token:** [Bearer token](#bearer-token) if logged in user

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.create({ bearerToken })

// or guest user
const response = await client.cart.create()
```

### `show`

Returns contents of the cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.show({ bearerToken })

// or guest user
const response = await client.cart.show({ orderToken })
```

### `addItem`

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
const response = await client.cart.addItem(
  { bearerToken },
  {
    variant_id: '1',
    quantity: 1
  }
)

// or guest user
const response = await client.cart.addItem(
  { orderToken },
  {
    variant_id: '1',
    quantity: 1
  }
)
```

### `setQuantity`

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
const response = await client.cart.setQuantity(
  { bearerToken },
  {
    line_item_id: '9',
    quantity: 100
  }
)

// or guest user
const response = await client.cart.setQuantity(
  { orderToken },
  {
    line_item_id: '9',
    quantity: 100
  }
)
```

### `removeItem`

Removes Line Item from Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
line_item_id: string
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.removeItem({ bearerToken }, '1')

// or guest user
const response = await client.cart.removeItem({ orderToken }, '1')
```

### `emptyCart`

Empties the Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.emptyCart({ bearerToken })

// or guest user
const response = await client.cart.emptyCart({ orderToken })
```

### `remove`

Removes the Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.remove({ bearerToken })

// or guest user
const response = await client.cart.remove({ orderToken })
```

### `applyCouponCode`

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
const response = await client.cart.applyCouponCode(
  { bearerToken },
  {
    coupon_code: 'promo_test'
  }
)

// or guest user
const response = await client.cart.applyCouponCode(
  { orderToken },
  {
    coupon_code: 'promo_test'
  }
)
```

### `removeCouponCode`

Removes a coupon code from the Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
coupon_code?: string
```

**Success response schema:** [Success schema](#success-schema)

**Failed response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.removeCouponCode({ bearerToken }, 'promo_test')

// or guest user
const response = await client.cart.removeCouponCode({ orderToken }, 'promo_test')
```

### `removeAllCoupons`

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failed response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.removeAllCoupons({ bearerToken })

// or guest user
const response = await client.cart.removeAllCoupons({ orderToken })
```

### `estimateShippingRates`

Returns a list of Estimated Shipping Rates for Cart.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
country_iso: string
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.cart.estimateShippingRates(
  { bearerToken },
  {
    country_iso: 'USA'
  }
)

// or guest user
const response = await client.cart.estimateShippingRates(
  { orderToken },
  {
    country_iso: 'USA'
  }
)
```

### `associateGuestCart`

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
const response = await client.cart.associateGuestCart(
  { bearerToken },
  {
    guest_order_token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
  }
)
```

### `changeCurrency`

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
const response = await client.cart.changeCurrency(
  { bearerToken },
  {
    new_currency: 'CAD'
  }
)
```

## [Checkout](https://guides.spreecommerce.org/api/v2/storefront/#tag/Checkout)

### `orderUpdate`

Updates the Checkout
You can run multiple Checkout updates with different data types.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
order: {
  email: string
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
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.orderUpdate({ bearerToken }, { order: {...} })

// or guest user
const response = await client.checkout.orderUpdate({ orderToken }, { order: {...} })
```

### `orderNext`

Goes to the next Checkout step.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.orderNext({ bearerToken })

// or guest user
const response = await client.checkout.orderNext({ orderToken })
```

### `advance`

Advances Checkout to the furthest Checkout step validation allows, until the Complete step.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.advance({ bearerToken })

// or guest user
const response = await client.checkout.advance({ orderToken })
```

### `complete`

Completes the Checkout.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.complete({ bearerToken })

// or guest user
const response = await client.checkout.complete({ orderToken })
```

### `addStoreCredits`

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
const response = await client.checkout.addStoreCredits({ bearerToken }, { amount: 100 })

// or guest user
const response = await client.checkout.addStoreCredits({ orderToken }, { amount: 100 })
```

### `removeStoreCredits`

Remove Store Credit payments if any applied.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.removeStoreCredits({ bearerToken })

// or guest user
const response = await client.checkout.removeStoreCredits({ orderToken })
```

### `paymentMethods`

Returns a list of available Payment Methods.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.paymentMethods({ bearerToken })

// or guest user
const response = await client.checkout.paymentMethods({ orderToken })
```

### `shippingRates`

Returns a list of available Shipping Rates for Checkout. Shipping Rates are grouped against Shipments. Each checkout cna have multiple Shipments eg. some products are available in stock and will be send out instantly and some needs to be backordered.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
params?: {
  include?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user
const response = await client.checkout.shippingRates(
  { bearerToken },
  {
    include: 'shipping_rates,stock_location'
  }
)

// or guest user
const response = await client.checkout.shippingRates(
  { orderToken },
  {
    include: 'shipping_rates,stock_location'
  }
)
```

### `selectShippingMethod`

Selects a Shipping Method for Shipment(s).

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
params?: {
  shipping_method_id: string
  shipment_id?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.checkout.selectShippingMethod(
  { bearerToken },
  {
    shipping_method_id: '42'
  }
)
```

### `addPayment`

Creates new Payment for the current checkout.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
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
params?: {
  include?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Logged in user

// Create new credit card
const response = await client.checkout.addPayment(
  { bearerToken },
  {
    payment_method_id: '1',
    source_attributes: {
      gateway_payment_profile_id: 'card_1JqvNB2eZvKYlo2C5OlqLV7S',
      cc_type: 'visa',
      last_digits: '1111',
      month: '10',
      year: '2026',
      name: 'John Snow'
    }
  }
)

// Use existing credit card
const response = await client.checkout.addPayment(
  { bearerToken },
  {
    payment_method_id: '1',
    source_id: '1'
  }
)

// or guest user

// Create new credit card
const response = await client.checkout.addPayment(
  { orderToken },
  {
    payment_method_id: '1',
    source_attributes: {
      gateway_payment_profile_id: 'card_1JqvNB2eZvKYlo2C5OlqLV7S',
      cc_type: 'visa',
      last_digits: '1111',
      month: '10',
      year: '2026',
      name: 'John Snow'
    }
  }
)
```

## [Products](https://guides.spreecommerce.org/api/v2/storefront/#tag/Products)

Returns a list of Products.

### `list`

**Required token:** [Bearer token](#bearer-token) if logged in user

**Parameters schema:**

```ts
token?: IToken
params?: {
  include?: string
  fields?: {
    [key: string]: string
  }
  filter?: {
    [key: string]: number
  }
  sort?: string
  page?: number
  per_page?: number
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.products.list()
```

### `show`

**Required token:** [Bearer token](#bearer-token) if logged in user

**Parameters schema:**

```ts
id: string
token?: IToken
params?: {
  include: string
  fields: {
    [key: string]: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = = await client.products.show('123')
```

## [Taxons](https://guides.spreecommerce.org/api/v2/storefront/#tag/Taxons)

### `list`

Returns a list of Taxons.

**Parameters schema:**

```ts
params?: {
  include?: string
  fields?: {
    [key: string]: string
  }
  filter?: {
    [key: string]: number
  }
  page?: number
  per_page?: number
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.taxons.list()
```

### `show`

Returns a single Taxon.

**Parameters schema:**

```ts
id: string
params?: {
  id: string
  params?: {
    include: string
    fields: {
      [key: string]: string
    }
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const products = await client.taxons.show('1')
```

## [Wishlists](https://spark-solutions.stoplight.io/docs/api-v2/b3A6MjE0NTY5Mzg-list-all-wishlists)

### `list`

Returns a list of Wishlists.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
params?: {
  is_variant_included?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = = await client.wishlists.list({ bearerToken }, { is_variant_included: '456' })
```

### `show`

Returns a single Wishlist.

**Required token:** [Bearer token](#bearer-token)

**Parameters schema:**

```ts
wishlistToken: IToken
params?: {
  is_variant_included?: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = = await client.wishlists.show({ bearerToken }, '123', { is_variant_included: '456' })
```

## [Pages](https://guides.spreecommerce.org/api/v2/storefront/#tag/Pages)

### `list`

Returns a list of all CMS Pages available in the current store.

**Parameters schema:**

```ts
params?: {
  include: string
  per_page: number
  filter?: {
    [key: string]: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const pages = await client.pages.list()
```

### `show`

Returns a single CMS Page. You can use either a CMS Page slug or ID.

**Parameters schema:**

```ts
slugOrId: string
params?: {
  include: string
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const page = await client.pages.show('about-us')
```

## [Countries](https://guides.spreecommerce.org/api/v2/storefront/#tag/Countries)

### `list`

Returns a list of all countries.

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const countries = await client.countries.list()
```

### `show`

Returns the details of a specific country.

**Parameters schema:**

```ts
iso: string
params?: {
  include: string
  fields: {
    [key: string]: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const country = await client.countries.show('USA')
```

### `default`

Returns the default country for the current store. By default this will be the US.

**Parameters schema:**

```ts
params?: {
  include: string
  fields: {
    [key: string]: string
  }
}
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const countries = await client.countries.default()
```

## [Digital Assets](https://spark-solutions.stoplight.io/docs/api-v2/b3A6MjQxNjA3ODY-download-a-digital-asset)

### `download`

Returns a stream for downloading a purchased digital product.

**Required token:** [Bearer token](#bearer-token) or [Order token](#order-token)

**Parameters schema:**

```ts
assetToken: string
```

**Success response schema:** [ReadableStream][11]

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
// Many NodeJS servers allow piping a stream as the response (`digitalAssetStream.pipe(serverResponse);`).

// The below example assumes a logged in user using SpreeSDK in the browser and downloading an image asset.

// A digital token can be retrieved from a digital link associated to a line item in a completed order.
const digitalToken = '1YjXK36ZRj2w4nxtMkJutTGX'

const response = await client.digitalAssets.download({ bearerToken }, digitalToken)

const digitalAssetStream = response.success()

// Append an <img> tag to the page to show the asset on the page.
const image = new Image()

document.body.appendChild(image)

// Convert a stream to a Blob for easier processing.
const digitalAssetBlob = await new Response(digitalAssetStream).blob()

image.src = URL.createObjectURL(digitalAssetBlob)
```

## [Menus](https://spark-solutions.stoplight.io/docs/api-v2/b3A6MTc2NjI3MTM-list-all-menus)

### `list`

Returns a list of Menus.

**Parameters schema:**

```ts
params?: {
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
const response = await client.menus.list({ locale: 'fr', filter: { location: 'header' } })
```

### `show`

Returns a single Menu.

**Parameters schema:**

```ts
id: string
```

**Success response schema:** [Success schema](#success-schema)

**Failure response schema:** [Error schema](#error-schema)

**Example:**

```ts
const response = await client.menus.show('2')
```

## Checkout Flow

```ts
const cartCreateResponse = await client.cart.create()

const orderToken = cartCreateResponse.success().data.attributes.token

await client.cart.addItem({ orderToken }, { variant_id: '1' })

// Step one - save email, billing and shipping addresses
await client.checkout.orderUpdate({ orderToken }, {
  order: {
    email,
    bill_address_attributes: {...},
    ship_address_attributes: {...}
  }
})

await client.checkout.orderNext({ bearerToken })

// Step two - pick a shipping method
const shipping = (await client.checkout.shippingRates({ orderToken })).success()

await client.checkout.orderUpdate({ orderToken }, {
  order: {
    shipments_attributes: [{
      id: shipping.data[0].id,
      selected_shipping_rate_id: shipping.data[0].relationships.shipping_rates.data[0].id
    }]
  }
})

await client.checkout.orderNext({ orderToken })

// Step three - pick a payment method
const payment = (await client.checkout.paymentMethods({ orderToken })).success()

await client.checkout.addPayment({ orderToken }, {
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

// Order complete
await client.checkout.orderNext({ orderToken })

await client.checkout.complete({ orderToken })
```

## About Spark Solutions

[![Spark Solutions](http://sparksolutions.co/wp-content/uploads/2015/01/logo-ss-tr-221x100.png)][spark]

Spree is maintained by [Spark Solutions Sp. z o.o.][spark].

We are passionate about open source software.
We are [available for hire][spark].

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[4]: https://jsonapi.org/format/
[5]: https://unpkg.com/@spree/storefront-api-v2-sdk@4.5.1/dist/client/index.js
[6]: https://unpkg.com/@spree/storefront-api-v2-sdk/dist/client/index.js
[7]: https://unpkg.com/
[spark]: http://sparksolutions.co?utm_source=github
[8]: https://github.com/axios/axios
[9]: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
[10]: https://github.com/node-fetch/node-fetch
[11]: https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream
