#!/usr/bin/env bash

set -e

cd /app

npm install
npm link

cd /app/docker/express

npm install
npm link @spree/storefront-api-v2-sdk

node ./index.js
