class SignsController < ApplicationController

    skip_before_action :authorize, only: :index

    def index
        render json: Sign.all
    end
end
