Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :index,:show]
    get "/users/:username/channels", to: "channels#show_by_username", as: :channels_username
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :update, :destroy, :index, :show] do
      resources :videos, only: [:create]
      resources :subscriptions, only: [:create]
      delete '/subscriptions', to: 'subscriptions#destroy'
    end
    resources :videos, only: [:update, :destroy, :show, :index] do
      post '/likes', to: 'likes#create'
      delete '/likes', to: 'likes#destroy'
      resources :comments, only: [:create, :index]
      resources :views, only: [:create]
    end

    get "/videos/:id/next_suggestions", to: "videos#next_suggestions", as: :videos_suggestions

    resources :comments, only: [:destroy, :update] do
      post '/likes', to: 'likes#create'
      delete '/likes', to: 'likes#destroy'
      get '/replies', to: 'comments#replies'
    end

    resources :subscriptions, only: [:index]
  end
end
