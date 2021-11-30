#!/usr/bin/env bash

set -e

cd /app

npm install

# Install optional peerDependencies
npm install axios
npm install node-fetch

npm run build
npm link

cd /app/docker/express

npm install
npm link @spree/storefront-api-v2-sdk

/app/wait-for-it.sh -s docker-host:3000

node ./index.js
