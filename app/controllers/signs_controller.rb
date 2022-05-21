class SignsController < ApplicationController
    def index
        render json: Sign.all
    end
end
