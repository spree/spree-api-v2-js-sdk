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