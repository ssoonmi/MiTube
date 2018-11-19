Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :index,:show]
    get "/users/:username/channels", to: "channels#show_by_username", as: :channels_username
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :update, :destroy, :index, :show] do
      resources :videos, only: [:index, :create]
    end
    resources :videos, only: [:update, :destroy, :show] do
      post '/likes', to: 'likes#create'
      delete '/likes', to: 'likes#destroy'
      resources :comments, only: [:create, :index]
    end

    resources :comments, only: [:destroy, :update]
  end
end
