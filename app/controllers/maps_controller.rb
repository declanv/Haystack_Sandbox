class MapsController < ApplicationController

  respond_to :json

  def create

    map = Map.create(map_params)
    respond_with map

  end

  def index

    maps = Map.all
    respond_with maps

  end

    def show

    map = Map.find_by_title(map_params)
    respond_with map

  end

  def destroy

    map = Map.find(params[:id])
    map.destroy

    respond_with map
  end

  def update

  map = Map.find(params[:id])
  map.update_attributes(name: params[:name])

  respond_with map
  end

  def map_params
    params.require(:map).permit(:name, :id, :creator_id, :owner_id, :map_lat, :map_long)
  end

end
