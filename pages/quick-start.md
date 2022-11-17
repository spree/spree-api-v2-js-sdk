Install the NPM package:

```
npm install --save @spree/storefront-api-v2-sdk
```

Install the [Node Fetch](https://www.npmjs.com/package/node-fetch) HTTP client and the Node Fetch fetcher to be able to use it:

```
npm install --save @spree/storefront-api-v2-sdk-node-fetch node-fetch
```

_If you want to use the Spree SDK for a browser implementation you can use the native fetch without the need to install anything ([see here](../modules/_spree_storefront_api_v2_sdk_node_fetch.html))._

Create a client and use it to call Spree:

```js
const createAxiosFetcher = require('@spree/storefront-api-v2-sdk-node-fetch/dist/server/index').default
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

_Spree SDK can also be imported using `import` and `<script>` tags in the browser. Check the {@page alternative-setups.md} section for examples._

_For details about HTTP clients, read the {@page switching-the-fetcher.md} section._