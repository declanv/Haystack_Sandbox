class MapsController < ApplicationController

  respond_to :json

  def create

    map = Map.create(map_params)
    respond_with map

  end

  def index

    maps = Map.all
    # respond_with maps
    respond_with [{
      name: "Pizza",
      id: 1,
      creator_id: 1,
      owner_id: 1,
      map_lat: 40.6673313,
      map_long: -73.97638660000001,
      pins: [{name: "pin_1", id: 2, pin_lat: 40.71099564163109, pin_long: -73.97638660000001, map_id: 1}, {name: "pin_2", id: 3, pin_lat: 40.63287733854152, pin_long: -73.97638660000001, map_id: 1}]
    }]

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
