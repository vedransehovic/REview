class Api::V1::PropertiesController < ApplicationController
    def index
        @properties = Api::V1::Property.all
        render json: @properties, except: [:created_at, :updated_at], include: :state
    end

    def update 
        @property = Api::V1::Property.find_by_id(params[:id])
        if @property.paid == false
            @property.update(paid: true)
        else 
            @property.update(paid: false)
        end
        
        render json: @property, except: [:created_at, :updated_at], include: :state
    end
end
