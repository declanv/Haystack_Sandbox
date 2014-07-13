class PinsController < ApplicationController

  respond_to :json

  def create

    pin = Pin.create(pin_params)
    respond_with pin

  end

  def pin_params
    params.require(:pin).permit(:name, :pin_lat, :pin_long, :map_id)
  end

end
