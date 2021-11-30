#!/usr/bin/env bash

set -e

cd /sdk

npm install
npm link

cd /sdk/tests

npm install
npm link @spree/storefront-api-v2-sdk

/sdk/wait-for-it.sh -s express:5000
/sdk/wait-for-it.sh -s docker-host:3000

cypress run --browser chrome:stable --project /sdk/tests
