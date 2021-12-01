#!/usr/bin/env bash

set -e

/sdk/wait-for-it.sh -s docker-host:3000

node /app/index.js
