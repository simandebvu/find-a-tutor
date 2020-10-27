class Api::V1::TutorsController < ApplicationController
  
  before_action :authenticate_user!, only: [:create]
  def index
    tutor = Tutor.all.order(created_at: :desc)
    render json: tutor
  end

  def create
    tutor = Tutor.create!(tutor_params)
    if tutor
      render json: tutor
    else
      render json: tutor.errors
    end
  end

  def show
    if tutor
      render json: tutor
    else
      render json: tutor.errors
    end
  end

  def destroy
    tutor&.destroy
    render json: { message: 'Sucessfully Removed Tutor'}
  end

  private

  def tutor_params
    params.permit(:name, :links, :description, :image)
  end

  def tutor
    @tutor ||= Tutor.find(params[:id])    
  end
end
