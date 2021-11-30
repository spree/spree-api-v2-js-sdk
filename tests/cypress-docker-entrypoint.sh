#!/usr/bin/env bash

set -e

cd /sdk

npm install
npm run build
npm pack

cd /sdk/tests

npm install
npm install `find /sdk/spree-storefront-api-v2-sdk-*.tgz`

/sdk/wait-for-it.sh -s express:5000
/sdk/wait-for-it.sh -s docker-host:3000

cypress run --browser chrome:stable --project /sdk/tests
