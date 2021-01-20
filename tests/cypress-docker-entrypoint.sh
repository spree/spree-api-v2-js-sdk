#!/usr/bin/env bash

set -e

cd /sdk

npm install
npm link

cd /sdk/tests

npm install
npm link @spree/storefront-api-v2-sdk

# Source: https://github.com/vishnubob/wait-for-it
./wait-for-it.sh spree:3000 -s -- cypress run --project /sdk/tests
