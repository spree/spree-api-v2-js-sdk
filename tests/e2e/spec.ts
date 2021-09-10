// To import @spree/storefront-api-v2-sdk, run 'npm link' and 'npm link @spree/storefront-api-v2-sdk'
// in the project's root directory.
import { Client, makeClient, result } from '@spree/storefront-api-v2-sdk'
import type { RelationType } from '@spree/storefront-api-v2-sdk/types/interfaces/Relationships'
import { findRelationshipDocuments } from '@spree/storefront-api-v2-sdk/types/helpers/jsonApi'
import type { FetcherStrategies } from '@spree/storefront-api-v2-sdk/types/interfaces/ClientConfig'

// eslint-disable-next-line max-lines-per-function
const createTests = function () {
  it('completes guest order', function () {
    const { orderFullAddress } = this
    const client: Client = this.clientRef.value

    cy.wrap(null)
      .then(function () {
        return client.cart.create()
      })
      .then(function (cartCreateResponse) {
        const { token: orderToken, number: orderNumber } = cartCreateResponse.success().data.attributes

        return cy
          .wrap(null)
          .then(function () {
            return client.products.list({}, { include: 'variants' })
          })
          .then(function (variantsResponse) {
            const variantId = findRelationshipDocuments(
              variantsResponse.success(),
              variantsResponse.success().data[0],
              'default_variant'
            )[0].id

            return client.cart.addItem({ orderToken }, { variant_id: variantId, quantity: 1 })
          })
          .then(function () {
            return client.checkout.orderUpdate({ orderToken }, { order: orderFullAddress })
          })
          .then(function () {
            return client.checkout.shippingMethods({ orderToken })
          })
          .then(function (shippingResponse) {
            const firstShipment = shippingResponse.success().data[0]
            const shippingRateId = (firstShipment.relationships.shipping_rates.data as RelationType[])[0].id

            return client.checkout.orderUpdate(
              { orderToken },
              {
                order: {
                  shipments_attributes: [
                    {
                      id: firstShipment.id,
                      selected_shipping_rate_id: shippingRateId
                    }
                  ]
                }
              }
            )
          })
          .then(function () {
            return client.checkout.paymentMethods({ orderToken })
          })
          .then(function (paymentsResponse) {
            const checkPaymentId = paymentsResponse
              .success()
              .data.find((paymentMethod) => paymentMethod.attributes.type === 'Spree::PaymentMethod::Check')!.id

            return client.checkout.orderUpdate(
              { orderToken },
              {
                order: {
                  payments_attributes: [
                    {
                      payment_method_id: checkPaymentId
                    }
                  ]
                }
              }
            )
          })
          .then(function () {
            return client.checkout.complete({ orderToken })
          })
          .then(function (orderCompleteResponse) {
            expect(orderCompleteResponse.isSuccess()).to.be.true
          })
          .then(function () {
            return client.order.status({ orderToken }, orderNumber)
          })
          .then(function (statusResponse) {
            expect(statusResponse.isSuccess()).to.be.true
          })
      })
  })

  it('shows cart', function () {
    const client: Client = this.clientRef.value

    cy.wrap(null)
      .then(function () {
        return client.cart.create()
      })
      .then(function (cartCreateResponse) {
        const orderToken = cartCreateResponse.success().data.attributes.token

        return client.cart.show({ orderToken })
      })
      .then(function (cartShowResponse) {
        expect(cartShowResponse.isSuccess()).to.be.true
      })
  })

  it('removes cart', function () {
    const client: Client = this.clientRef.value

    cy.wrap(null)
      .then(function () {
        return client.cart.create()
      })
      .then(function (cartCreateResponse) {
        const orderToken = cartCreateResponse.success().data.attributes.token

        return client.cart.remove({ orderToken })
      })
      .then(function (cartRemoveResponse) {
        expect(cartRemoveResponse.isSuccess()).to.be.true
      })
  })

  it('lists payment methods', function () {
    const client: Client = this.clientRef.value

    cy.wrap(null)
      .then(function () {
        return client.cart.create()
      })
      .then(function (cartCreateResponse) {
        const orderToken = cartCreateResponse.success().data.attributes.token

        return client.checkout.paymentMethods({ orderToken })
      })
      .then(function (paymentMethodsResponse) {
        expect(paymentMethodsResponse.isSuccess()).to.be.true
      })
  })
}

const createServerVersionInTheBrowserTests = ({
  host,
  fetcherType
}: {
  host: string
  fetcherType: FetcherStrategies
}) => {
  describe(`server version (i.e. CJS module) in the browser using ${fetcherType}`, function () {
    beforeEach(function () {
      const client = makeClient({ host, fetcherType })

      cy.wrap({ value: client }).as('clientRef')
    })

    createTests()
  })
}

const createClientVersionInTheBrowserTests = ({
  host,
  fetcherType
}: {
  host: string
  fetcherType: FetcherStrategies
}) => {
  describe(`client version (window global) in the browser using ${fetcherType}`, function () {
    beforeEach(function () {
      cy.readFile('/sdk/dist/client/index.js').then(function (spreeClientScript) {
        cy.intercept('/SpreeClientSpecialPath', spreeClientScript)
        cy.document().then((document) => {
          const scriptElement = document.createElement('script')

          scriptElement.src = '/SpreeClientSpecialPath'
          document.head.appendChild(scriptElement)

          cy.window()
            .its('SpreeSDK.makeClient')
            .then(function (makeClient) {
              const client = makeClient({ host, fetcherType })

              cy.wrap({ value: client }).as('clientRef')
            })
        })
      })
    })

    createTests()
  })
}

const createServerVersionInTheServerTests = ({ host, fetcherType }: { host: string; fetcherType: string }) => {
  describe(`server (i.e. CJS module) in the server using ${fetcherType}`, function () {
    beforeEach(function () {
      const noop = function () {
        // no-op
      }
      const createSubProxy = function (target: any, clientMethodPath: string[]): any {
        return new Proxy(target, {
          apply: function (_target, _thisArg, argumentsList) {
            const payload = { argumentsList, clientMethodPath, fetcherType }

            // Send call to a mini Express server which calls Spree.
            return cy.request(host, payload).then(function (response) {
              return result.fromJson(response.body)
            })
          },
          get: function (_target: any, property: string | symbol, _receiver: any) {
            return createSubProxy(noop, [...clientMethodPath, property.toString()])
          }
        })
      }
      const client = createSubProxy(noop, [])

      cy.wrap({ value: client }).as('clientRef')
    })

    createTests()
  })
}

describe('using Spree SDK', function () {
  before(function () {
    cy.fixture('order-full-address').as('orderFullAddress')
  })

  createServerVersionInTheBrowserTests({ host: 'http://docker-host:3000', fetcherType: 'axios' })

  createServerVersionInTheBrowserTests({ host: 'http://docker-host:3000', fetcherType: 'fetch' })

  createClientVersionInTheBrowserTests({ host: 'http://docker-host:3000', fetcherType: 'axios' })

  createClientVersionInTheBrowserTests({ host: 'http://docker-host:3000', fetcherType: 'fetch' })

  createServerVersionInTheServerTests({ host: 'http://express:5000', fetcherType: 'axios' })

  createServerVersionInTheServerTests({ host: 'http://express:5000', fetcherType: 'fetch' })
})
