#!/usr/bin/env bash

set -e

/sdk/wait-for-it.sh http://docker-host:3000/api/v2/storefront/products?per_page=1 -t 300

node /app/index.js
