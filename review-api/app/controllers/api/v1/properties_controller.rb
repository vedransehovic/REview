class Api::V1::PropertiesController < ApplicationController
    def index
        @properties = Api::V1::Property.all
        render json: @properties, except: [:created_at, :updated_at], include: :state
    end

end
