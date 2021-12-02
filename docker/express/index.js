import express from 'express'
import bodyParser from 'body-parser'
import sdk from '@spree/storefront-api-v2-sdk'
import createAxiosFetcher from '@spree/storefront-api-v2-sdk/dist/server/createAxiosFetcher.js'
import createFetchFetcher from '@spree/storefront-api-v2-sdk/dist/server/createFetchFetcher.js'

const { makeClient, result } = sdk

const app = express()

app.use(bodyParser.json())

app.get('/ping', (_request, response) => {
  response.send('up')
})

app.all('/', async (request, response, next) => {
  try {
    console.log('The Express server received a new request. Arguments: ', request.body)

    const { clientMethodPath, argumentsList, fetcherType } = request.body

    let createFetcher

    switch (fetcherType) {
      case 'axios':
        createFetcher = createAxiosFetcher.default
        break
      case 'fetch':
        createFetcher = createFetchFetcher.default
        break
      default:
        throw new Error(`${fetcherType} not recognized.`)
    }

    const localClient = makeClient({ host: 'http://docker-host:3000', createFetcher })
    const finalNode = clientMethodPath.reduce((node, pathPart) => {
      if (typeof node[pathPart] === 'function') {
        return node[pathPart].bind(node)
      }

      return node[pathPart]
    }, localClient)

    const spreeResponse = await finalNode(...argumentsList)

    response.json(result.toJson(spreeResponse))
  } catch (error) {
    next(error)
  }
})

app.listen(5000, '0.0.0.0', () => {
  console.log('Listening at localhost and port 5000.')
})
