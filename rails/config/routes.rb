Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions' }


  # token auth routes available at /api/v1/auth
  namespace :api do
    scope :v1 do
      mount_devise_token_auth_for 'User', at: 'auth'
    end
  end

  root to: "home#index"
end
