Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :properties
    end
  end
  namespace :api do
    namespace :v1 do
      resources :states
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
