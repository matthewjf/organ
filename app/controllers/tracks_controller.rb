class TracksController < ApplicationController
  def create
    @track = Track.new(track_params)
  end

  def index

  end

  def destroy

  end
end
