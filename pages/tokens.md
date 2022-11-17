Most endpoints require a token for authentication. It can be an Order Token, Bearer Token or a Confirmation Token.

## Order token

Identifies a guest user's cart and order. {@page response-schema.md}

```ts
const response = await client.cart.create()
const orderToken: string = response.success().data.attributes.token
```

## Bearer token

Identifies a logged in user.

```ts
const response = await client.authentication.getToken({
  username: 'spree@example.com',
  password: 'spree123'
})
const bearerToken: string = response.success().access_token
```

## Confirmation token

Identifies a user for a single operation. For example, to reset their account's password. Confirmation Tokens are single-use and may have an expiration date.