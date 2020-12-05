class Api::V1::PropertiesController < ApplicationController
    def index
        @properties = Api::V1::Property.all
        render json: @properties, except: [:created_at, :updated_at], include: :state
    end

    def update 
        @property = Api::V1::Property.find_by_id(params[:id])
        if params[:flag]
            @property.update(address: params[:address], photo: params[:image], paid: params[:paid], rent: params[:rent], expenses: params[:expenses])
        else
            @property.update(paid: !@property.paid)
        end
        
        render json: @property, except: [:created_at, :updated_at], include: :state
    end

    private

    def property_params
        params.require(:property).permit(:address, :image, :rent, :expenses, :paid, :flag)
    end

end
