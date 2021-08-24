#!/bin/bash

docker-compose -f docker-compose-spree.yml -f docker-compose-cypress.yml down -v

docker-compose -f docker-compose-spree.yml pull

COMPOSE_HTTP_TIMEOUT=600 docker-compose -f docker-compose-spree.yml run --entrypoint="bash -c" spree "
set -e

# Allow connections from Cypress (through the docker-host container).

echo \"
Rails.application.configure do
  config.hosts << 'docker-host'
end
\" >> config/environments/production.rb

echo \"
production:
  <<: *default
  database: spree_starter_production
  host: <%= ENV.fetch('DB_HOST', 'localhost') %>
  username: postgres
  port: <%= ENV.fetch('DB_PORT', '5432') %>
\" >> config/database.yml

bundle add rack-cors --version '~> 1.1.1'

echo \"
module SpreeStarter
  class Application < Rails::Application
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: :any
      end
    end
  end
end
\" >> config/application.rb

# Install dependencies.

bundle install --without test

# Seed the database.

bin/wait-for-services
bundle exec rails db:drop
bundle exec rails db:create
bundle exec rails db:migrate
echo '' | bundle exec rails db:seed
bundle exec rails spree_sample:load
rm -rf tmp/latest.dump
"

docker-compose -f docker-compose-cypress.yml pull

docker-compose -f docker-compose-spree.yml -f docker-compose-cypress.yml up --exit-code-from cypress