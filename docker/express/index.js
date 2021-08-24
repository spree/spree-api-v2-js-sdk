import express from 'express'
import bodyParser from 'body-parser'
import sdk from '@spree/storefront-api-v2-sdk'

const app = express()

const { makeClient, result } = sdk

app.use(bodyParser.json())

app.all('/', async (request, response, next) => {
  try {
    console.log('The Express server received a new request. Arguments: ', request.body)

    const { clientMethodPath, argumentsList, fetcherType } = request.body
    const localClient = makeClient({ host: 'http://docker-host:3000', fetcherType })
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
