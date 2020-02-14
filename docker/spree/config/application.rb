module Sandbox
  class Application
    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: :any
      end
    end
    config.hosts << "spree"
  end
end
