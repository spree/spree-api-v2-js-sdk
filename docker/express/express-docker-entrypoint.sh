#!/usr/bin/env bash

set -e

cd /app

npm install
npm run build
npm pack

cd /app/docker/express

npm install
npm install `find /app/spree-storefront-api-v2-sdk-*.tgz`

/app/wait-for-it.sh -s docker-host:3000

node ./index.js
