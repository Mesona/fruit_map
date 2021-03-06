class Api::HarvestsController < ApplicationController

  def index
    @harvests = Harvest.all
    render json: @harvests.to_json(:include => :harvest_type)
  end

  def show
    @harvest = Harvest.find(params[:id])
    if @harvest
      render :show
    else
      render json: @harvest.errors.full_messages, status: 404
    end
  end

  def edit
    @harvest = Harvest.find(params[:id])
    render json: @harvest;
  end

  def create
    @harvest = Harvest.new(harvest_params)
    # @harvest.assign_harvest_type

    if @harvest.save!
      render json: @harvest;
    else
      render json: @harvest.errors.full_messages, status: 401
    end
  end

  def update
    @harvest = Harvest.find(params[:id])
    if @harvest.update(harvest_params)
      render :show
    else
      render json: @harvest.errors.full_messages, status: 422
    end
  end

  private
    def harvest_params
      params.require(:harvest).permit(:harvest_name, :ripe, :lat, :lng)
    end


end
