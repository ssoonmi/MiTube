Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"

  namespace :api, default: {format: :json} do
    resources :users, only: [:create, :update, :destroy, :index,:show]
    get "/users/:username/channels", to: "channels#show_by_username", as: :channels_username
    resource :session, only: [:create, :destroy]
    resources :channels, only: [:create, :update, :destroy, :index, :show]
  end
end
