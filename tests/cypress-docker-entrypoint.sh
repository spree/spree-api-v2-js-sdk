#!/usr/bin/env bash

set -e

cd /sdk

yarn install
yarn link

cd /sdk/tests

yarn install
yarn link @spree/storefront-api-v2-sdk

# Source: https://github.com/vishnubob/wait-for-it
./wait-for-it.sh spree:3000 -s -- cypress run --project /sdk/tests
