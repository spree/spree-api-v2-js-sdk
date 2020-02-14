import { makeClient } from '@spree/storefront-api-v2-sdk'

describe('using SDK client in browser', function () {
  before(function () {
    const client = makeClient({
      host: 'http://spree:3000'
    })
    cy.wrap(client).as('client')
  })

  it('creates new cart', function () {
    const { client } = this

    cy.wrap(null).then(async () => {
      const cartCreateResponse = await client.cart.create()

      const orderToken = cartCreateResponse.success().data.attributes.token

      const addItemResponse = await client.cart.addItem({ orderToken }, { variant_id: '1', quantity: 1 })

      const order = await client.checkout.orderUpdate({ orderToken }, {
        order: {
          bill_address_attributes: {
            address1: '7735 Old Georgetown Road',
            city: 'Bethesda',
            country_iso: 'US',
            firstname: 'John',
            lastname: 'Snow',
            phone: '3014445002',
            state_name: 'MD',
            zipcode: '20814'
          },
          email: 'john@snow.org',
          ship_address_attributes: {
            address1: '7735 Old Georgetown Road',
            city: 'Bethesda',
            country_iso: 'US',
            firstname: 'John',
            lastname: 'Snow',
            phone: '3014445002',
            state_name: 'MD',
            zipcode: '20814'
          },
          special_instructions: 'Please leave at door'
        }
      })

      order.success()
    })
  })
})
