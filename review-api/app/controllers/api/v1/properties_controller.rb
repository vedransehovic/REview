class Api::V1::PropertiesController < ApplicationController
    def index
        @properties = Api::V1::Property.all
        render json: @properties, except: [:created_at, :updated_at]
    end

    private

    def states
        properties = Api::V1::Property.all
        states = properties.map{|property| property.state.abbreviation}.uniq
    end
end
