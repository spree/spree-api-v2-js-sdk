# Spree Storefront API SDK

Node module for integration with Spree API V2
---



Сontents:

- [Quick Start](#quick-start)
- [Response schema](#response-schema)
  - [Success schema](#success-schema)
  - [Error schema](#error-schema)
- [Endpoints](#endpoints)
  - [Authentication](#authentication)
    - [getToken](#getToken)
    - [refreshToken](#refreshToken)
  - [Account](#account)
    - [accountInfo](#accountInfo)
    - [creditCardsList](#creditCardsList)
    - [defaultCreditCard](#defaultCreditCard)
    - [completedOrdersList](#completedOrdersList)
    - [completedOrder](#completedOrder)
  - [Order](#order)
    - [status](#status)
  - [Cart](#cart)
    - [create](#create)
    - [show](#show)
    - [addItem](#addItem)
    - [setQuantity](#setQuantity)
    - [removeItem](#removeItem)
    - [emptyCart](#emptyCart)
    - [applyCouponCode](#applyCouponCode)
    - [removeCouponCode](#removeCouponCode)
  - [Checkout](#checkout)
    - [orderUpdate](#orderUpdate)
    - [orderNext](#orderNext)
    - [advance](#advance)
    - [complete](#complete)
    - [addStoreCredits](#addStoreCredits)
    - [removeStoreCredits](#removeStoreCredits)
    - [paymentMethods](#paymentMethods)
    - [shippingMethods](#shippingMethods)
    - [Checkout Examples](#checkout-examples)
  - [Products](#products)
    - [list](#list)
    - [show](#show)


<br/>

## Quick start

### Installation

`npm install @spree/storefront-api-v2-sdk --save`

### Creating a Spree client

**JavaScript:**
```js
import { makeClient } from '@spree/storefront-api-v2-sdk'


const client = makeClient({
  host: 'http://localhost:3000'
})
```

**TypeScript:**
```ts
import { makeClient } from '@spree/storefront-api-v2-sdk'
import Instance from '@spree/storefront-api-v2-sdk/src/Instance'

const client: Instance = makeClient({
  host: 'http://localhost:3000'
})
```

`client` allows calling Spree methods, ex.:
```js
client.products.list({
  include: 'default_variant',
  page: 1
})
```

## Response schema

### Success schema

`Client` methods return a ["result"][2] object. When a request succeeds, the data received from Spree is retrievable using its `success()` method and provided in the [JSON:API][4] format. `isSuccess()` tells if a request succeeded.

### Error schema

The SDK avoids throwing JavaScript [`Error`s][1]. Instead, any error is included in a result object.

To determine whether a call was succesful, use `isSuccess()` or `isFail()` methods on the result. Details of a failed call can be retrieved using `fail()`. The method returns a `SpreeSDKError` instance, which is the primary type for all `Error`s returned by the SDK and extends the native JavaScript `Error` type.

Available `SpreeSDKError` subtypes:

|Class Name|Purpose|
|---|---|
|`MisconfigurationError`|Signifies the SDK's `Client` was created with improper options. Make sure the values of `host` and other options (if any) provided to `Client` have the correct format.|
|`NoResponseError`|Spree store could not be reached. Ensure it's running and available under the `host` address provided to the `Client` instance.|
|`SpreeError`|Spree responded with an error. To debug the issue, check the error's `serverResponse` field. It contains details about the response from Spree, such as the HTTP status code and headers.|
|`BasicSpreeError`|Extends `SpreeError` with a `error` field provided by Spree and containing a summary of the issue.|
|`ExpandedSpreeError`|Extends `BasicSpreeError` with a `errors` field. `errors` contains a detailed explanation of the issue, ex. all the validation errors when trying to add shipping details to a Spree order. The `getErrors` method can be used to retrieve a concrete value inside `errors`, ex. `expSpreeError.getErrors(['bill_address', 'firstname'])`.|

The specific type of error returned by `fail()` can be determined using [`instanceof`][3], ex. `if(response.fail() instanceof BasicSpreeError){...}`.

## Endpoints

Spree Storefront API SDK contains each endpoint according to [Spree Guides](https://guides.spreecommerce.org/api/v2/storefront)

## [Authentication](https://guides.spreecommerce.org/api/v2/storefront/#section/Authentication)

### `getToken`

Method `getToken` creates a Bearer token required to authorize calls API calls.

__parameters schema:__

```ts
  username: string
  password: string
  grant_type: string = 'password'
```

__success response schema:__

```ts
  access_token: string
  token_type: string = 'Bearer'
  expires_in: number
  refresh_token: string
  created_at: number
```

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `refreshToken`

Method `refreshToken` refreshes a Bearer token required to authorize calls API calls.

__parameters schema:__

```ts
  refresh_token: string
```

__success response schema:__

```ts
  access_token: string
  token_type: string = 'Bearer'
  expires_in: number
  refresh_token: string
  created_at: number
```

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.refreshToken({
      refresh_token: 'aebe2886d7dbba6f769e20043e40cfa3447e23ad9d8e82c632f60ed63a2f0df1'
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

## [Account](https://guides.spreecommerce.org/api/v2/storefront/#tag/Account)

### `accountInfo`

Returns current user information.

__parameters schema:__

```ts
  token: {
    bearerToken: string
  }
```

__success response schema:__

```ts
  data: {
    id: number
    type: string
    attributes: {
      email: string
      store_credits: number
      completed_orders: number
    }
    relationships: {
      default_billing_address: {
        data: {
          id: number
          type: string
        }
      }
      default_shipping_address: {
        data: {
          id: number
          type: string
        }
      }
    }
  }
```

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const account = await client.account.accountInfo({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `creditCardsList`
Returns a list of Credit Cards for the signed in User.

__parameters schema:__

```ts
  token: {
    bearerToken: string
  }
```

__success response schema:__

```ts
  data: [
    {
      id: number
      type: string
      attributes: {
        cc_type: string
        last_digits: string
        month: number
        year: number
        name: string
        default: boolean
      }
      relationships: {
        payment_method: {
          data: {
            id: string
            type: string
          }
        }
      }
    }
  ]
```

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const cardsList = await client.account.creditCardsList({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `defaultCreditCard`
Return the User's default Credit Card.

__parameters schema:__

```ts
  token: {
    bearerToken: string
  }
```

__success response schema:__

```ts
  data: {
    id: number
    type: string
    attributes: {
      cc_type: string
      last_digits: string
      month: number
      year: number
      name: string
      default: boolean
    }
    relationships: {
      payment_method: {
        data: {
          id: string
          type: string
        }
      }
    }
  }
```

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const defaultCard = await client.account.defaultCreditCard({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `completedOrdersList`
Returns Orders placed by the User. Only completed ones.

__parameters schema:__

```ts
  token: {
    bearerToken: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const ordersList = await client.account.completedOrdersList({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `completedOrder`
Return the User's completed Order.


__parameters schema:__

```ts
  token: {
    bearerToken: string
  }
  id: string
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const ordersList = await client.account.completedOrder({
      bearerToken: token.access_token
    }, 'order_id')
  } catch (err) {
    console.error(err)
  }
```

<br/>

## [Order](https://guides.spreecommerce.org/api/v2/storefront/#tag/Order-Status)

### `status`
Returns placed Order.

__parameters schema:__

```ts
  number: string
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const order = await client.order.status('order_number')
  } catch (err) {
    console.error(err)
  }
```

<br/>

## [Cart](https://guides.spreecommerce.org/api/v2/storefront/#tag/Cart)

### `create`
Creates new Cart and returns it attributes.

__optional parameters schema:__

```ts
  {
    bearerToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const cart = await client.cart.create({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    const cart = await client.cart.create()
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `show`
Returns contents of the cart.

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const cart = await client.cart.show({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    cart = await client.cart.show({
      orderToken: cart.data.attributes.token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `addItem`
Adds a Product Variant to the Cart.

__parameters schema:__

```ts
  {
    variant_id: string
    quantity: number
  }
```

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const cart = await client.cart.addItem({
      bearerToken: token.access_token
    }, {
      variant_id: '1',
      quantity: 1

    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    cart = await client.cart.addItem({
      orderToken: cart.data.attributes.token
    }, {
      variant_id: '1',
      quantity: 1

    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `setQuantity`
Sets the quantity of a given line item. It has to be a positive integer greater than 0.

__parameters schema:__

```ts
  {
    line_item_id: string
    quantity: number
  }
```

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const cart = await client.cart.setQuantity({
      bearerToken: token.access_token
    }, {
      line_item_id: '9',
      quantity: 100

    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    cart = await client.cart.setQuantity({
      orderToken: cart.data.attributes.token
    }, {
      line_item_id: '9',
      quantity: 100

    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `removeItem`
Removes Line Item from Cart.

__parameters schema:__

```ts
  line_item_id: string
```

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const cart = await client.cart.removeItem({
      bearerToken: token.access_token
    }, '1')
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    cart = await client.cart.removeItem({
      orderToken: cart.data.attributes.token
    }, '1')
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `emptyCart`
Empties the Cart.

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    cart = await client.cart.emptyCart({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    cart = await client.cart.emptyCart({
      orderToken: cart.data.attributes.token
    }, '1')
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `applyCouponCode`
Applies a coupon code to the Cart.

__parameters schema:__

```ts
  {
    coupon_code: string
  }
```

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    cart = await client.cart.applyCouponCode({
      bearerToken: token.access_token
    }, {
      coupon_code: 'promo_test'
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    cart = await client.cart.applyCouponCode({
      orderToken: cart.data.attributes.token
    }, {
      coupon_code: 'promo_test'
    })
  } catch (err) {
    console.error(err)
  }
```

### `removeCouponCode`
Removes a coupon code from the Cart.

__parameters schema:__

```ts
  coupon_code: string
```

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const cart = await client.cart.removeCouponCode({
      bearerToken: token.access_token
    }, 'promo_test')
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    cart = await client.cart.removeCouponCode({
      orderToken: cart.data.attributes.token
    }, 'promo_test')
  } catch (err) {
    console.error(err)
  }
```
<br/>

## [Checkout](https://guides.spreecommerce.org/api/v2/storefront/#tag/Checkout)

### `orderUpdate`
Updates the Checkout
You can run multiple Checkout updates with different data types.

__parameters schema:__

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
    payments_attributes?: [
      {
        payment_method_id: number
      }
    ]
  }
  payment_source?: {
    [payment_method_id: number]: {
      number: string
      month: string
      year: string
      verification_value: string
      name: string
    }
  }
```

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const order = await client.checkout.orderUpdate({
      bearerToken: token.access_token
    }, {
      order: {
        email: 'john@snow.org',
        bill_address_attributes: {
          firstname: 'John',
          lastname: 'Snow',
          address1: '7735 Old Georgetown Road',
          city: 'Bethesda',
          phone: '3014445002',
          zipcode: '20814',
          state_name: 'MD',
          country_iso: 'US'
        },
        ship_address_attributes: {
          firstname: 'John',
          lastname: 'Snow',
          address1: '7735 Old Georgetown Road',
          city: 'Bethesda',
          phone: '3014445002',
          zipcode: '20814',
          state_name: 'MD',
          country_iso: 'US'
        },
        shipments_attributes: [{
          id: 1,
          selected_shipping_rate_id: 1
        }],
        payments_attributes: [{
          payment_method_id: 1
        }]
      },
      payment_source: {
        1: {
          number: '4111111111111111',
          month: '1',
          year: '2022',
          verification_value: '123',
          name: 'John Doe'
        }
      }
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    cart = await client.checkout.orderUpdate({
      orderToken: cart.data.attributes.token
    }, {
      order: {
        email: 'john@snow.org',
        bill_address_attributes: {
          firstname: 'John',
          lastname: 'Snow',
          address1: '7735 Old Georgetown Road',
          city: 'Bethesda',
          phone: '3014445002',
          zipcode: '20814',
          state_name: 'MD',
          country_iso: 'US'
        },
        ship_address_attributes: {
          firstname: 'John',
          lastname: 'Snow',
          address1: '7735 Old Georgetown Road',
          city: 'Bethesda',
          phone: '3014445002',
          zipcode: '20814',
          state_name: 'MD',
          country_iso: 'US'
        },
        shipments_attributes: [{
          id: 1,
          selected_shipping_rate_id: 1
        }],
        payments_attributes: [{
          payment_method_id: 1
        }]
      },
      payment_source: {
        1: {
          number: '4111111111111111',
          month: '1',
          year: '2022',
          verification_value: '123',
          name: 'John Doe'
        }
      }
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `orderNext`

Goes to the next Checkout step.

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const order = await client.checkout.orderNext({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    const order = await client.checkout.orderNext({
      orderToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `advance`

Advances Checkout to the furthest Checkout step validation allows, until the Complete step.

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const order = await client.checkout.advance({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    const order = await client.checkout.advance({
      orderToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `complete`
Completes the Checkout.

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const order = await client.checkout.complete({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    const order = await client.checkout.complete({
      orderToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `addStoreCredits`
Adds Store Credit payments if a user has any.

__parameters schema:__
```ts
  {
    amount: number
  }
```

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const order = await client.checkout.addStoreCredits({
      bearerToken: token.access_token
    }, {
      amount: 100
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    const order = await client.checkout.addStoreCredits({
      orderToken: token.access_token
    }, {
      amount: 100
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `removeStoreCredits`
Remove Store Credit payments if any applied.

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__ [Success schema](#success-schema)
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const order = await client.checkout.removeStoreCredits({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    const order = await client.checkout.removeStoreCredits({
      orderToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `paymentMethods`
Returns a list of available Payment Methods.

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__
```ts
  {
    data: [
      {
        id: atring
        type: string
        attributes: {
          type: string
          name: string
          description: string
        }
      }
    ]
  }
```
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const order = await client.checkout.paymentMethods({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    const order = await client.checkout.paymentMethods({
      orderToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `shippingMethods`
Returns a list of available Shipping Rates for Checkout. Shipping Rates are grouped against Shipments. Each checkout cna have multiple Shipments eg. some products are available in stock and will be send out instantly and some needs to be backordered.

__optional parameters schema:__

```ts
  {
    bearerToken?: string
    orderToken?: string
  }
```

__success response schema:__
```ts
  {
    data: [
      {
        id: atring
        type: string
        attributes: {
          type: string
          name: string
          description: string
        }
      }
    ]
  }
```
<br/>

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const token = await client.authentication.getToken({
      username: 'spree@example.com',
      password: 'spree123'
    })

    const order = await client.checkout.shippingMethods({
      bearerToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }

  // or

  try {
    let cart = await client.cart.create()

    const order = await client.checkout.shippingMethods({
      orderToken: token.access_token
    })
  } catch (err) {
    console.error(err)
  }
```

<br/>

### Checkout Examples

1. One-step checkout

```ts
try {
  const { access_token: accessToken } = await client.authentication.getToken({
    username: 'spree@example.com',
    password: 'spree123'
  })

  await client.cart.create({
    bearerToken: accessToken
  })

  await client.cart.addItem({
    bearerToken: accessToken
  }, {
    variant_id: '1'
  })

  const shipping = await client.checkout.shippingMethods({
    bearerToken: accessToken
  })

  const payment = await client.checkout.paymentMethods({
    bearerToken: accessToken
  })

  let order = await client.checkout.orderUpdate({
    bearerToken: token.access_token
  }, {
    order: {
      email: 'john@snow.org',
      bill_address_attributes: {
        firstname: 'John',
        lastname: 'Snow',
        address1: '7735 Old Georgetown Road',
        city: 'Bethesda',
        phone: '3014445002',
        zipcode: '20814',
        state_name: 'MD',
        country_iso: 'US'
      },
      ship_address_attributes: {
        firstname: 'John',
        lastname: 'Snow',
        address1: '7735 Old Georgetown Road',
        city: 'Bethesda',
        phone: '3014445002',
        zipcode: '20814',
        state_name: 'MD',
        country_iso: 'US'
      },
      shipments_attributes: [{
        id: shipping.data[0].id,
        selected_shipping_rate_id: shipping.data[0].relationships.shipping_rates.data[0].id
      }],
      payments_attributes: [{
        payment_method_id: payment.data[0].id
      }]
    },
    payment_source: {
      [payment.data[0].id]: {
        number: '4111111111111111',
        month: '1',
        year: '2022',
        verification_value: '123',
        name: 'John Doe'
      }
    }
  })

  order = await client.checkout.complete({
    bearerToken: token.access_token
  })
} catch (err) {
  console.error(err)
}
```

1. Three-step checkout

```ts
try {
  const { access_token: accessToken } = await client.authentication.getToken({
    username: 'spree@example.com',
    password: 'spree123'
  })

  await client.cart.create({
    bearerToken: accessToken
  })

  await client.cart.addItem({
    bearerToken: accessToken
  }, {
    variant_id: '1'
  })

  // Step one

  let order = await client.checkout.orderUpdate({
    bearerToken: token.access_token
  }, {
    order: {
      email: 'john@snow.org',
      bill_address_attributes: {
        firstname: 'John',
        lastname: 'Snow',
        address1: '7735 Old Georgetown Road',
        city: 'Bethesda',
        phone: '3014445002',
        zipcode: '20814',
        state_name: 'MD',
        country_iso: 'US'
      },
      ship_address_attributes: {
        firstname: 'John',
        lastname: 'Snow',
        address1: '7735 Old Georgetown Road',
        city: 'Bethesda',
        phone: '3014445002',
        zipcode: '20814',
        state_name: 'MD',
        country_iso: 'US'
      }
    },
  })

  await client.checkout.orderNext({
    bearerToken: accessToken
  })

  // Step two

  const shipping = await client.checkout.shippingMethods({
    bearerToken: accessToken
  })

  let order = await client.checkout.orderUpdate({
    bearerToken: token.access_token
  }, {
    order: {
      shipments_attributes: [{
        id: shipping.data[0].id,
        selected_shipping_rate_id: shipping.data[0].relationships.shipping_rates.data[0].id
      }]
    }
  })

  await client.checkout.orderNext({
    bearerToken: accessToken
  })

  // Step three

  const payment = await client.checkout.paymentMethods({
    bearerToken: accessToken
  })

  let order = await client.checkout.orderUpdate({
    bearerToken: token.access_token
  }, {
    order: {
      payments_attributes: [{
        payment_method_id: payment.data[0].id
      }]
    },
    payment_source: {
      [payment.data[0].id]: {
        number: '4111111111111111',
        month: '1',
        year: '2022',
        verification_value: '123',
        name: 'John Doe'
      }
    }
  })

  // Order complete

  await client.checkout.orderNext({
    bearerToken: accessToken
  })

  order = await client.checkout.complete({
    bearerToken: token.access_token
  })
} catch (err) {
  console.error(err)
}
```

<br/>

## [Products](https://guides.spreecommerce.org/api/v2/storefront/#tag/Products)
Returns a list of Products.

### `list`

__optional parameters schema:__

```ts
  {
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

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const products = await client.products.list()
  } catch (err) {
    console.error(err)
  }
```

<br/>

### `list`

__optional parameters schema:__

```ts
  {
    id: string
    params?: {
      include: string
      fields: {
        [key: string]: string
      }
    }
  }
```

__failed response schema:__ [Error schema](#error-schema)
<br/>

__Example:__

```ts
  try {
    const products = await client.products.show('product_id')
  } catch (err) {
    console.error(err)
  }
```

<br/>

[1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
[2]: https://github.com/monet/monet.js/blob/master/docs/VALIDATION.md
[3]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
[4]: https://jsonapi.org/format/