Rails.application.routes.draw do
  devise_for :users
  namespace :api do
    namespace :v1 do
      get 'tutors/index'
      get 'tutors/favourites'
      post 'tutors/create'
      get '/show/:id', to: 'tutors#show'
      delete '/destroy/:id', to: 'tutors#destroy'
      resources :tutors do
        put :favorite, on: :member
      end
    end
  end
  root 'homepage#index'
  get '/*path' => 'homepage#index'

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
