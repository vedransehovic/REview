class Api::V1::StatesController < ApplicationController
    def index
        @states = Api::V1::State.all
        render json: @states, except: [:created_at, :updated_at]
    end
end
