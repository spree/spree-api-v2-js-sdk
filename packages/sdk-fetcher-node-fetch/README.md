**Spree SDK in NodeJS using fetch**

To use Spree SDK with [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) in NodeJS, install Node Fetch along with the fetcher using NPM:

```
npm install @spree/storefront-api-v2-sdk-node-fetch node-fetch
```

Set the fetcher to fetch:

```js
const createFetchFetcher = require('@spree/storefront-api-v2-sdk-node-fetch/dist/server/index').default
const { makeClient } = require('@spree/storefront-api-v2-sdk')
const client = makeClient({
  host: 'http://localhost:3000',
  createFetcher: createFetchFetcher
})
```

**Spree SDK in the browser using fetch**

Modern web browsers include fetch natively. To use Spree SDK with native fetch, it's enough to set `fetcherType` to `'fetch'` when creating the Spree SDK Client:

```html
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@6.0.0/dist/client/index.js"></script>
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk-node-fetch@1.0.0/dist/client/index.js"></script>

<script>
  const client = SpreeSDK.makeClient({
    host: 'http://localhost:3000',
    createFetcher: SpreeSDK.createFetchFetcher.default
  })
</script>
```