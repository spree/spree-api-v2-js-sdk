## TypeScript and `import`

In TypeScript, you can import Spree Storefront SDK as follows:

```js
// Set `"esModuleInterop": true` in tsconfig.json
import createAxiosFetcher from '@spree/axios-fetcher/dist/server'
import { makeClient } from '@spree/storefront-api-v2-sdk'
```

TypeScript definitions are included in the module and should be automatically used by any editor that supports them.

## CDN-hosted Spree Storefront SDK

The Storefront SDK is hosted by the [UNPKG](https://unpkg.com/) CDN. [Follow this link to download version 6.0.0](https://unpkg.com/@spree/storefront-api-v2-sdk@6.0.0/dist/client/index.js) and [this link to download the newest version](https://unpkg.com/@spree/storefront-api-v2-sdk/dist/client/index.js). Include the SDK on a website like so:

```html
<script src="https://unpkg.com/@spree/storefront-api-v2-sdk@6.0.0/dist/client/index.js"></script>
<script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/@spree/axios-fetcher@1.0.0/dist/client/index.js"></script>

<script>
  const client = SpreeSDK.makeClient({
    host: 'http://localhost:3000',
    createFetcher: SpreeSDK.createAxiosFetcher.default
  })
  // ...
</script>
```

## CDN-hosted Spree Platform SDK

The Platform SDK is hosted by the [UNPKG](https://unpkg.com/) CDN. [Follow this link to download version 6.0.0](https://unpkg.com/@spree/storefront-api-v2-sdk@6.0.0/dist/client/index.js) and [this link to download the newest version](https://unpkg.com/@spree/storefront-api-v2-sdk/dist/client/index.js). Include the SDK on a website like so:

```html
<script src="https://unpkg.com/@spree/platform-api-v2-sdk@1.0.0/dist/client/index.js"></script>
<script src="https://unpkg.com/axios@0.24.0/dist/axios.min.js"></script>
<script src="https://unpkg.com/@spree/axios-fetcher@1.0.0/dist/client/index.js"></script>

<script>
  const client = SpreePlatformSDK.makeClient({
    host: 'http://localhost:3000',
    createFetcher: SpreeSDK.createAxiosFetcher.default
  })
  // ...
</script>
```