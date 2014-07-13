Rails.application.routes.draw do

resources :users, :maps, :pins, except: [:new, :edit]

end
