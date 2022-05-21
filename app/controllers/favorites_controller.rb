class FavoritesController < ApplicationController
  # before_action :set_favorite, only: [:show, :update, :destroy]
  def create
    favorites = Favorite.create!(favorites_params)
    render json: favorites, status: :created
  end

  def update
    favorites = Favorite.find(params[:id])
    favorites.update(favorites_params)
      render json: favorites_params
  end 

  def destroy
     favorites = Favorite.find(params[:id])
      favorites.destroy
      head :no_content
  end

  private

  def favorites_params
      params.permit(:user_id, :sign_id)
  end

end