#!/usr/bin/env bash

set -e

/sdk/wait-for-it.sh -s express:5000
/sdk/wait-for-it.sh -s docker-host:3000

cypress run --browser chrome:stable --project /app
