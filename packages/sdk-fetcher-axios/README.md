**Spree SDK in NodeJS using Axios**

To use Spree SDK with Axios in NodeJS, install Axios along with the fetcher using NPM:

```
npm install @spree/axios-fetcher axios
```

Set the fetcher to axios when creating the Spree SDK client:

```js
const createAxiosFetcher = require('@spree/axios-fetcher/dist/server/index').default
const { makeClient } = require('@spree/storefront-api-v2-sdk')
const client = makeClient({
  host: 'http://localhost:3000',
  createFetcher: createAxiosFetcher
})
```

**Spree SDK in the browser using Axios**

To use Spree SDK with Axios in the browser, include axios as a `<script>` tag before using the SDK:

```html
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@6.0.0/dist/client/index.js"></script>
<script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/@spree/axios-fetcher@1.0.0/dist/client/index.js"></script>

<script>
  const client = SpreeSDK.makeClient({
    host: 'http://localhost:3000',
    createFetcher: SpreeSDK.createAxiosFetcher.default
  })
</script>
```

Spree SDK will automatically detect that Axios is available and use it to make requests to Spree.