import { Client, makeClient } from '@spree/storefront-api-v2-sdk'
import { RelationType } from '@spree/storefront-api-v2-sdk/types/interfaces/Relationships'

describe('using SDK client in browser', function () {
  beforeEach(function () {
    const client = makeClient({
      host: 'http://spree:3000'
    })
    cy.wrap(client).as('client')
    cy.fixture('order-full-address').as('orderFullAddress')
  })

  it('completes guest order', function () {
    const { orderFullAddress } = this
    const client: Client = this.client

    cy
      .wrap(null)
      .then(() => client.cart.create())
      .then((cartCreateResponse) => {
        const { token: orderToken, number: orderNumber } = cartCreateResponse.success().data.attributes

        return cy.wrap(null)
          .then(() => client.cart.addItem({ orderToken }, { variant_id: '1', quantity: 1 }))
          .then(() => client.checkout.orderUpdate({ orderToken }, { order: orderFullAddress }))
          .then(() => client.checkout.shippingMethods({ orderToken }))
          .then((shippingResponse) => {
            const firstShipment = shippingResponse.success().data[0]

            return client.checkout.orderUpdate({ orderToken }, {
              order: {
                payments_attributes: [
                  {
                    payment_method_id: 3 // "Check" payment method.
                  }
                ],
                shipments_attributes: [
                  {
                    id: +firstShipment.id,
                    selected_shipping_rate_id: (firstShipment.relationships.shipping_rates.data as RelationType[])[0].id
                  }
                ]
              }
            })
          })
          .then(() => client.checkout.complete({ orderToken }))
          .then((orderCompleteResponse) => expect(orderCompleteResponse.isSuccess()).to.be.true)
          .then(() => client.order.status({ orderToken }, orderNumber ))
          .then((statusResponse) => expect(statusResponse.isSuccess()).to.be.true)
      })
  })

  it('shows cart', function () {
    const client: Client = this.client

    cy
      .wrap(null)
      .then(() => client.cart.create())
      .then((cartCreateResponse) => {
        const orderToken = cartCreateResponse.success().data.attributes.token
        return client.cart.show({ orderToken })
      })
      .then((cartShowResponse) => expect(cartShowResponse.isSuccess()).to.be.true)
  })

  it('lists payment methods', function () {
    const client: Client = this.client

    cy
      .wrap(null)
      .then(() => client.cart.create())
      .then((cartCreateResponse) => {
        const orderToken = cartCreateResponse.success().data.attributes.token

        return cy.wrap(null)
          .then(() => client.checkout.paymentMethods({ orderToken }))
          .then((paymentMethodsResponse) => expect(paymentMethodsResponse.isSuccess()).to.be.true)
      })
  })
})
