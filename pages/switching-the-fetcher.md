Spree SDK does not come bundled with a HTTP client. A HTTP client may have to be installed before using the library. Out of the box, Spree SDK supports using [Axios](https://github.com/axios/axios) and [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) HTTP clients to communicate with Spree. To use one of them you have to install and configure a corresponding package:
- [Node fetch](../modules/_spree_storefront_api_v2_sdk_node_fetch.html) (recommended)
- [Axios](../modules/_spree_storefront_api_v2_sdk_axios.html)

**ADVANCED: Supply a custom HTTP client.**

To have full control over requests and responses, a custom fetcher can be supplied during the creation of the Spree SDK client:

```js
makeClient({ createFetcher: ... })
```

If you want to use a fetch-compatible interface, use the `createCustomizedFetchFetcher` function.