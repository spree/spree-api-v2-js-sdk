```ts
const cartCreateResponse = await client.cart.create()
const orderToken = cartCreateResponse.success().data.attributes.token
await client.cart.addItem({
  order_token: orderToken,
  variant_id: '1'
})
// Step one - save email, billing and shipping addresses
await client.checkout.orderUpdate({
  order_token: orderToken,
  order: {
    email,
    bill_address_attributes: {...},
    ship_address_attributes: {...}
  }
})
await client.checkout.orderNext({ order_token: orderToken })
// Step two - pick a shipping method
const shipping = (await client.checkout.shippingRates({ order_token: orderToken })).success()
await client.checkout.orderUpdate({
  order_token: orderToken,
  order: {
    shipments_attributes: [{
      id: shipping.data[0].id,
      selected_shipping_rate_id: shipping.data[0].relationships.shipping_rates.data[0].id
    }]
  }
})
await client.checkout.orderNext({ order_token: orderToken })
// Step three - pick a payment method
const payment = (await client.checkout.paymentMethods({ order_token: orderToken })).success()
await client.checkout.addPayment({
  order_token: orderToken,
  payment_method_id: payment.data[0].id,
  source_attributes: {
    gateway_payment_profile_id: "card_1JqvNB2eZvKYlo2C5OlqLV7S",
    cc_type: "visa",
    last_digits: "1111",
    month: "10",
    year: "2026",
    name: "John Snow"
  }
})
await client.checkout.orderNext({ order_token: orderToken })
// Place the order
await client.checkout.complete({ order_token: orderToken })
```