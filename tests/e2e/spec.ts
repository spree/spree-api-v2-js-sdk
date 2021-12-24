// To import @spree/storefront-api-v2-sdk, run 'npm link' and 'npm link @spree/storefront-api-v2-sdk'
// in the project's root directory.
import { Client, makeClient, result, jsonApi } from '@spree/storefront-api-v2-sdk'
import type { RelationType } from '@spree/storefront-api-v2-sdk/types/interfaces/Relationships'
import createAxiosFetcher from '@spree/storefront-api-v2-sdk/dist/server/createAxiosFetcher'
import createFetchFetcher from '@spree/storefront-api-v2-sdk/dist/server/createFetchFetcher'

const createTests = function () {
  it('completes guest order', function () {
    const { orderFullAddress } = this
    const client: Client = this.clientRef.value

    cy.wrap(null)
      .then(function () {
        return result.extractSuccess(client.cart.create())
      })
      .then(function (cartCreateResponse) {
        const { token: order_token, number: order_number } = cartCreateResponse.data.attributes

        return cy
          .wrap(null)
          .then(function () {
            return result.extractSuccess(client.products.list({ include: 'default_variant' }))
          })
          .then(function (variantsResponse) {
            const variantId = jsonApi.findSingleRelationshipDocument(
              variantsResponse,
              variantsResponse.data[0],
              'default_variant'
            ).id

            return client.cart.addItem({ order_token, variant_id: variantId, quantity: 1 })
          })
          .then(function () {
            return client.checkout.orderUpdate({ order_token, order: orderFullAddress })
          })
          .then(function () {
            return result.extractSuccess(client.checkout.shippingRates({ order_token }))
          })
          .then(function (shippingResponse) {
            const firstShipment = shippingResponse.data[0]
            const shippingRateId = (firstShipment.relationships.shipping_rates.data as RelationType[])[0].id

            return client.checkout.orderUpdate({
              order_token,
              order: {
                shipments_attributes: [
                  {
                    id: firstShipment.id,
                    selected_shipping_rate_id: shippingRateId
                  }
                ]
              }
            })
          })
          .then(function () {
            return result.extractSuccess(client.checkout.paymentMethods({ order_token }))
          })
          .then(function (paymentsResponse) {
            const checkPaymentId = paymentsResponse.data.find(
              (paymentMethod) => paymentMethod.attributes.type === 'Spree::PaymentMethod::Check'
            )!.id

            return client.checkout.orderUpdate({
              order_token,
              order: {
                payments_attributes: [
                  {
                    payment_method_id: checkPaymentId
                  }
                ]
              }
            })
          })
          .then(function () {
            return client.checkout.complete({ order_token })
          })
          .then(function (orderCompleteResponse) {
            expect(orderCompleteResponse.isSuccess()).to.be.true
          })
          .then(function () {
            return client.order.status({ order_token, order_number })
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
        return result.extractSuccess(client.cart.create())
      })
      .then(function (cartCreateResponse) {
        const orderToken = cartCreateResponse.data.attributes.token

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
        return result.extractSuccess(client.cart.create())
      })
      .then(function (cartCreateResponse) {
        const orderToken = cartCreateResponse.data.attributes.token

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
        return result.extractSuccess(client.cart.create())
      })
      .then(function (cartCreateResponse) {
        const orderToken = cartCreateResponse.data.attributes.token

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
  fetcherType: 'axios' | 'fetch'
}) => {
  describe(`server version (i.e. CJS module) in the browser using ${fetcherType}`, function () {
    beforeEach(function () {
      let createFetcher

      switch (fetcherType) {
        case 'axios':
          createFetcher = createAxiosFetcher
          break
        case 'fetch':
          createFetcher = createFetchFetcher
          break
        default:
          throw new Error(`${fetcherType} not recognized.`)
      }

      const client = makeClient({ host, createFetcher })

      cy.wrap({ value: client }).as('clientRef')
    })

    createTests()
  })
}

const includeFileAsScript = (path: string) => {
  return cy.readFile(path).then(function (fileAtPath) {
    cy.intercept(path, fileAtPath)

    return cy.document().then((document) => {
      const scriptElement = document.createElement('script')

      scriptElement.src = path

      document.head.appendChild(scriptElement)
    })
  })
}

const createClientVersionInTheBrowserTests = ({
  host,
  fetcherType
}: {
  host: string
  fetcherType: 'axios' | 'fetch'
}) => {
  describe(`client version (window global) in the browser using ${fetcherType}`, function () {
    beforeEach(function () {
      cy.wrap(null)
        .then(() => {
          return includeFileAsScript('/app/node_modules/@spree/storefront-api-v2-sdk/dist/client/index.js')
        })
        .then(() => {
          return includeFileAsScript('/app/node_modules/axios/dist/axios.min.js')
        })
        .then(() => {
          let fetcherPath

          switch (fetcherType) {
            case 'axios':
              fetcherPath = '/app/node_modules/@spree/storefront-api-v2-sdk/dist/client/createAxiosFetcher.js'
              break
            case 'fetch':
              fetcherPath = '/app/node_modules/@spree/storefront-api-v2-sdk/dist/client/createFetchFetcher.js'
              break
            default:
              throw new Error(`${fetcherType} not recognized.`)
          }

          return includeFileAsScript(fetcherPath)
        })
        .then(() => {
          return cy
            .window()
            .its('SpreeSDK.makeClient')
            .then(function (makeClient) {
              let globalKey

              switch (fetcherType) {
                case 'axios':
                  globalKey = 'createAxiosFetcher'
                  break
                case 'fetch':
                  globalKey = 'createFetchFetcher'
                  break
                default:
                  throw new Error(`${fetcherType} not recognized.`)
              }

              return cy
                .window()
                .its(`SpreeSDK.${globalKey}.default`)
                .then(function (createFetcher) {
                  const client = makeClient({ host, createFetcher })

                  return cy.wrap({ value: client }).as('clientRef')
                })
            })
        })
    })

    createTests()
  })
}

const createServerVersionInTheServerTests = ({
  host,
  fetcherType
}: {
  host: string
  fetcherType: 'axios' | 'fetch'
}) => {
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
