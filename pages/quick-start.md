## Storefront SDK

Install the NPM package:

```
npm install --save @spree/storefront-api-v2-sdk
```

Install the [Node Fetch](https://www.npmjs.com/package/node-fetch) HTTP client and the Node Fetch fetcher to be able to use it:

```
npm install --save @spree/node-fetcher node-fetch
```

_If you want to use the Spree SDK for a browser implementation you can use the native fetch without the need to install anything ([see here](../modules/_spree_node_fetcher.html))._

Create a client and use it to call Spree:

```js
const createFetchFetcher = require('@spree/node-fetcher/dist/server/index').default
const { makeClient } = require('@spree/storefront-api-v2-sdk')
const client = makeClient({
  host: 'http://localhost:3000',
  createFetcher: createFetchFetcher
})

client.products.list({
  include: 'default_variant',
  page: 1
})
.then((spreeResponse) => {
  console.log(spreeResponse.success())
})
```

_Spree Storefront SDK can also be imported using `import` and `<script>` tags in the browser. Check the {@page alternative-setups.md} section for examples._

_For details about HTTP clients, read the {@page switching-the-fetcher.md} section._

## Platform SDK

Install the NPM package:

```
npm install --save @spree/platform-api-v2-sdk
```

Install the [Node Fetch](https://www.npmjs.com/package/node-fetch) HTTP client and the Node Fetch fetcher to be able to use it:

```
npm install --save @spree/node-fetcher node-fetch
```

_If you want to use the Spree SDK for a browser implementation you can use the native fetch without the need to install anything ([see here](../modules/_spree_node_fetcher.html))._

Create a client and use it to call Spree:

```js
const createFetchFetcher = require('@spree/node-fetcher/dist/server/index').default
const { makeClient } = require('@spree/platform-api-v2-sdk')
const client = makeClient({
  host: 'http://localhost:3000',
  createFetcher: createFetchFetcher
})

client.users.list({
  bearer_token: '...'
})
.then((spreeResponse) => {
  console.log(spreeResponse.success())
})
```

_Spree Platform SDK can also be imported using `import` and `<script>` tags in the browser. Check the {@page alternative-setups.md} section for examples._

_For details about HTTP clients, read the {@page switching-the-fetcher.md} section._