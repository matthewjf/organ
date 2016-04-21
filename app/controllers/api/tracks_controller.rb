class Api::TracksController < ApplicationController
  def create
    roll = params[:track][:roll]
    @track = Track.new(track_params)
    @track.roll = roll

    if @track.save
      render json: @track
    else
      render json: {errors: @trackerrors.full_messages, status: 400}
    end
  end

  def index
    @tracks = Track.all
    render json: @tracks
  end

  def destroy
    @track = Track.find(params[:id])
    if @track.destroy
      render json: @track
    else
      render json: {errors: @track.errors.full_messages, status: 400}
    end
  end

  private
  def track_params
    params.require(:track).permit(:name)
  end
end
