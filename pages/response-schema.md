## Success schema

`Client` methods return a result object. When a request succeeds, the data received from Spree is retrievable using its `success()` method and provided in the [JSON:API](https://jsonapi.org/format/) format. `isSuccess()` tells if a request succeeded.

## Error schema

The SDK avoids throwing JavaScript [`Errors`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error). Instead, any error is included in a result object.

To determine whether a call was successful, use `isSuccess()` or `isFail()` methods on the result. Details of a failed call can be retrieved using `fail()`. The method returns a `SpreeSDKError` instance, which is the primary type for all errors returned by the SDK and extends the native JavaScript `Error` type.

Available `SpreeSDKError` subtypes:

| Class Name              | Purpose                                                                                                                                                                                                                                                                                                                                    |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `MisconfigurationError` | Signifies the SDK's `Client` was created with improper options. Make sure the values of `host` and other options (if any) provided to `Client` have the correct format.                                                                                                                                                                    |
| `NoResponseError`       | Spree store could not be reached. Ensure it's running and available under the `host` address provided to the `Client` instance.                                                                                                                                                                                                            |
| `SpreeError`            | Spree responded with an error. To debug the issue, check the error's `serverResponse` field. It contains details about the response from Spree, such as the HTTP status code and headers.                                                                                                                                                  |
| `BasicSpreeError`       | Extends `SpreeError` with a `summary` field provided by Spree and containing a summary of the issue.                                                                                                                                                                                                                                       |
| `ExpandedSpreeError`    | Extends `BasicSpreeError` with a `errors` field. `errors` contains a detailed explanation of the issue, ex. all the validation errors when trying to add shipping details to a Spree order. The `getErrors` method can be used to retrieve a concrete value inside `errors`, ex. `expSpreeError.getErrors(['bill_address', 'firstname'])`. |

The specific type of error returned by `fail()` can be determined using [`instanceof`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof), ex. `if(response.fail() instanceof BasicSpreeError){...}`.